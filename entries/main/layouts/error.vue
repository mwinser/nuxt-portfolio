<template lang="pug">
  TemplateErrorPage(:error="error")
</template>

<script>
export default {
  name: 'ErrorLayout',
  transition: 'page',
  // eslint-disable-next-line vue/require-prop-types
  props: ['error'],
}
</script>
