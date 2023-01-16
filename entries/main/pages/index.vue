<template lang="pug">
.home.page
    //- Title based on window size. If SSR, this will prevent cumulative layout shift.
    client-only
      h1 Whew! You made it.
      h4 You finally found me, the last web developer you'll ever need.
      h1(slot="placeholder") Loading...
    p Come with me if you want to live. I'm your only hope. Where we're going, we don't need roads. Snakes, why did it have to be snakes?!
    h1(v-html='chords[index]')
    .button-wrapper
      button(@click="changeChord") Start Power Chords
      button(@click="changeSpeed(10)") Speed Up
      h1 {{ speed }}bpm
      button(@click="changeSpeed(-10)") Slow Down
      
</template>

<script>
export default {
  name: 'Home',
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
.home {
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
