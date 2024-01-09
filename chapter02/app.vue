<template>
  <div class="bg-neutral">
    <!-- Header -->
    <base-header />

    <!-- Hero Section -->
    <section class="bg-secondary text-white py-20">
      <div class="container grid md:grid-cols-2">
        <div class="col-span-1 flex flex-col justify-center items-start">
          <h1 class="text-5xl mb-4">Hello! I'm Kareem Dabbeet</h1>

          <p class="text-2xl mb-8">
            A frontend developer specializing in Vue & Nuxt.
          </p>

          <button
            @click="useScrollTo('showcase')"
            class="bg-primary text-white px-8 py-4 rounded-full hover:bg-opacity-90 transition duration-300"
          >
            View My Work
          </button>
        </div>

        <div class="col-span-1 flex justify-end">
          <img src="~/assets/images/vue-logo.webp" class="h-[350px]" />
        </div>
      </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="py-16 bg-neutral">
      <div class="container mx-auto text-center">
        <img
          src="~/assets/images/avatar.jpeg"
          alt="Kareem Dabbeet"
          class="rounded-full w-48 h-48 mx-auto mb-6 shadow-xl border-4 border-dashed border-primary"
        />

        <p
          class="text-gray-700 max-w-4xl mx-auto text-lg leading-loose mb-6 px-4"
        >
          Hello! I'm Kareem Dabbeet, a frontend developer with a passion for
          building performant and user-friendly web applications. With expertise
          in Vue.js and Nuxt.js, I take pride in crafting solutions that are not
          only functional but also elegantly coded.
        </p>

        <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          <skill-chip> Javascript </skill-chip>
          <skill-chip> Vue </skill-chip>
          <skill-chip> Nuxt </skill-chip>
          <skill-chip> TailwindCSS </skill-chip>
        </div>

        <div class="text-center mb-4">
          <a
            href="#showcase"
            class="bg-primary text-neutral rounded transition-all duration-300 hover:bg-secondary transform hover:-translate-y-1 py-3 px-6 mb-2"
          >
            Check out my projects
          </a>
        </div>
      </div>
    </section>

    <curved-divider />

    <!-- showcase / My Work -->
    <section id="showcase" class="py-16 bg-slate-200">
      <h2 class="text-primary text-3xl mb-8 text-center">My Work</h2>
      <div
        class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
      >
        <project-showcase
          v-for="project in projects"
          :key="project.name"
          :project="project"
        />
      </div>
    </section>

    <!-- Divider -->
    <div class="bg-slate-200 py-6">
      <div class="container mx-auto text-center">
        <div class="inline-block w-16 h-1 bg-primary rounded-full"></div>
      </div>
    </div>

    <div class="bg-gradient-to-b from-slate-200 to-neutral h-10"></div>
    <!-- Contact Section -->
    <section id="contact" class="py-16 bg-neutral text-center relative">
      <h2 class="text-primary text-4xl mb-6 font-bold">Let's Talk</h2>

      <p class="text-secondary mb-8 text-lg">
        Interested in collaborating or just want to say hi? Drop me a message!
      </p>
      <a
        href="mailto:kareemda1@gmail.com"
        class="inline-block bg-primary text-neutral px-8 py-4 rounded-full text-lg font-semibold transform transition-all duration-300 hover:bg-opacity-90 hover:scale-105"
      >
        Contact Me
      </a>
    </section>

    <!-- Footer -->
    <footer class="bg-secondary text-white p-6 text-center">
      &copy; 2023 Kareem Dabbeet. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    name: 'VueShop',
    description:
      'An e-commerce platform built with Vue.js and Vuetify, featuring user authentication, product search, and online payment.',
    image: '/images/projects/1.jpeg',
    link: '#'
  },
  {
    name: 'NuxtBlog',
    description:
      'A static blog generated with Nuxt.js, utilizing Markdown for content management and Tailwind CSS for styling.',
    image: '/images/projects/2.jpeg',
    link: '#'
  },
  {
    name: 'VueWeather',
    description:
      'A weather application built with Vue.js, using a third-party API to fetch and display weather data based on user location input.',
    image: '/images/projects/3.jpeg',
    link: '#'
  }
]
</script>

<style></style>
