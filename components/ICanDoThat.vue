<template lang="pug">
  section.i-can
    .i-can-container.max-width
      h1 Yeah, I can do that.
  </template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'ICanDoThat',
  mounted() {
    gsap.to('h1', {
      scrollTrigger: {
        trigger: this.$el,
        start: '0 middle',
        end: 'bottom-=25%',
        scrub: true,
        // markers: true,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
      },
      scale: 11,
      // rotate: 90,
      x: 700,
      // y: 630,
      letterSpacing: '1em',
      ease: 'linear',
    })
  },
}
</script>

<style lang="scss" scoped>
section.i-can {
  width: 100%;
  min-height: 56.25vw;
  height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 8rem;
  overflow: hidden;
  @include media-breakpoint-down(sm) {
    height: auto;
  }
  .i-can-container {
    height: calc(56.25vw - 11.2vw);
    display: flex;
    justify-content: center;
    align-items: center;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      height: auto;
      padding: 2rem;
    }
  }
  h1 {
    overflow: visble;
    white-space: nowrap;
  }
}
</style>
