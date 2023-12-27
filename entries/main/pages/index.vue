<template lang="pug">
.home(ref="home")
  Hero
  About.fade-in
  ICanDoThat.fade-in
  Skills.fade-in
  ICanDoThat.fade-in
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
