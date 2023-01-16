<template lang="pug">
.register-form.form-template
  .error-list(
    v-if='hasFieldErrors || errorMessage'
  )
    p.error-message {{ errorMessage }}
  form(ref='form', @submit.prevent='submitForm', autocomplete='off')
    .form-wrapper
      .row
        FormInputWrapper(:error='errorList["firstName"]')
          input(
            type='text',
            name='firstName',
            placeholder='First Name',
            v-model='form.firstName.value',
            aria-label='First Name (Required)'
          )
        FormInputWrapper(:error='errorList["lastName"]')
          input(
            type='text',
            name='lastName',
            placeholder='Last Name',
            v-model='form.lastName.value',
            aria-label='Last Name (Required)'
          )
      .row
        FormInputWrapper(:error='errorList["email"]')
          input(
            type='text',
            name='email',
            placeholder='Email Address',
            v-model='form.email.value',
            aria-label='Email (Required)'
          )
        FormInputWrapper(:error='errorList["confirmEmail"]')
          input(
            type='text',
            name='confirmEmail',
            placeholder='Confirm Email Address',
            v-model='form.confirmEmail.value',
            aria-label='Confirm Email (Required)'
          )
      .row
        FormInputWrapper(:error='errorList["password"]')
          input(
            type='password',
            name='password',
            placeholder='Password',
            v-model='form.password.value',
            aria-label='Password (Required)'
          )
        FormInputWrapper(:error='errorList["confirmPassword"]')
          input(
            type='password',
            name='confirmPassword',
            placeholder='Confirm Password',
            v-model='form.confirmPassword.value',
            aria-label='Confirm Password (Required)'
          )
      .row
        FormInputWrapper(:error='errorList["address1"]')
          input(
            type='text',
            name='address1',
            placeholder='Mailing Address 1',
            v-model='form.address1.value',
            aria-label='Address One (Required)'
          )
        FormInputWrapper(:error='errorList["address2"]')
          input(
            type='text',
            name='address2',
            placeholder='Mailing Address 2',
            v-model='form.address2.value',
            aria-label='Address Two (Required)'
          )
      .row
        FormInputWrapper(:error='errorList["city"]')
          input(
            type='text',
            name='city',
            placeholder='City',
            v-model='form.city.value',
            aria-label='City (Required)'
          )
        FormInputWrapper(:error='errorList["state"]')
          input(
            type='text',
            v-mask='`AA`',
            name='state',
            placeholder='State',
            v-model='form.state.value',
            aria-label='State (Required)'
          )
        FormInputWrapper(:error='errorList["zip"]')
          input(
            type='tel',
            v-mask='\'#####\'',
            name='zip',
            placeholder='Zip Code',
            v-model='form.zip.value',
            aria-label='Zip Code (Required)'
          )
      .row
        FormInputWrapper(:error='errorList["phone"]')
          input(
            type='tel',
            v-mask='\'(###) ###-####\'',
            name='phone',
            placeholder='Phone Number',
            v-model='form.phone.value',
            aria-label='Phone (Required)'
          )
        FormInputWrapper(:error='errorList["birthdate"]')
          input(
            type='tel',
            v-mask='`##/##/####`',
            name='birthdate',
            placeholder='Date of Birth (MM/DD/YYYY)',
            v-model='form.birthdate.value',
            aria-label='Birthdate (Required)'
          )
      .row
        FormInputWrapper(:error='errorList["terms"]', :checkBox='true')
          input#termsCheckbox(
            type='checkbox',
            name='terms',
            v-model='form.terms.value'
            :aria-checked="form.terms.value || 'false'"
          )
          label#termsCheckboxLabel(
            for='termsCheckbox',
            :class='{ error: form.terms.valid === false }'
          ) I have read and agree to the&nbsp;
            nuxt-link(to='/rules') Official Rules
            span 
      .row
        FormInputWrapper(:error='errorList["optIn"]', :checkBox='true')
          input#optInCheckbox(
            type='checkbox',
            name='optIn',
            v-model='form.optIn.value'
            :aria-checked="form.optIn.value || 'false'"
          )
          label#optInCheckboxLabel(
            for='optInCheckbox',
            :class='{ error: form.optIn.valid === false }'
          ) Yes, I would like to receive the newsletter for the latest info on sweepstakes, products, events and more.
      .row
        button(type='submit') {{ loading ? "Loading" : "Register" }}
</template>

<script>
import { getModel } from '@/scripts/form/models/Register'
import {
  email,
  exactLength,
  isState,
  minLength,
  phone,
  required,
  sameAs,
  strongPassword,
} from '@/scripts/form/Validations'
import {
  maxAgeDate,
  minAgeDate,
  validDate,
} from '@/scripts/form/DayValidations'

import ReCaptchaMixin from '@/mixins/ReCaptcha'

export default {
  name: 'RegisterForm',
  mixins: [ReCaptchaMixin],
  props: {
    action: {
      default: 'register',
      type: String,
    },
  },
  data() {
    return {
      errorMessage: null,
      serverError: null,
      errorList: {},
      loading: false,
      success: false,
      form: getModel(),
      valid: null,
      useCaptcha: true,
    }
  },
  computed: {
    hasFieldErrors() {
      return Object.keys(this.errorList).length
    },
  },
  methods: {
    onEnter(e) {
      e.target.click()
    },
    async submitForm(e) {
      e.preventDefault()

      if (this.loading) {
        return
      }
      this.loading = true

      const formIsValid = await this.validateForm()
      const input = this.getFormData()

      if (formIsValid) {
        await this.register(input)
      }

      this.loading = false
    },

    async register(input) {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000)
      })
      alert('Register:\n' + JSON.stringify(input, null, '\t'))
    },

    getFormData() {
      // Format birthdate
      const birthdate = this.form.birthdate.value.split('/')
      const formattedBirthdate = `${birthdate[2]}-${birthdate[0]}-${birthdate[1]}`

      // Format phone
      const formattedPhone = this.form.phone.value.replace(/[^0-9]/g, '')

      const data = {
        address: this.form.address1.value,
        address2: this.form.address2.value,
        birthdate: formattedBirthdate,
        captchaResponse: this.useCaptcha ? this.captchaResponse : '',
        city: this.form.city.value,
        email: this.form.email.value.toLowerCase(),
        confirmEmail: this.form.confirmEmail.value.toLowerCase(),
        firstName: this.form.firstName.value,
        lastName: this.form.lastName.value,
        optIn: this.form.optIn.value || false,
        password: this.form.password.value,
        passwordConfirm: this.form.confirmPassword.value,
        phone: formattedPhone,
        state: this.form.state.value,
        terms: this.form.terms.value,
        zipcode: this.form.zip.value,
      }

      return data
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
        this.errorList.email = 'Email is invalid'
      } else {
        this.form.email.valid = true
      }

      // Confirm Email
      if (required(this.form.confirmEmail.value) === false) {
        this.form.confirmEmail.valid = false
        this.errorList.confirmEmail = 'Confirm Email is required'
        valid = false
      } else if (
        sameAs(
          this.form.confirmEmail.value.toLowerCase(),
          this.form.email.value.toLowerCase(),
        ) === false
      ) {
        this.form.confirmEmail.valid = false
        valid = false
        this.errorList.confirmEmail = 'Email addresses must match'
      } else {
        this.form.confirmEmail.valid = true
      }

      // First name
      if (required(this.form.firstName.value) === false) {
        this.form.firstName.valid = false
        valid = false
        this.errorList.firstName = 'First name is required'
      } else {
        this.form.firstName.valid = true
      }

      // Last name
      if (required(this.form.lastName.value) === false) {
        this.form.lastName.valid = false
        valid = false
        this.errorList.lastName = 'Last name is required'
      } else {
        this.form.lastName.valid = true
      }

      // Address 1
      if (required(this.form.address1.value) === false) {
        this.form.address1.valid = false
        valid = false
        this.errorList.address1 = 'Address One is required'
      } else {
        this.form.address1.valid = true
      }
      // // Address 2
      // if (required(this.form.address2.value) === false) {
      //   this.form.address2.valid = false
      //   valid = false
      //   this.errorList.address2 = 'Address Two is required'
      // } else {
      //   this.form.address2.valid = true
      // }

      // City
      if (required(this.form.city.value) === false) {
        this.form.city.valid = false
        valid = false
        this.errorList.city = 'City is required'
      } else {
        this.form.city.valid = true
      }

      // State
      if (required(this.form.state.value) === false) {
        this.form.state.valid = false
        valid = false
        this.errorList.state = 'State is required'
      } else if (exactLength(this.form.state.value, 2) === false) {
        this.form.state.valid = false
        valid = false
        this.errorList.state = 'State is invalid'
      } else if (!isState(this.form.state.value)) {
        this.form.state.valid = false
        valid = false
        this.errorList.state = 'State is invalid'
      } else {
        this.form.state.valid = true
      }

      // Zip
      if (required(this.form.zip.value) === false) {
        this.form.zip.valid = false
        valid = false
        this.errorList.zip = 'Zip Code is required'
      } else if (exactLength(this.form.zip.value, 5) === false) {
        this.form.state.valid = false
        valid = false
        this.errorList.zip = 'Zip Code invalid'
      } else {
        this.form.zip.valid = true
      }

      // // Phone
      if (required(this.form.phone.value) === false) {
        this.form.phone.valid = false
        valid = false
        this.errorList.phone = 'Phone Number is required'
      } else if (phone(this.form.phone.value) === false) {
        this.form.phone.valid = false
        valid = false
        this.errorList.phone = 'Phone Number is invalid'
      } else {
        this.form.phone.valid = true
      }

      // Password
      if (required(this.form.password.value) === false) {
        this.form.password.valid = false
        valid = false
        this.errorList.password = 'Password is required'
      } else if (minLength(this.form.password.value, 8) === false) {
        this.form.password.valid = false
        valid = false
        this.errorList.password = 'Password must be at least 8 characters'
      } else if (strongPassword(this.form.password.value) === false) {
        this.form.password.valid = false
        valid = false
        this.errorList.password =
          // 'Password must contain 3 of the following: Lower case characters, Upper case characters, Numbers, Punctuation, "Special" characters'
          'Weak password'
      } else {
        this.form.password.valid = true
      }

      // Confirm Password
      if (required(this.form.confirmPassword.value) === false) {
        this.form.confirmPassword.valid = false
        this.errorList.confirmPassword = 'Confirmation Password is required'
        valid = false
      } else if (
        sameAs(this.form.confirmPassword.value, this.form.password.value) ===
        false
      ) {
        this.form.confirmPassword.valid = false
        valid = false
        this.errorList.confirmPassword = 'Passwords must match'
      } else {
        this.form.confirmPassword.valid = true
      }

      // Birthdate
      if (required(this.form.birthdate.value) === false) {
        this.form.birthdate.valid = false
        valid = false
        this.errorList.birthdate = 'Birthdate is required'
      } else if (validDate(this.form.birthdate.value) === false) {
        this.form.birthdate.valid = false
        valid = false
        this.errorList.birthdate = 'Birthdate is invalid'
      } else if (exactLength(this.form.birthdate.value, 10) === false) {
        this.form.birthdate.valid = false
        valid = false
        this.errorList.birthdate = 'Birthdate is invalid'
      } else if (minAgeDate(this.form.birthdate.value, 18) === false) {
        this.form.birthdate.valid = false
        valid = false
        this.errorList.birthdate =
          'User is ineligible for this promotoion. Please see Official Rules.'
      } else if (maxAgeDate(this.form.birthdate.value, 116) === false) {
        this.form.birthdate.valid = false
        valid = false
        this.errorList.birthdate = 'Birthdate is invalid'
      } else {
        this.form.birthdate.valid = true
      }

      // Terms
      if (this.form.terms.value === false) {
        this.form.terms.valid = false
        valid = false
        this.errorList.terms = 'Must agree to the Official Rules'
      } else {
        this.form.terms.valid = true
      }

      // ReCaptcha
      if (this.useCaptcha === true && valid) {
        await this.recaptcha().catch((err) => {
          this.$log(err)
        })
        if (this.isCaptchaValid !== true) {
          valid = false
          this.errorMessage = this.error.recaptcha
        } else {
          this.$log('ReCaptcha token: ', this.captchaResponse)
        }
      }

      return valid
    },
  },
}
</script>

<style lang="scss" scoped>
.register-form {
  position: relative;
}

button {
  margin: 0 auto;
}
</style>
