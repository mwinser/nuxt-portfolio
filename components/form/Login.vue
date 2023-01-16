<template lang="pug">
.login-form.form-template
  .inner
    .content
      .error-list(v-if='hasFieldErrors || errorMessage')
        p.error-message(v-html='errorMessage')
      form(ref='form' @submit.prevent='submitForm' autocomplete='off')
        .form-wrapper
          .row
            FormInputWrapper(:error='errorList.email')
              input(
                type='text'
                name='email'
                placeholder='Email Address'
                v-model='form.email.value'
                autocomplete="username"
              )
          .row(v-if='!isSocialLogin')
            FormInputWrapper(:error='errorList.password')
              input(
                type='password'
                name='password'
                placeholder='Password'
                v-model='form.password.value'
                autocomplete="current-password"
              )
          .row
            button#login-submit(type='submit') {{ loading === true ? "Loading" : "Submit" }}
</template>

<script>
import { getModel } from '@/scripts/form/models/Login'
import { email, required } from '@/scripts/form/Validations'
import ReCaptchaMixin from '@/mixins/ReCaptcha'

export default {
  name: 'FormLogin',
  mixins: [ReCaptchaMixin],
  props: {
    action: {
      default: 'login',
      type: String,
    },
  },
  data() {
    return {
      errorMessage: null,
      errorList: {},
      loading: false,
      success: false,
      form: getModel(),
      isSocialLogin: false,
      useCaptcha: true,
    }
  },
  computed: {
    hasFieldErrors() {
      return Object.keys(this.errorList).length
    },
  },
  methods: {
    async submitForm(e) {
      if (this.loading) return
      this.loading = true

      const valid = await this.validateForm()
      const input = this.getFormData()
      if (valid) {
        await this.login(input)
      }
      this.loading = false
    },
    async login(input) {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
      alert('Login:\n' + JSON.stringify(input, null, '\t'))
      // Integration goes here
    },
    async validateForm() {
      let valid = true
      this.errorMessage = null
      this.errorList = {}

      // Email
      if (required(this.form.email.value) === false) {
        this.form.email.valid = false
        valid = false
        this.errorList.email = 'Email is required'
      } else if (email(this.form.email.value) === false) {
        this.form.email.valid = false
        valid = false
        this.errorList.email = 'Invalid email'
      } else {
        this.form.email.valid = true
      }

      // Password
      if (!this.isSocialLogin) {
        if (required(this.form.password.value) === false) {
          this.form.password.valid = false
          this.errorList.password = 'Password is required'
          valid = false
        } else {
          this.form.password.valid = true
        }
      }

      // ReCaptcha
      if (this.useCaptcha === true && valid) {
        await this.recaptcha().catch((err) => {
          this.$log(err)
        })
        if (this.isCaptchaValid !== true) {
          valid = false
          this.errorMessage = 'Unable to resolve reCaptcha'
        } else {
          this.$log('ReCaptcha token: ', this.captchaResponse)
        }
      }

      return valid
    },
    getFormData() {
      const data = {
        email: this.form.email.value.toLowerCase(),
        password: this.form.password.value,
        captchaResponse: this.useCaptcha ? this.captchaResponse : '',
      }

      return data
    },
  },
}
</script>

<style lang="scss" scoped>
.login-form {
  position: relative;
}

button {
  margin: 0 auto;
}
</style>
