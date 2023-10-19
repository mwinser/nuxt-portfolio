<template lang="pug">
  .chords.page
      h1(v-html='chords[index]')
      .button-wrapper
        button(@click="changeChord") Start Power Chords
        button(@click="changeSpeed(10)") Speed Up
        h1 {{ speed }}bpm
        button(@click="changeSpeed(-10)") Slow Down
        
  </template>

<script>
export default {
  name: 'Chords',
  data() {
    return {
      chords: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      index: 0,
      interval: null,
      speed: 60,
    }
  },
  methods: {
    causeError() {
      throw new Error('ERROR')
    },
    changeSpeed(amount) {
      clearInterval(this.interval)
      this.speed += amount
      this.changeChord()
    },
    changeChord() {
      clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.index = ~~(Math.random() * 7)
      }, (60 / this.speed) * 1000)
    },
  },
}
</script>

<style lang="scss" scoped>
.chords {
  margin-top: 9rem;
}
.button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  color: gray;

  button,
  .btn {
    margin: 0.5rem 0;
  }

  @include media-breakpoint-up(md) {
    flex-direction: row;

    button,
    .btn {
      margin: 0 0.5rem;
    }
  }
}
</style>
