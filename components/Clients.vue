<template lang="pug">
  section#clients
    .client-grid-container.max-width
      p.eyebrow // Notable Clients
      .client-grid 
        .client(v-for="client in clients" :key="client.name")
          .card
            .copy
              h4 {{ client.name }}
              h6.tech {{ client.tech }}
              p {{ client.description }} 
            .back-image 
              img(:src="client.backImage" :alt="client.name + ' site screenshot'")
            .front-image(:style="{ backgroundColor: client.color ? client.color : 'black' }")
              img(:src="client.frontImage" :alt="client.name + ' logo'")
  </template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  name: 'Clients',
  data() {
    return {
      clients: [
        {
          name: 'Nike Project Sonar',
          tech: 'Nuxt/Vue, RFID, NFC, Firebase',
          description:
            'Contactless future store experience utilizing RFID to track inventory, and NFC to detect garments. Smart Mirrors in changing room detected garmets, displayed product information, and handled checkout (including inventory).',
          frontImage: require('~/assets/images/nike-logo.webp'),
          backImage: require('~/assets/images/nike-tag.gif'),
        },
        {
          name: 'Summer Better with Pepsi',
          tech: 'Nuxt/Vue, GSAP, Spotify API',
          description:
            'Smooth sidescrolling promotion showing delicious Pepsi products and meal ideas, with Spotify integration, sweepstakes entry and downloadable recipes.',
          frontImage: require('~/assets/images/pepsi-logo.webp'),
          backImage: require('~/assets/images/pepsi-logo.webp'),
        },
        {
          name: 'AT&T Annihilator Cup 2022 and 2023',
          tech: 'Nuxt/Vue, Prismic CMS, Vimeo API, Google Sheets API, time.js',
          description:
            'Month long Gaming Tournament site with timed content releases, CMS, sweepstakes entry and live leaderboards during matches. ',
          color: 'white',
          frontImage: require('~/assets/images/att-logo.jpeg'),
          backImage: require('~/assets/images/att-logo.jpeg'),
        },
        {
          name: 'Calbee North America',
          tech: 'Nuxt/Vue, Prismic CMS',
          description: 'Currently live site for Calbee North America with CMS.',
          color: 'white',
          frontImage: require('~/assets/images/calbee-logo.png'),
          backImage: require('~/assets/images/calbee-logo.png'),
        },
        {
          name: 'Affinius Capital (USAA)',
          tech: 'Wordpress, PHP, Advanced Custom Fields',
          description:
            'After a merger, USAA Real Estate became Affinius Capital. This is a fully custom Wordpress site with CMS and blog, featuring reusable components',
          color: '#2f2f2f',
          frontImage: require('~/assets/images/affinius-logo.png'),
          backImage: require('~/assets/images/affinius-logo.png'),
        },
        {
          name: 'MiracleGro Garden Escape Kit',
          tech: 'Nuxt/Vue',
          description:
            'Sweepstakes site featuring parallax effects and a custom slider.',
          color: 'white',
          frontImage: require('~/assets/images/miraclegro-logo.jpeg'),
          backImage: require('~/assets/images/miraclegro-logo.jpeg'),
        },
        {
          name: '14Four Website',
          tech: 'Nuxt/Vue, Prismic CMS, GSAP',
          description:
            'This currently live site for 14Four features a custom CMS, heaving animation and reusable components.',
          color: 'white',
          frontImage: require('~/assets/images/14four-logo.svg'),
          backImage: require('~/assets/images/14four-logo.svg'),
        },
        {
          name: 'Capn Crunch Arcade',
          tech: 'Nuxt/Vue, Pixi.js',
          description:
            'Sidescrolling arcade game featuring three levels, a boss battle, and a high score leaderboard.',
          color: 'white',
          frontImage: require('~/assets/images/capn-logo.jpeg'),
          backImage: require('~/assets/images/capn-logo.jpeg'),
        },
      ],
    }
  },
  mounted() {
    gsap.from('.client', {
      scrollTrigger: {
        trigger: '.client',
        start: 'top 80%',
        // markers: true,
      },
      opacity: 0,
      duration: 0.75,
      y: '100%',
      ease: 'elastic.out(0.7, 0.6)',
      stagger: 0.1,
    })
  },
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
        justify-content: space-between;
        text-align: left;
        background-color: $blue-accent;
        background-position: center center;
        background-size: cover;
        border-radius: 1rem;
        padding: 2rem;
        grid-column: span 1;
        transition: 500ms ease-in-out;
        transition-delay: 0;
        .copy {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          width: 50%;
        }
        h4 {
          color: $white-primary;
        }
        p {
          opacity: 0;
          font-weight: 500;
          line-height: 1.5;
          color: $white-primary;
          transition: 250ms ease-in-out 0;
        }
        .back-image {
          width: 50%;
          img {
            width: 100%;
            height: auto;
          }
        }
        .front-image {
          position: absolute;
          inset: 0;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0ms ease-in-out 250ms;
          background-color: black;
          pointer-events: none;
          img {
            width: 100%;
            height: auto;
          }
        }
      }
      &:hover .card {
        transition-delay: 500ms;
        transform: rotateY(180deg) scaleX(-1);
        p {
          opacity: 1;
          transition: 250ms ease-in-out 750ms;
        }
        .front-image {
          opacity: 0;
          transition: 0ms ease-in-out 750ms;
        }
      }
    }
  }
}
</style>
