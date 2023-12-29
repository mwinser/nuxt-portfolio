<template lang="pug">
.home(ref="home")
  Hero
  About
  ICanDoThat
  Clients
  Skills
  //- Projects
  //- Contact

  
</template>

<script>
export default {
  name: 'Home',
  methods: {
    causeError() {
      throw new Error('ERROR')
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  //
}
</style>
