<template>
  <UCard class="mb-4 max-w-lg mx-auto">
    <nuxt-link :to="`/posts/${post.id}/`">
      <div class="uppercase text-primary font-semibold">
        {{ post.title }}
      </div>

      <p class="mt-2 text-gray-500">
        {{ post.content || 'no content' }}
      </p>

      <div class="mt-4 text-gray-400 text-xs font-semibold">
        Created at:

        {{ dayjs(post.created_at).format('MMMM D, YYYY') }}
      </div>
    </nuxt-link>
  </UCard>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

defineProps<{ post: Post }>()
</script>

<style scoped></style>
