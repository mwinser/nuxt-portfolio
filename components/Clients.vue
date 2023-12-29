<template lang="pug">
  section#clients
    .about-container.max-width
      .panel
        p.eyebrow // Notable Clients
        h5 Internet wizard
        p I'm a web developer with a passion for creating beautiful, responsive websites and applications. I'm currently available for hire.
        button Read More
      .panel.right 
        h5 Fast, efficient, quality, reliable.<br>Choose the car commercial buzzword<br>and that's me.
        p environmentally friendly?
        .clients 
          .client 
            h3 2<sup>+</sup>
            p Years of Experience
          .client 
            h3 30<sup>+</sup>
            p Projects
          .client 
            h3 1
            p Master's Degree
    .overflow-images.max-width 
      img(src="~/assets/images/placeholder.jpg")
      img(src="~/assets/images/placeholder.jpg")
      img(src="~/assets/images/placeholder.jpg")
  </template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Clients',
  mounted() {
    gsap.from('.client', {
      scrollTrigger: {
        trigger: '.client',
        start: 'top 80%',
        // markers: true,
      },
      opacity: 0,
      duration: 1.5,
      x: '100%',
      ease: 'elastic.out(0.7, 0.6)',
      stagger: 0.5,
    })
  },
}
</script>

<style lang="scss" scoped>
section#clients {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include media-breakpoint-down(sm) {
    height: auto;
  }
  sup {
    vertical-align: top;
  }
  .about-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4rem 6rem 16.5rem;
    gap: 5rem;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      height: auto;
      padding: 2rem;
    }
    .panel {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      width: 27%;
      min-width: 23rem;
      &.right {
        width: 100%;
      }
      p.eyebrow {
        font-size: 1.5rem;
        font-weight: $font-thin;
        text-transform: uppercase;

        color: #7d7f88;
      }
      h5 {
        line-height: 1.2;
      }
      p {
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 1.5;
        color: #b8b9c0;
      }
      button {
        justify-self: flex-end;
        color: $blue-accent;
        background: transparent;
        border: none;
        cursor: pointer;
        text-decoration: underline;
        margin-top: 4.5rem;
        padding-left: 0;
        &:hover {
          color: $white-primary;
        }
      }
      .clients {
        display: flex;
        gap: 2rem;
        .client {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          background-color: $blue-accent;
          border-radius: 1rem;
          padding: 2rem;
          h3 {
            font-size: 3rem;
            font-weight: 600;
            color: $white-primary;
            margin-bottom: 0.5rem;
          }
          p {
            font-size: 2rem;
            font-weight: 600;
            line-height: 1.5;
            color: $white-primary;
          }
        }
      }
      @include media-breakpoint-down(sm) {
        width: 80%;
        min-width: 22rem;
        text-align: center;
        margin-bottom: 2rem;
        align-items: center;
      }
    }
  }
  .overflow-images {
    position: absolute;
    bottom: -15%;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
}
</style>
