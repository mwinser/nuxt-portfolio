<template lang="pug">
  .register.page
    h1 Register
    FormRegister
</template>

<script>
export default {
  name: 'Register',
  middleware: 'unauthorized',
}
</script>

<style lang="scss" scoped>
.login {
  position: relative;
}
</style>
