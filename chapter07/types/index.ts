export default {}

declare global {
  type Question = {
    id: number
    body: string
    answers: Answer[]
    rightAnswerId: number
  }

  type Answer = {
    id: number
    body: string
  }

  type Result = Question & {
    userAnswer: Answer
    answerIsRight: boolean
  }
}
