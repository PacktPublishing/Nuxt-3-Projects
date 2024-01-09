<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="container flex justify-between items-center">
      <!-- Left side - Logo or Brand Name -->
      <div class="text-xl font-bold uppercase">
        <nuxt-link to="/">My space</nuxt-link>
      </div>

      <!-- Right side - Links -->
      <div class="flex gap-x-4">
        <UButton variant="link" color="white" to="/my-account">
          My Account
        </UButton>

        <UButton to="/posts/create">New Post</UButton>
      </div>
    </div>
  </nav>

  <main>
    <slot></slot>
  </main>
</template>
