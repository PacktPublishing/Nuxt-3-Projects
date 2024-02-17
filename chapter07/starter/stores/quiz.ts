import questions from '~/data/questions'

export const useQuizStore = defineStore('quiz', () => {
  const currentQuestionIndex = ref(0)
  const quizFinished = ref(false)
  const result = ref<Result[]>([])
  const score = ref(0)

  const quiz = computed(() => selectRandomQuestions(questions, 5))

  // Directly use currentQuestionIndex for finding the current question.
  const currentQuestion = computed(() => quiz.value[currentQuestionIndex.value])

  // Update score and result based on the answer.
  const updateProgress = (answerId: number) => {
    const question = currentQuestion.value
    const answerIsRight = question.rightAnswerId === answerId
    if (answerIsRight) score.value++

    result.value.push({
      ...question,
      userAnswer:
        question.answers.find(({ id }) => id === answerId) ??
        ({ body: 'no answer' } as Answer),
      answerIsRight
    })

    // Move to the next question or mark quiz as finished.
    if (currentQuestionIndex.value < quiz.value.length - 1)
      currentQuestionIndex.value++
    else quizFinished.value = true
  }

  // Reset the quiz to its initial state.
  const restartQuiz = () => {
    currentQuestionIndex.value = 0
    quizFinished.value = false
    result.value = []
    score.value = 0
  }

  return {
    quizFinished,
    quiz,
    currentQuestion,
    updateProgress,
    restartQuiz,
    result,
    score
  }
})
