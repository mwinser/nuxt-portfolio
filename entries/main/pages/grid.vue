<template lang="pug">
.home
  .grid(ref="grid")  
    .item.top.left(@click="gridAnimation('about', 'top', 'left')" :style="{'overflow': view==='home' ? 'visible' : 'hidden'}")
      h1 Mike Winser
      //- transition(name="vt-fade")
      //-   .centerpiece(v-if="view === 'home'" )
      //-     .image-container
      //-       img(src="~/assets/images/hurricane-logo.png")
    .item.top.right(@click="gridAnimation('info', 'top', 'right')")
      p You finally found me, the last web developer you'll ever need.
    .item.bottom.left(@click="gridAnimation('projects', 'bottom', 'left')")
      h2 Projects
      template(v-if="view === 'projects'")
        ul 
          li Nike Sonar 
          li Affinius Capital
          li Mountain Voo-Dew
    .item.bottom.right(@click="gridAnimation('contact', 'bottom', 'right')")
      h2 Contact
  
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      view: 'home',
    }
  },
  methods: {
    causeError() {
      throw new Error('ERROR')
    },
    gridAnimation(panelName, row, column) {
      const grid = this.$refs.grid
      if (this.view === 'home') {
        this.view = panelName
        grid.style.transitionTimingFunction = 'ease-in'
        const rowString = row === 'top' ? '5fr 0fr' : '0fr 5fr'
        const columnString = column === 'left' ? '2fr 0fr' : '0fr 2fr'
        grid.style.grid = rowString + ' / ' + columnString
      } else {
        this.view = 'home'
        grid.style.transitionTimingFunction = 'ease-out'
        grid.style.grid = '1fr 1fr / 1fr 1fr'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  color: white;
  .centerpiece {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30vh;
    height: 30vh;
    transform: translate(50%, 50%);

    .image-container {
      transform-origin: center;
      transition: all 2s ease-out;
      transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
      &:hover,
      &:focus-visible {
        transform: rotateZ(-360deg);
      }
      img {
        width: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
      }
    }
  }
  .grid {
    display: grid;
    grid: 1fr 1fr / 1fr 1fr;
    max-width: 100vw;
    height: 100vh;
    transition: all 1s ease-out 0.5s;
    // grid-template-areas:
    //   'one two'
    //   'one two'
    //   'three two'
    //   'three four'
    //   'three four';
  }

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    &.top.left {
      background-color: #2b3a44;
      position: relative;
      overflow: visible;
      &:hover,
      &:focus-visible {
        & > * {
          // transform: skew(-30deg);
        }
      }
    }
    &.top.right {
      background-color: rgb(33, 52, 76);
      &:hover,
      &:focus-visible {
        & > * {
          transform: scale(1.05);
        }
      }
    }
    &.bottom.left {
      background-color: #45362b;

      &:hover,
      &:focus-visible {
        & > * {
          // transform: rotateX(60deg);
        }
      }
    }
    &.bottom.right {
      background-color: #2b453c;
      &:hover,
      &:focus-visible {
        & > * {
          transform: rotateZ(360deg);
        }
      }
    }
    & > * {
      transition: all 0.5s ease;
    }
  }
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
