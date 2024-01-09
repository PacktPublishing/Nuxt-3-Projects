<template>
  <div class="bg-gray-100 min-h-screen">
    <UContainer>
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-6">
        My Posts
      </h1>

      <post-card v-for="post in posts" :post="post" />
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const supabase = useSupabaseClient()

const { data: posts } = await useLazyAsyncData(async () => {
  let { data } = await supabase.from('posts').select().returns<Post[]>()

  return data
})
</script>

<style scoped></style>
