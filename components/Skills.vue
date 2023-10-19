<template lang="pug">
  section.skills#skills
    .skills-container.max-width
      ScrollingDial(title="Skills" :list="skillsList")
      ScrollingDial(title="Spaces" :list="spacesList")
  </template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skillsList: [
        'CMS',
        'Animation',
        'AWS Lambda',
        'Pixel Perfection',
        'Dog Petting',
        'API Integration',
        'AI Implementation',
        'Washing Dishes',
        'Intern Wranglin',
        'HTML/CSS/JS',
      ],
      spacesList: ['Web', 'AR', 'Games', 'localhost:3000', 'Outer', 'Invader'],
    }
  },
}
</script>

<style lang="scss" scoped>
section.skills {
  min-height: 56.25vw;
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 8rem;
  @include media-breakpoint-down(sm) {
    height: auto;
  }
  .skills-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    @include media-breakpoint-down(sm) {
      flex-direction: column;
      height: auto;
      padding: 2rem;
    }
  }
}
</style>
