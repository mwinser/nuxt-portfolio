<template lang="pug">
.home
  Hero.fade-in
  About.fade-in
  ICanDoThat.fade-in
  Skills.fade-in
  ICanDoThat.fade-in
  //- Projects
  //- Contact

  
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  mounted() {
    gsap.from('.fade-in', {
      scrollTrigger: {
        trigger: '.fade-in',
        start: 'top bottom-=100',
        end: 'bottom top-=100',
        scrub: true,
        markers: true,
      },
      opacity: 0,
      duration: 1,
      y: 50,
      ease: 'power4.out',
    })
  },
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
