<template lang="pug">
  section.icandothat
    .icandothat-container.max-width
      h1 Yeah, I can do that.
  </template>

<script>
export default {
  name: 'Icandothat',
}
</script>

<style lang="scss" scoped>
section.icandothat {
  background: $light-gray;
  width: 100%;
  height: 56.25vw;
  max-height: 67.5rem;
  display: flex;
  align-items: center;
  padding-top: 8rem;
  border-radius: 2rem;
  @include media-breakpoint-down(sm) {
    height: auto;
  }
  .icandothat-container {
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
}
</style>
