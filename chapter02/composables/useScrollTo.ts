export const useScrollTo = (id: string) => {
  const element = document.getElementById(id)

  // check if element is not found: return
  if (!element) return

  const position = element.offsetTop

  window.scrollTo({
    top: position,
    behavior: 'smooth'
  })
}
