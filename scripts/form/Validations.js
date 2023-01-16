/* eslint-disable prettier/prettier */
export const required = function (value) {
  return value.trim().length > 0
}

export const alpha = function (value) {
  const regex = /^[a-zA-Z]*$/
  return regex.test(value)
}

export const numeric = function (value) {
  const regex = /^[0-9]*$/
  return regex.test(value)
}

export const integer = function (value) {
  const regex = /(^[0-9]*$)|(^-[0-9]+$)/
  return regex.test(value)
}

export const minLength = function (value, min) {
  return value.length >= min
}

export const maxLength = function (value, max) {
  return value.length <= max
}

export const minMaxLength = function (value, min, max) {
  return value.length >= min && value.length <= max
}

export const exactLength = function (value, length) {
  return minMaxLength(value, length, length)
}

export const email = function (value) {
  const regex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/
  return regex.test(value)
}

export const phone = function (value) {
  const regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/
  return regex.test(value)
}

export const url = function (value) {
  const regex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)(?:\.(?:[a-z\u00A1-\uFFFF0-9]-*)*[a-z\u00A1-\uFFFF0-9]+)*(?:\.(?:[a-z\u00A1-\uFFFF]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i
  return regex.test(value)
}

// Password must contain 3 of the following: Lower case characters, Upper case characters, Numbers, Punctuation, "Special" characters
// export const strongPassword = (value) => {
//   const lowercaseRegex = /[a-z]/
//   const uppercaseRegex = /[A-Z]/
//   const numbersRegex = /\d/
//   const symbolsRegex = /[#$^+=*()@%&]/
//   const punctuationRegex = /[.,?!;:']/

//   const passwordClasses = [
//     lowercaseRegex,
//     uppercaseRegex,
//     numbersRegex,
//     symbolsRegex,
//     punctuationRegex,
//   ]

//   let count = 0

//   passwordClasses.forEach((regex) => {
//     count += value.match(regex) ? 1 : 0
//   })

//   return count >= 3
// }

export const strongPassword = function (value) {
  const regex = /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!.@#$%^&*()]*$/
  return regex.test(value)
}

export const sameAs = function (value, matcher) {
  return value === matcher
}

const states = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
]

export const isState = function (value) {
  if (!value || typeof value !== 'string') {
    return false
  }

  return states.includes(value.toUpperCase().trim())
}

export default {
  required,
  alpha,
  numeric,
  integer,
  minLength,
  email,
  phone,
  url,
  sameAs,
  strongPassword,
  isState,
}
