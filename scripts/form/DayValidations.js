import dayjs from 'dayjs'

export const validDate = function (value) {
  return dayjs(value).isValid()
}

export const dateIsFuture = function (value) {
  const current = dayjs()
  const input = dayjs(value)
  return input.isAfter(current)
}

export const minAgeDate = function (value, years) {
  const target = dayjs().subtract(years, 'year')
  const input = dayjs(value)
  return input.isBefore(target)
}

export const maxAgeDate = function (value, years) {
  const target = dayjs().subtract(years, 'year')
  const input = dayjs(value)
  return input.isAfter(target)
}

export default {
  validDate,
  minAgeDate,
  maxAgeDate,
}
