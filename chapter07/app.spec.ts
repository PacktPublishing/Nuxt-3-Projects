import { describe, expect, test } from 'vitest'
import questions from '~/data/questions'
import { setup, createPage } from '@nuxt/test-utils/e2e'

describe('E2E Testing for the Quiz Feature in App.vue', async () => {
  await setup()

  test('Verifies the quiz initial state: one question headline and four answer buttons', async () => {
    // Update the path according to your app's routing if necessary.
    const page = await createPage('/')

    // Count the h1 elements and verify there's exactly one
    const h1Count = await page.locator('h1').count()
    expect(h1Count).toBe(1)

    // Count the button elements for answers and verify there are four
    const buttonCount = await page.locator('button').count()
    expect(buttonCount).toBe(4)
  })

  test('Selects all correct answers to show the result page', async () => {
    // get the homepage
    const page = await createPage('/')

    // Loop over the 5 questions in the UI
    for (let i = 0; i < 5; i++) {
      // extract the question
      const questionText = await page.locator('h1').textContent()

      // search for the question from the data
      const question = questions.find(q => q.body === questionText)

      // get the correct answer
      const answerText = question?.answers.find(
        a => a.id === question.rightAnswerId
      )

      // click on the correct answer
      await page.locator('button', { hasText: answerText?.body }).click()
    }

    // after finishing the 5 question, an h1 that contains "Finished" should be displayed
    const FinishedText = await page.locator('h1').textContent()
    expect(FinishedText).toBe('Finished')

    // and the score content should contain "5 / 5" as we've answered all questions correctly
    const score = await page.locator('h2').textContent()
    expect(score).toContain('5 / 5')
  })
})
