<template>
  <footer class="bg-zinc-900 text-gray-300">
    <div class="container text-center lg:text-left py-12">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <!-- Company Name -->
        <div class="mb-4 lg:mb-0">
          <h3 class="text-3xl text-gray-200 uppercase font-extralight mb-8">
            Homsecape
          </h3>

          <p class="text-gray-400">
            123 Elm Street<br />
            Suite 456<br />
            Springfield, IL 62704
          </p>
        </div>

        <!-- Listing by Category -->
        <div>
          <h4 class="text-lg font-bold text-gray-200 mb-2">
            Listing by Category
          </h4>
        </div>

        <!-- Additional Info -->
        <div>
          <h4 class="text-lg font-bold text-gray-200 mb-2">Additional Info</h4>
          <ul>
            <li class="mb-1">
              <a
                href="#"
                class="text-gray-400 transition-colors hover:text-primary"
                >FAQ</a
              >
            </li>
            <li class="mb-1">
              <a
                href="#"
                class="text-gray-400 transition-colors hover:text-primary"
                >Privacy Policy</a
              >
            </li>
            <li class="mb-1">
              <a
                href="#"
                class="text-gray-400 transition-colors hover:text-primary"
                >Terms of Service</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bg-zinc-950 text-center py-4 text-gray-400 text-sm">
      &copy; 2023 HOMESCAPE. All rights reserved.
    </div>
  </footer>
</template>

<script setup lang="ts">
import categories from '~/data/categories'
</script>
