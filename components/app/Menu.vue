<template lang="pug">
nav
  nuxt-link(to="/") Home
  nuxt-link(to="/sample") Sample
  nuxt-link(to="/register") Register
</template>

<script>
export default {
  name: 'AppMenu',
}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: right;
  & > * {
    margin: 0 0.5rem;
  }
}
</style>
