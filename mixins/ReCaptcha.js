export default {
  props: {
    action: {
      default: '',
      type: String,
    },
  },
  data() {
    return {
      captchaResponse: null,
    }
  },
  computed: {
    isCaptchaValid() {
      return !!this.captchaResponse
    },
  },
  async mounted() {
    if (this.action === '') {
      throw new Error('Recaptcha Action must be defined')
    }
    if (this.$config.disableRecaptcha) {
      this.captchaResponse = 'NoCaptcha'
      return
    }
    await this.init()
  },
  beforeDestroy() {
    this.$recaptcha.destroy()
  },
  methods: {
    async init() {
      await this.$recaptcha.init().catch((e) => {
        this.$log(e)
      })
    },
    async recaptcha() {
      if (this.$config.disableRecaptcha) {
        this.captchaResponse = 'NoCaptcha'
        return
      }
      // await this.resetRecaptcha()
      const token = await this.$recaptcha.execute(this.action).catch((e) => {
        this.$log('ReCaptcha err: ', e)
        this.resetRecaptcha()
      })

      this.captchaResponse = token
    },
    async resetRecaptcha() {
      this.captchaResponse = null
      this.$recaptcha.destroy()
      await this.$recaptcha.init()
    },
  },
}
