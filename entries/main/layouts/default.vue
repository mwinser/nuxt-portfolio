<template lang="pug">
  TemplateDefaultLayout(site="main")
</template>

<script>
import LayoutMixin from '@/mixins/layout'

export default {
  name: 'MainLayout',
  mixins: [LayoutMixin],
}
</script>
