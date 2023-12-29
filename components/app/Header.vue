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
  // width: 41%;
  top: 0;
  right: 0;
  text-align: right;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.025) 100%
  );
  color: white;
  z-index: 10;
  padding: 1rem 4rem 1rem;
  backdrop-filter: blur(3px);
  border-bottom: 1px inset rgba(255, 255, 255, 0.025);
  border-left: 2px inset rgba(255, 255, 255, 0.025);
  border-bottom-left-radius: 1rem;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.02);
}
</style>
