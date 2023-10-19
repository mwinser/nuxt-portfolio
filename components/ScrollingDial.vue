<template lang="pug">
      .panel.left(@mousewheel="(event)=> scrollItems(event)")
        p.eyebrow // {{title}}
        .scrolly-bit
          h5.item(
            v-for="(item, index) in list" 
            :key="item+index" 
            :style="{ rotate: (index * -degreeInterval ) + itemRotation + 'deg' }"
            ) {{ item }}
          .border
        .blur-overlay
  </template>

<script>
export default {
  name: 'ScrollingDial',
  props: {
    list: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      itemRotation: 0,
      itemRotationTimeout: null,
      degreeInterval: 360 / this.list.length,
    }
  },
  watch: {
    itemRotation(newVal, oldVal) {
      if (this.itemRotationTimeout) {
        clearTimeout(this.itemRotationTimeout)
      }
      if (this.itemRotation % this.degreeInterval !== 0) {
        this.itemRotationTimeout = setTimeout(() => {
          this.itemRotation =
            Math.round(this.itemRotation / this.degreeInterval) *
            this.degreeInterval
        }, 500)
      }
    },
  },
  methods: {
    scrollItems(event) {
      event.preventDefault()
      const direction = event.deltaY > 0 ? 1 : -1
      this.itemRotation += direction * 1.5
    },
  },
}
</script>

<style lang="scss" scoped>
.panel {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  width: 20%;
  height: 30rem;

  p.eyebrow {
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: #7d7f88;
  }
  .scrolly-bit {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    overflow-x: clip;
    width: 100%;
    padding-right: 1rem;
    margin-bottom: 2rem;
    pointer-events: none;
    mask-image: linear-gradient(
      to bottom,
      transparent,
      black 45%,
      black 55%,
      transparent
    );
    h5.item {
      line-height: 1.2;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20rem;
      transform-origin: center right;
      transition: all 0.5s ease-out;
    }
    .border {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 3rem;
      width: 100%;
      border: 2px solid white;
      border-radius: 1rem;
    }
  }
  .blur-overlay {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px);
    background: rgba(255, 255, 255, 0);
    mask-image: linear-gradient(
      to bottom,
      black 39.7%,
      transparent 42.7%,
      transparent 47%,
      black 63%
    );
  }
}
</style>
