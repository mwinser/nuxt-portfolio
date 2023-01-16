<template lang="pug">
  .error-page.py-8
    h1 Sorry
    p {{ copy }}
    Button(@click="navHome") Return to Homepage
</template>

<script>
export default {
  name: 'ErrorPage',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
  data: () => ({}),
  computed: {
    copy() {
      return this.error.statusCode === 404
        ? 'THE PAGE YOU ARE LOOKING FOR HAS NOT BEEN FOUND.'
        : `SORRY, AN UNEXPECTED ERROR HAS OCCURED.`
    },
  },
  mounted() {
    this.$log('ErrorPage: ', this.error?.message)
  },
  methods: {
    navHome() {
      if (this.$route.path === '/') {
        window.location.reload()
      } else {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
// .error-page {
// }
</style>
