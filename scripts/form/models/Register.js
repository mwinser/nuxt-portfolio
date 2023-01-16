export const getModel = (fake = false) => {
  return {
    facebookToken: {
      value: fake ? null : '',
      valid: null,
    },
    email: {
      value: fake ? 'test5@test.com' : '',
      valid: null,
    },
    confirmEmail: {
      value: fake ? 'test5@test.com' : '',
      valid: null,
    },
    password: {
      value: fake ? '14four12321' : '',
      valid: null,
    },
    confirmPassword: {
      value: fake ? '14four12321' : '',
      valid: null,
    },
    firstName: {
      value: fake ? 'First' : '',
      valid: null,
    },
    lastName: {
      value: fake ? 'Last' : '',
      valid: null,
    },
    address1: {
      value: fake ? '123 Address St' : '',
      valid: null,
    },
    address2: {
      value: '',
      valid: null,
    },
    city: {
      value: fake ? 'City' : '',
      valid: null,
    },
    state: {
      value: fake ? 'WA' : '',
      valid: null,
    },
    zip: {
      value: fake ? '12345' : '',
      valid: null,
    },
    phone: {
      value: fake ? '(123) 456-7895' : '',
      valid: null,
    },
    birthdate: {
      value: fake ? '01/23/1990' : '',
      valid: null,
    },
    terms: {
      value: fake,
      valid: null,
    },
    optIn: {
      value: !!fake,
      valid: null,
    },
  }
}

export default {
  getModel,
}
