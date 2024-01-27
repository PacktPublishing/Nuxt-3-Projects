import recipes from '~/data/recipes'

// server/api/__sitemap__/urls.ts
export default defineSitemapEventHandler(() => {
  return recipes.map(recipe => ({
    loc: `/recipe/${recipe.slug}`,
    _sitemap: 'pages'
  }))
})
