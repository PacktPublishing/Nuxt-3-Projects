export {}
declare global {
  type Property = {
    id: string
    title: string
    description: string
    image: string

    category: string // Reference to the category title
    bedrooms: number
    bathrooms: number
    squareFeet: number
    price: number

    listedDate: string
  }

  type Category = {
    id: string
    name: string
    description: string
    image: string
  }
}
