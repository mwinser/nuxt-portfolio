<template lang="pug">
header
  .header-content.max-width
    a.link(id="skipToMainContent" href="#mainContent") Skip to main content
    AppMenu
</template>

<script>
export default {
  name: 'AppHeader',
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 8rem;
  text-align: right;
  background: $light-gray;
  color: white;
  z-index: 10;
  padding: 2rem 1rem;
  @include media-breakpoint-up(md) {
    padding: 2rem 2rem;
  }
  @include media-breakpoint-up(lg) {
    padding: 2rem 4rem;
  }
  @include media-breakpoint-up(xl) {
    padding: 2rem 6rem;
  }
}
</style>
