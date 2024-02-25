// stores/quiz.spec.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

describe('Quiz Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and makes it active
    // so it's automatically picked up by any useStore() call
    // without having to pass it to it: `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('initialize with a set of 5 quiz questions', () => {
    const quizStore = useQuizStore()

    expect(quizStore.quiz.length).toBe(5)
  })

  it(`don't increment the score when a wrong answer is selected`, () => {
    const quizStore = useQuizStore()

    const firstQuestion = quizStore.quiz[0]
    const wrongAnswerId = firstQuestion.answers.find(
      answer => answer.id !== firstQuestion.rightAnswerId
    )?.id

    // Attempt with a wrong answer
    if (wrongAnswerId !== undefined) {
      quizStore.updateProgress(wrongAnswerId)
      expect(quizStore.score).toBe(0) // Score should not increment
    }
  })

  it('increment the score only when the correct answer is selected', () => {
    const quizStore = useQuizStore()

    const firstQuestion = quizStore.quiz[0]
    const rightAnswerId = firstQuestion.rightAnswerId

    // Now try with the correct answer
    quizStore.updateProgress(rightAnswerId)
    expect(quizStore.score).toBe(1) // Score should increment by 1
  })

  it('adds the answered question to the result array with the correct status', () => {
    const quizStore = useQuizStore()

    const firstQuestion = quizStore.quiz[0]
    const rightAnswerId = firstQuestion.rightAnswerId

    // Answer the first question correctly
    quizStore.updateProgress(rightAnswerId)

    // Check that the result array has been updated
    expect(quizStore.result.length).toBe(1) // Ensures the result array has one entry

    const resultEntry = quizStore.result[0]
    expect(resultEntry).toBeDefined() // Ensures there is a result entry
    expect(resultEntry.userAnswer.id).toBe(rightAnswerId) // Checks if the correct answer ID is stored
    expect(resultEntry.answerIsRight).toBe(true) // Verifies the answer status is correct
  })

  it('adds the answered question to the result array with an incorrect status when a wrong answer is selected', () => {
    const quizStore = useQuizStore()

    const firstQuestion = quizStore.quiz[0]
    // Find a wrong answer ID
    const wrongAnswerId = firstQuestion.answers.find(
      answer => answer.id !== firstQuestion.rightAnswerId
    )?.id

    if (wrongAnswerId) {
      // Answer the first question incorrectly
      quizStore.updateProgress(wrongAnswerId)

      // Check that the result array has been updated
      expect(quizStore.result.length).toBe(1) // Ensures the result array has one entry

      const resultEntry = quizStore.result[0]
      expect(resultEntry).toBeDefined() // Ensures there is a result entry
      expect(resultEntry.userAnswer.id).toBe(wrongAnswerId) // Checks if the correct answer ID is stored
      expect(resultEntry.answerIsRight).toBe(false) // Verifies the answer status is incorrect
    } else {
      throw new Error('No wrong answer found for the first question')
    }
  })

  it('transitions to the next question upon answering', () => {
    const quizStore = useQuizStore()

    expect(quizStore.currentQuestionIndex).toBe(0)

    const firstQuestion = quizStore.quiz[0]
    // Select any answer ID from the first question
    const anyAnswerId = firstQuestion.answers[0].id
    quizStore.updateProgress(anyAnswerId)

    // Verify the store has moved to the next question
    expect(quizStore.currentQuestionIndex).toBe(1)
  })

  it('marks the quiz as finished when the last question is answered', () => {
    const quizStore = useQuizStore()

    // Answer each question
    for (let i = 0; i < quizStore.quiz.length; i++) {
      const question = quizStore.quiz[i]
      quizStore.updateProgress(question.rightAnswerId)
    }

    // After answering all questions,
    // the quiz should be marked as finished
    expect(quizStore.quizFinished).toBe(true)
    expect(quizStore.result.length).toBe(5)
  })
})
