import Vue from 'vue'
import directives from '@/directives'

directives.forEach((directive) => {
  Vue.directive(directive.name, directive.function)
})
