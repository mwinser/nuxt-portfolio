import { isMobile, isTablet } from '@/scripts/sizes'

export default ({ $device }, inject) => {
  inject('isMobile', () => {
    return process.client ? isMobile() : false
  })
  inject('isTablet', () => {
    return process.client ? isTablet() : false
  })
}
