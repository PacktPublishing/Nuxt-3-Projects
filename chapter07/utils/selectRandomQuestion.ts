// Utility function to select a given number of random questions.
export const selectRandomQuestions = (
  allQuestions: Question[],
  count: number
): Question[] => {
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
