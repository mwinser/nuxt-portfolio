export const getModel = (fake = false) => {
  return {
    email: {
      value: fake ? 'test@test.com' : '',
      valid: null,
    },
  }
}

export default {
  getModel,
}
