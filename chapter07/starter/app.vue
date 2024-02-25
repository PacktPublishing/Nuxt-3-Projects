<template>
  <div class="bg-violet-950 min-h-screen text-white">
    <div class="container py-12 text-center">
      <template v-if="quizStore.quizFinished">
        <h2
          class="w-64 h-64 border-8 rounded-full mx-auto flex items-center justify-center mb-12"
        >
          <span class="text-6xl font-bold"> {{ quizStore.score }} / 5 </span>
        </h2>

        <h1 class="text-4xl font-mont font-bold capitalize">
          <span>finished</span>
        </h1>

        <hr class="divider" />

        <div v-for="row in quizStore.result">
          <h1 class="text-3xl text-center font-bold">{{ row.body }}</h1>

          <div class="text-2xl capitalize mt-4 grid gap-2">
            <div
              class="feedback"
              :class="row.answerIsRight ? 'bg-emerald-600' : 'bg-rose-700'"
            >
              <span class="font-bold">Your answer is </span>

              <span>{{ row.userAnswer.body }}</span>
            </div>

            <div class="feedback bg-emerald-600" v-if="!row.answerIsRight">
              <span class="font-bold">right answer is </span>

              <span class="font-regular">
                {{ row.answers[row.rightAnswerId]?.body }}
              </span>
            </div>
          </div>

          <hr class="divider" />
        </div>

        <button
          class="text-4xl font-bold bg-white rounded-lg text-violet-950 capitalize px-4 py-2"
          @click="quizStore.restartQuiz"
        >
          restart quiz
        </button>
      </template>

      <Question v-else />
    </div>
  </div>
</template>

<script setup>
const quizStore = useQuizStore()
</script>

<style>
.feedback {
  @apply text-center font-bold p-4 max-w-2xl w-full mx-auto rounded-lg;
}

.divider {
  @apply my-8 w-64 mx-auto border-dotted border-t-4 border-violet-800;
}
</style>
