<template lang="pug">
  .input-wrapper.col(:class="[fieldType, { 'error': !!error }]")
    .input-wrapper-inner
      slot
    .input-error.error(v-if="error") {{ error }}
</template>

<script>
export default {
  name: 'InputWrapper',
  props: {
    error: {
      type: String,
      default: '',
    },
    checkBox: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fieldType() {
      return this.checkBox ? 'checkbox-wrapper' : 'form-field'
    },
  },
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;

  &.error.form-field {
    .input-wrapper-inner {
      border: 2px solid $red-primary;
    }
  }

  &.form-field {
    .input-wrapper-inner {
      width: 100%;
      margin-bottom: 0.25rem;
      background: white;
      border: 2px solid $blue-primary;

      &:focus-within {
        border: 2px solid $green-primary;
      }
      input {
        width: 100%;
        padding: 0.5rem 1rem;
        border: none;

        &::placeholder {
          opacity: 0.75;
        }
        &:focus {
          outline: none;
        }
      }
    }
  }
  &.checkbox-wrapper {
    label {
      display: block;
      padding-left: 2rem;
      text-align: left;
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 0.25rem;
        left: 0.25rem;
        width: 1rem;
        height: 1rem;
        background-position: center;
        background-repeat: no-repeat;
        background-color: white;
        background-size: 75% auto;
        border: 1px solid black;
        transition: background-color 200ms ease-in-out;
        cursor: pointer;
      }
    }
    input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      &:checked + label {
        &::before {
          background-color: $red-primary;
        }
      }
    }
    &:focus-within {
      border: 1px solid $green-primary;
    }
  }
  .input-error {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    color: $red-primary;
    text-align: center;
  }
  &.error.checkbox-wrapper {
    label {
      .checkmark {
        border-color: $red-primary;
      }
    }
    .input-error {
      padding-left: 2rem;
      text-align: left;
    }
  }
}
</style>
