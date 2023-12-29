<template lang="pug">
nav
  template(v-if="!$store.state.isTablet")
    nuxt-link.link(to="#about") About
    nuxt-link.link(to="#skills") Skills
    nuxt-link.link(to="#projects") Projects
    nuxt-link.link(to="#contact") Contact
  //- button Download CV
  .hamburger ☰
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
  align-items: center;
  gap: 2.5rem;
  height: 100%;
  width: 100%;
  .link {
    font-size: 2.25rem;
    font-weight: $font-bold;
    font-family: $headingFontFamily;
    text-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
    color: $gray-500;
    &.nuxt-link-active {
      color: $white-primary;
    }
  }
  .hamburger {
    display: none;
    font-size: 60px;
    margin-bottom: 10px;
    @include media-breakpoint-down(sm) {
      display: block;
    }
  }
}
</style>
