import Logger from 'js-logger'

export default (_, inject) => {
  Logger.useDefaults({
    defaultLevel:
      process.env.NODE_ENV === 'production' ? Logger.OFF : Logger.DEBUG,
  })
  inject('log', (...msg) => {
    Logger.info(...msg)
  })
}
