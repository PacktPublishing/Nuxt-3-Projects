<template>
  <div class="min-h-screen bg-gray-100">
    <UContainer>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 mb-8">
        Update Profile
      </h2>

      <UCard class="max-w-md mx-auto">
        <UForm
          class="space-y-6"
          :schema="schema"
          :state="profile"
          @submit="updateProfile"
        >
          <UFormGroup label="Email" name="email">
            <UInput type="text" :value="user?.email" disabled />
          </UFormGroup>

          <UFormGroup label="Username" name="username">
            <UInput type="text" v-model="profile.username" />
          </UFormGroup>

          <UFormGroup label="Website" name="website">
            <UInput type="url" v-model="profile.website" />
          </UFormGroup>

          <UFormGroup label="Full Name" name="full_name">
            <UInput type="text" v-model="profile.full_name" />
          </UFormGroup>

          <UButton type="submit" block primary :loading="pending">
            Update
          </UButton>
        </UForm>
      </UCard>

      <div class="flex justify-center mt-12">
        <UButton
          color="red"
          variant="outline"
          :loading="signOutLoading"
          @click="signOut"
        >
          Sign Out
        </UButton>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import Joi from 'joi'

const supabase = useSupabaseClient()
const user = useSupabaseUser()
const toast = useToast()

const signOutLoading = ref(false)

const profile = ref({
  username: '',
  website: '',
  full_name: ''
})

const schema = Joi.object({
  username: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]*$'))
    .allow('', null)
    .messages({
      'string.pattern.base': 'Username must contain only letters and numbers.'
    }),

  website: Joi.string().uri().allow('', null).messages({
    'string.uri': 'Please enter a valid URL for the website.'
  }),

  full_name: Joi.string().allow('', null)
})

const { pending } = useLazyAsyncData(async () => {
  const { data } = await supabase
    .from('profiles')
    .select(`username, website, full_name`)
    .eq('id', user.value.id)
    .single()

  if (data) profile.value = data
})

const updateProfile = async () => {
  pending.value = true

  const updates = {
    id: user.value.id,
    ...profile.value,
    updated_at: new Date()
  }

  try {
    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error

    toast.add({ title: 'Profile Updated Successfully' })
  } catch (error) {
    toast.add({ title: error.message, color: 'red' })
  }

  pending.value = false
}

const signOut = async () => {
  signOutLoading.value = true

  try {
    const { error } = await supabase.auth.signOut()

    if (error) throw error

    user.value = null

    navigateTo('/auth/login')
  } catch (error) {
    toast.add({ title: error.message, color: 'red' })
  }

  signOutLoading.value = false
}
</script>
