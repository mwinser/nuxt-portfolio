export const getModel = (fake = false) => {
  return {
    email: {
      value: fake ? 'test@test.com' : '',
      valid: null,
    },
    password: {
      value: fake ? 'Test12321' : '',
      valid: null,
    },
  }
}

export default {
  getModel,
}
