export {}

declare global {
  interface Post {
    id: string
    author_id: string
    title: string
    content?: string
    created_at: string
  }
}
