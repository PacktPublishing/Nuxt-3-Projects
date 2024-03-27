<template>
  <div class="min-h-screen bg-gray-100">
    <UContainer>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-8">
        Post Information
      </h2>

      <UCard class="max-w-md mx-auto">
        <UForm
          class="space-y-6"
          :schema="schema"
          :state="post"
          @submit="onSubmit"
        >
          <UFormGroup label="Title" name="title">
            <UInput type="text" v-model="post.title" />
          </UFormGroup>

          <UFormGroup label="Content" name="content">
            <UTextarea type="text" v-model="post.content" :rows="8" />
          </UFormGroup>

          <UButton type="submit" block primary :loading="pending">
            save changes
          </UButton>
        </UForm>
      </UCard>

      <div class="flex justify-center mt-12">
        <UButton
          color="red"
          variant="outline"
          :loading="deleteLoading"
          @click="deletePost"
        >
          Delete
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import Joi from 'joi'

const supabase = useSupabaseClient()
const user = useSupabaseUser()

const route = useRoute()
const toast = useToast()

const postId = computed(() => route.params.id)
const editMode = computed(() => route.params.id !== 'create')
const deleteLoading = ref(false)

const post = ref({
  title: '',
  content: undefined,
  author_id: user.value.id
})

const schema = Joi.object({
  author_id: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().allow('', null)
}).unknown(true) // to allow id, created at

const { pending } = useLazyAsyncData(async () => {
  // ignore fetching data when creating a new post
  if (!editMode.value) return

  const { data } = await supabase
    .from('posts')
    .select()
    .eq('id', postId.value)
    .single()

  if (data) post.value = data
})

const onSubmit = async () => {
  pending.value = true

  try {
    // upsert will check if there is a post with existing id => it'll update it
    // otherwise it'll create a new one
    const { error } = await supabase.from('posts').upsert(post.value)

    if (error) throw error

    if (!editMode.value) toast.add({ title: 'Post Created Successfully' })
    else toast.add({ title: 'Post Updated Successfully' })

    navigateTo('/')
  } catch (error) {
    toast.add({ title: error.message, color: 'red' })
  }

  pending.value = false
}

const deletePost = async () => {
  deleteLoading.value = true

  try {
    // upsert will check if there is a post with existing id => it'll update it
    // otherwise it'll create a new one
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId.value)

    if (error) throw error

    toast.add({ title: 'Post deleted Successfully' })

    navigateTo('/')
  } catch (error) {
    toast.add({ title: error.message, color: 'red' })
  }

  deleteLoading.value = false
}
</script>
