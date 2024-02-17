<template>
  <div v-if="currentQuestion" class="text-center">
    <h1 class="text-4xl text-center capitalize font-bold mb-8">
      {{ currentQuestion.body }}
    </h1>

    <div class="grid grid-cols-2 gap-4">
      <button
        class="text-2xl font-bold bg-violet-900 hover:bg-violet-800 transition rounded-lg py-5"
        v-for="answer of currentQuestion.answers"
        @click="answered(answer.id)"
      >
        {{ answer.body }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const quizStore = useQuizStore()
const { currentQuestion } = storeToRefs(quizStore)

const answered = (answerId: number) => {
  quizStore.updateProgress(answerId)
}
</script>
