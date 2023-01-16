<template lang="pug">
header
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
  position: relative;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  text-align: right;
  background: transparent;
  color: white;
}
</style>
