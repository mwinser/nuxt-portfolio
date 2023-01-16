export default {
  created() {
    if (process.client) {
      this.setupBreakpointListeners()
    }
  },
  methods: {
    setupBreakpointListeners() {
      this.$store.dispatch('setIsMobile', this.$isMobile())
      this.$store.dispatch('setIsTablet', this.$isTablet())
      window.addEventListener('resize', () => {
        this.$store.dispatch('setIsMobile', this.$isMobile())
      })
      window.addEventListener('resize', () => {
        this.$store.dispatch('setIsTablet', this.$isTablet())
      })
    },
  },
}
