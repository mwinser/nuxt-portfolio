<template lang="pug">
  section.about
    .about-container.max-width
      .panel
        p.eyebrow // About
        h5 Web Developer, based<br/>in the Pacific Northwest
        p I'm a web developer with a passion for creating beautiful, responsive websites and applications. I'm currently available for hire.
        button Read More
      .panel.right 
        h5 Fast, efficient, quality, reliable.<br>Choose the car commercial buzzword<br>and that’s me.
        p I'm a web developer with a passion for creating beautiful, responsive websites and applications. I'm currently available for hire.
        .stats 
          .stat 
            h3 2
            p Years of Experience
          .stat 
            h3 25
            p Projects
          .stat 
            h3 1
            p Advanced Degree
    .overflow-images.max-width 
      img(src="~/assets/images/placeholder.jpg")
      img(src="~/assets/images/placeholder.jpg")
      img(src="~/assets/images/placeholder.jpg")
  </template>

<script>
export default {
  name: 'About',
}
</script>

<style lang="scss" scoped>
section.about {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include media-breakpoint-down(sm) {
    height: auto;
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
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
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
      .stats {
        display: flex;
        gap: 2rem;
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
