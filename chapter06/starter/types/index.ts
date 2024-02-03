export {}

declare global {
  interface Recipe {
    id: string
    title: string
    slug: string
    description: string
    image: string
    cookingTime: number // Time in minutes
    prepTime: number // Time in minutes
    totalTime: number // Time in minutes
    difficulty: string
    ratings: number
    recipeYield: string
    recipeCategory: string
    recipeCuisine: string
    nutrition: { calories: string }
    recipeIngredient: string[]
    recipeInstructions: recipeInstruction[]
  }

  interface recipeInstruction {
    name: string
    text: string
  }
}
