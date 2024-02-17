import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import QuestionComponent from '@/components/Question.vue'

const wrapper = mount(QuestionComponent, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: vi.fn
      })
    ]
  }
})

const quizStore = useQuizStore()

describe('Question Component', () => {
  it('renders current question and answers', () => {
    const question = quizStore.currentQuestion
    expect(wrapper.text()).toContain(question.body)
    expect(wrapper.findAll('button')).toHaveLength(4)

    // Dynamically assert each answer is rendered
    question.answers.forEach(answer => {
      expect(wrapper.html()).toContain(answer.body)
    })
  })

  it('calls answered method with correct answerId when an answer is clicked', async () => {
    // clicking on the first button
    await wrapper.findAll('button')[0].trigger('click')

    //  verify "updateProgress" was called correctly
    expect(quizStore.updateProgress).toHaveBeenCalledWith(1)
  })
})
