<template lang="pug">
  section.hero
    .hero-container.max-width
      .panel.left 
        h2 Mike
        h2 Winser
        .line-break 
        .social-icons
          .icon(v-for="i in 3" :key="i")
            a(href="/") 
              img(src="~/assets/images/linkedin.svg")
      .panel.right 
        p.eyebrow // Introduction
        h5.fromRight Web Developer
        h5.fromRight in the Pacific Northwest
        p.fromRight I'm a web developer with a passion for creating beautiful, responsive websites and applications. I'm currently available for hire.
        button.my-story My Story
  </template>

<script>
import { gsap } from 'gsap'
export default {
  name: 'Hero',
  mounted() {
    gsap.from('h2', {
      opacity: 0,
      duration: 1.5,
      x: '-100%',
      ease: 'power4.out',
      stagger: 0.25,
    })
    gsap.from('p.eyebrow', {
      delay: 0.5,
      opacity: 0,
      duration: 1.5,
      ease: 'power4.out',
    })
    gsap.from('.fromRight', {
      delay: 0.5,
      opacity: 0,
      duration: 1.5,
      x: '100%',
      ease: 'power4.out',
      stagger: 0.25,
    })
    gsap.to('button.my-story', {
      delay: 1.5,
      opacity: 1,
      duration: 1.5,
      ease: 'power4.out',
    })
  },
}
</script>

<style lang="scss" scoped>
section.hero {
  background: $light-gray;
  width: 100%;
  height: 56.25vw;
  max-height: 67.5rem;
  display: flex;
  align-items: center;
  padding-top: 4rem;
  @include media-breakpoint-down(sm) {
    height: auto;
  }
  .hero-container {
    height: calc(56.25vw - 11.2vw);
    display: flex;
    justify-content: center;
    align-items: center;
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
      &.left {
        width: 60%;

        h2 {
          //cool
        }
        .line-break {
          width: 5%;
          height: 0.75rem;
          background: $blue-accent;
          margin: 3rem 0;
        }
        .social-icons {
          display: flex;
          gap: 1rem;

          margin-top: 5rem;
          .icon {
            width: 30px;
            a {
              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
      &.right {
        width: 40%;
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
          line-height: 1.5;
          color: #b8b9c0;
        }
        button.my-story {
          opacity: 0;
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
      }
      @include media-breakpoint-down(sm) {
        &.left,
        &.right {
          width: 80%;
          min-width: 22rem;
          text-align: center;
          margin-bottom: 2rem;
          align-items: center;
        }
      }
    }
  }
}
</style>
