const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Chicken with Tomato Sauce',
    slug: 'chicken-with-Tomato-sauce', // SEO-friendly URL slug
    description:
      'Tender chicken breasts simmered in a rich and flavorful Tomato sauce, perfect for a cozy dinner.',
    image: '/images/chicken.png',
    cookingTime: 35, // Time in minutes for cooking chicken
    prepTime: 15, // Time in minutes for preparing ingredients and sauce
    totalTime: 50, // Total time in minutes
    difficulty: 'Easy',
    ratings: 4.5,
    recipeYield: '3 servings', // Adjust based on the actual yield of the recipe
    recipeCategory: 'Dinner',
    recipeCuisine: 'Italian',
    nutrition: {
      calories: '350 calories' // Example value, adjust as needed
    },
    recipeIngredient: [
      '3 boneless, skinless chicken breasts',
      '2 cups of homemade Tomato sauce or quality store-bought sauce',
      '1 tbsp olive oil',
      '1 clove garlic, minced',
      'Salt and pepper to taste',
      'Fresh basil for garnish'
      // Add other ingredients as necessary
    ],
    recipeInstructions: [
      {
        name: 'Preparation',
        text: 'Heat olive oil in a large skillet over medium heat.'
      },
      {
        name: 'Cook Chicken',
        text: 'Season chicken breasts with salt and pepper, and brown them in the skillet.'
      },
      {
        name: 'Simmer',
        text: 'Add minced garlic and Tomato sauce to the skillet, covering the chicken. Simmer on low heat for about 25-30 minutes until chicken is cooked through.'
      },
      {
        name: 'Garnish',
        text: 'Garnish with fresh basil before serving.'
      }
      // ... more steps if needed
    ]
  },
  {
    id: '2',
    title: 'Steak with Vegetables',
    slug: 'steak-with-vegetables',
    description:
      'Juicy steak served with a medley of fresh, seasoned vegetables.',
    image: '/images/steak.png',
    cookingTime: 40, // Total time in minutes
    prepTime: 15, // Preparation time in minutes
    totalTime: 55, // Sum of preparation and cooking time
    difficulty: 'Medium',
    ratings: 4.7,
    recipeYield: '2 servings', // Quantity produced by the recipe
    recipeCategory: 'Main Course',
    recipeCuisine: 'American',
    nutrition: {
      calories: '500 calories' // Example value, adjust as needed
    },
    recipeIngredient: [
      '2 steaks',
      '1 tbsp olive oil',
      'Salt and pepper to taste',
      'Mixed vegetables (carrots, broccoli, bell peppers)'
      // Add other ingredients as needed
    ],
    recipeInstructions: [
      {
        name: 'Grill Prep',
        text: 'Preheat the grill to medium-high heat.'
      },
      {
        name: 'Season Steak',
        text: 'Rub the steaks with olive oil, salt, and pepper.'
      },
      {
        name: 'Grill Steak',
        text: 'Grill the steaks to your preferred level of doneness.'
      },
      {
        name: 'Grill Vegetables',
        text: 'Toss the vegetables with olive oil, salt, and pepper, and grill until tender.'
      },
      {
        name: 'Rest and Serve',
        text: 'Let the steaks rest for a few minutes before serving with the grilled vegetables.'
      }
      // Add other steps as needed
    ]
  },
  {
    id: '3',
    title: 'Fettuccine',
    slug: 'fettuccine-alfredo', // SEO-friendly URL slug
    description:
      'Classic fettuccine pasta in a rich and creamy Alfredo sauce, a simple yet elegant dish.',
    image: '/images/fettuccine.png',
    cookingTime: 20, // Time in minutes for cooking the pasta and sauce
    prepTime: 10, // Time in minutes for preparation
    totalTime: 30, // Total time in minutes
    difficulty: 'Easy',
    ratings: 4.6,
    recipeYield: '4 servings', // Adjust based on the actual yield of the recipe
    recipeCategory: 'Main Course',
    recipeCuisine: 'Italian',
    nutrition: {
      calories: '420 calories' // Example value, adjust as needed
    },
    recipeIngredient: [
      '400g fettuccine pasta',
      '2 cups heavy cream',
      '1/2 cup unsalted butter',
      '1 cup grated Parmesan cheese',
      '1 clove garlic, minced',
      'Salt and freshly ground black pepper to taste',
      'Parsley for garnish'
      // Add other ingredients as necessary
    ],
    recipeInstructions: [
      {
        name: 'Cook Pasta',
        text: 'Cook fettuccine pasta in salted boiling water until al dente.'
      },
      {
        name: 'Make Sauce',
        text: 'In a separate pan, melt butter and add garlic, then pour in heavy cream.'
      },
      {
        name: 'Combine',
        text: 'Simmer the cream mixture, add Parmesan cheese, and stir until melted and combined.'
      },
      {
        name: 'Mix with Pasta',
        text: 'Drain the pasta and add it to the sauce, tossing to coat.'
      },
      {
        name: 'Garnish and Serve',
        text: 'Season with salt and pepper, and garnish with parsley before serving.'
      }

      // Add additional or more detailed steps as necessary
    ]
  }
]

export default recipes
