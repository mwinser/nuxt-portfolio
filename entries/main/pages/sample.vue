<template lang="pug">
  .sample.page
    h1 Sample page
    button(@click="$router.go(-1)") Go Back
</template>

<script>
export default {
  name: 'SamplePage',
}
</script>

<style lang="scss" scoped>
// .sample {
// }
</style>
