<template lang="pug">
  section#clients
    .client-grid-container.max-width
      p.eyebrow // Notable Clients
      .client-grid 
        .client
          .card
            h4 Nike
            p Smart Store 
        .client
          .card
            h4 Pepsi
            p Summer Better with Pepsi
        .client
          .card
            h4 AT&amp;T
            p Annihilator Cup 2022 and 2023
        .client
          .card 
            h4 Calbee 
            p Calbe North America website
        .client
          .card
            h4 USAA Real Estate
            p Affinius Capital Rebrand/Merger
            img(src="~/assets/images/nike-logo.webp")
        .client
          .card 
            h4 MiracleGro
            p Garden Escape Kit Sweepstakes
        .client
          .card 
            h4 14Four
            p Website redesign
        .client
          .card 
            h4 North Carolina Education Lottery
            p $10M Cash Launcher AR experience
        .client
          .card 
            h4 Capn Crunch
            p Capn Crunch Arcade Game
  </template>

<script>
export default {
  name: 'Clients',
}
</script>

<style lang="scss" scoped>
section#clients {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include media-breakpoint-down(sm) {
    height: auto;
  }
  sup {
    vertical-align: top;
  }
  .client-grid-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 4rem 6rem;
    gap: 5rem;
    @include media-breakpoint-down(sm) {
      height: auto;
      padding: 2rem;
    }

    p.eyebrow {
      align-self: flex-start;
      font-size: 1.5rem;
      font-weight: $font-thin;
      text-transform: uppercase;
      color: #7d7f88;
    }
  }

  .client-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    transition: 500ms ease-in-out;
    /* transition-delay: 500ms; */
    &:has(.client:nth-child(3n - 2):hover) {
      grid-template-columns: 2fr 0.5fr 0.5fr;
      transition-delay: 0;
    }
    &:has(.client:nth-child(3n - 1):hover) {
      grid-template-columns: 0.5fr 2fr 0.5fr;
      transition-delay: 0;
    }
    &:has(.client:nth-child(3n):hover) {
      grid-template-columns: 0.5fr 0.5fr 2fr;
      transition-delay: 0;
    }
    .client {
      .card {
        position: relative;
        overflow: hidden;
        height: 25vw;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        text-align: left;
        background-color: $blue-accent;
        background-position: center center;
        background-size: cover;
        border-radius: 1rem;
        padding: 2rem;
        grid-column: span 1;
        transition: 500ms ease-in-out;
        transition-delay: 0;

        h4 {
          color: $white-primary;
        }
        p {
          opacity: 0;
          font-size: 2rem;
          font-weight: 600;
          line-height: 1.5;
          color: $white-primary;
          transition: 250ms ease-in-out 0;
        }
        img {
          position: absolute;
          top: 0;
          height: 100%;
          object-fit: cover;
        }
      }
      &:hover .card {
        transition-delay: 500ms;
        transform: rotateY(180deg) scaleX(-1);
        p {
          opacity: 1;
          transition: 250ms ease-in-out 750ms;
        }
      }
    }
  }
}
</style>
