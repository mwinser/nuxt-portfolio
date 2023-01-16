export const getModel = (fake = false) => {
  return {
    password: {
      value: fake ? 'Test12321' : '',
      valid: null,
    },
    confirmPassword: {
      value: fake ? 'Test12321' : '',
      valid: null,
    },
  }
}

export default {
  getModel,
}
