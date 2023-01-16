export const backgroundImage = {
  bind: (el, binding, _) => {
    if (el && binding?.value) {
      el.style.backgroundImage = `url(${binding.value})`
    }
  },
  update: (el, binding, _) => {
    if (el && binding?.value) {
      el.style.backgroundImage = `url(${binding.value})`
    }
  },
}

export default backgroundImage
