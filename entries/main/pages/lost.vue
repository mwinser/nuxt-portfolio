<template lang="pug">
.home.page
    client-only
    button(@click="addCastaway()") Add Castaway
    .castaway-data(v-for="(castaway, index) in castawayData")
      
      p {{ castaway.name}}
      p P{{index + 1}} Health: {{ ~~castaway.stats.health.current}}
      p P{{index + 1}} Energy: {{ ~~castaway.stats.energy.current}}
      ul P{{index + 1}} Status: 
        li(v-for="effect in castaway.statusEffects") {{ effect.type }} {{ effect.durationRemaining !== 'PERMANENT' ? effect.durationRemaining : null}}
      .control-wrapper
        .control(@click="castaway.applyStatusEffect('flu')") apply flu
        .control(@click="castaway.removeStatusEffect('flu')") remove flu
        .control(@click="castaway.changeStatByAmount('health', -20)") hurt
        .control(@click="castaway.applyStatusEffect('unconscious')") apply sleep
      
</template>

<script>
import { names } from '~/scripts/firstnames'
export default {
  name: 'Home',
  data() {
    return {
      GLOBAL_TICK_RATE_MILLISECONDS: 1000,
      castawayData: [],
      statusEffectValues: {
        flu: {
          duration: 5,
          stats: {
            health: {
              rate: -1,
            },
            energy: {
              rate: -2,
            },
          },
        },
        wet: {
          duration: 5,
          stats: {
            energy: {
              rate: -1,
            },
          },
        },
        unconscious: {
          duration: 250,
          stats: {
            health: {
              rate: 0.2,
            },
            energy: {
              rate: 0.4 + 0.2,
            },
          },
        },
      },
      randomEventValues: {
        rain: {
          message: "It's raining.",
          statusEffect: 'wet',
        },
        fluOutbreak: {
          message: 'Something is going around.',
          statusEffect: 'flu',
        },
        inWithTheTide: {
          message: 'Tide washes in something interesting',
          event: () => this.addCastaway(),
        },
      },
    }
  },
  mounted() {
    this.timeManager = new this.TimeManager()
    this.eventsManager = new this.EventsManager(this)
    this.startTickInterval()
    this.addCastaway()
    this.timeManager.addObserver(this.eventsManager)
  },
  methods: {
    startTickInterval() {
      setInterval(() => {
        this.timeManager.onTick()
      }, this.GLOBAL_TICK_RATE_MILLISECONDS)
    },

    TimeManager() {
      return {
        onTick() {
          this.observers.forEach((observer) => observer.onTick())
        },
        addObserver(toAdd) {
          this.observers.push(toAdd)
        },
        removeObserver(toRemove) {
          this.observers = this.observers.filter(
            (observer) => observer !== toRemove,
          )
        },
        observers: [],
      }
    },
    EventsManager(context) {
      return {
        minimumTimeBetweenEvents: 10,
        maximumTimeBetweenEvents: 60,
        timeUntilNextEvent: 5,
        onTick() {
          console.log('Time until next event: ' + this.timeUntilNextEvent)
          if (this.timeUntilNextEvent > 0) {
            this.timeUntilNextEvent--
          } else {
            this.randomEvent()
            this.timeUntilNextEvent = this.randomInterval(
              this.minimumTimeBetweenEvents,
              this.maximumTimeBetweenEvents,
            )
          }
        },
        randomInterval(min, max) {
          return min + ~~(Math.random() * (max - min))
        },
        randomEvent() {
          const randomEventArray = Object.values(context.randomEventValues)
          const randomEvent =
            randomEventArray[~~(Math.random() * randomEventArray.length)]
          console.log(randomEvent.message)
          if (randomEvent.statusEffect) {
            context.castawayData.forEach((castaway) =>
              castaway.applyStatusEffect(randomEvent.statusEffect),
            )
          }
          if (randomEvent.event) {
            randomEvent.event()
          }
        },
      }
    },
    Castaway(context) {
      return {
        onTick() {
          this.changeStats(['health', 'energy'])
          this.manageNeeds()
          this.manageStatusEffects()
        },
        manageNeeds() {
          // this.needs.forEach((need) => {
          //   need.durationRemaining > 0
          //     ? need.durationRemaining--
          //     : (this.needs = this.needs.filter(
          //         (currentEffect) => currentEffect.type !== need.type,
          //       ))
          // })
        },
        manageStatusEffects() {
          this.statusEffects.forEach((statusEffect) => {
            if (statusEffect.durationRemaining !== 'PERMANENT') {
              statusEffect.durationRemaining > 0
                ? statusEffect.durationRemaining--
                : (this.statusEffects = this.statusEffects.filter(
                    (currentEffect) => currentEffect.type !== statusEffect.type,
                  ))
            }
          })
        },
        changeStats(stats) {
          stats.forEach((stat) => {
            let totalRate = this.stats[stat].rate
            this.statusEffects.forEach((statusEffect) => {
              if (context.statusEffectValues[statusEffect.type]?.stats[stat]) {
                totalRate +=
                  context.statusEffectValues[statusEffect.type].stats[stat].rate
              }
            })
            this.changeStatByAmount(stat, totalRate)
          })
        },
        applyStatusEffect(type) {
          if (!this.hasStatusEffectOfType(type)) {
            this.statusEffects.push({
              type,
              durationRemaining:
                context.statusEffectValues[type]?.duration || 'PERMANENT',
            })
          }
        },
        hasStatusEffectOfType(type) {
          return (
            this.statusEffects.filter((effect) => effect.type === type)
              .length !== 0
          )
        },
        removeStatusEffect(type) {
          this.statusEffects = this.statusEffects.filter(
            (effect) => effect.type !== type,
          )
        },
        setStatAtMinimum(stat) {
          this.stats[stat].current = this.stats[stat].min
        },
        isStatAtMinimum(stat) {
          return this.stats[stat].current <= this.stats[stat].min
        },
        setStatAtMaximum(stat) {
          this.stats[stat].current = this.stats[stat].max
        },
        isStatAtMaximum(stat) {
          return this.stats[stat].current >= this.stats[stat].max
        },
        changeStatByAmount(stat, amount) {
          if (this.stats[stat].current + amount <= this.stats[stat].min) {
            this.setStatAtMinimum(stat)
          } else if (
            this.stats[stat].current + amount >=
            this.stats[stat].max
          ) {
            this.setStatAtMaximum(stat)
          } else {
            this.stats[stat].current += amount
          }
          this.checkStatLevels(stat)
        },
        checkStatLevels(stat) {
          let levelsArray = [...this.stats[stat].levels]
          const percentOfMax = this.stats[stat].current / this.stats[stat].max
          const index =
            percentOfMax === 1
              ? levelsArray.length
              : ~~(percentOfMax * levelsArray.length)
          const statusEffect = levelsArray[index]
          this.applyStatusEffect(statusEffect)
          levelsArray = levelsArray.filter((level) => level !== statusEffect)
          this.statusEffects = this.statusEffects.filter(
            (effect) => !levelsArray.includes(effect.type),
          )
        },
        name: names[~~(Math.random() * names.length)],
        // needs: {
        //   food: {
        //     current: Math.random() * 100,
        //     min: 0,
        //     max: 100,
        //     rate: -1,
        //   },
        //   water: {
        //     current: Math.random() * 100,
        //     min: 0,
        //     max: 100,
        //     rate: -1,
        //   },
        //   sleep: {
        //     current: Math.random() * 100,
        //     min: 0,
        //     max: 100,
        //     rate: -1,
        //   },
        // },
        stats: {
          health: {
            current: Math.random() * 100,
            min: 0,
            max: 100,
            rate: 0,
            levels: [
              'Nearing Death',
              'Dying',
              'Badly Injured',
              'Injured',
              'Healthy',
            ],
          },
          energy: {
            current: Math.random() * 100,
            min: 0,
            max: 100,
            rate: -0.2,
            levels: [
              'unconscious',
              'Exhausted',
              'Very Tired',
              'Tired',
              'Alert',
            ],
          },
        },

        statusEffects: [],
      }
    },
    addCastaway(number = 1) {
      for (let i = 0; i < number; i++) {
        const castaway = new this.Castaway(this)
        this.castawayData.push(castaway)
        this.timeManager.addObserver(castaway)
      }
    },
    causeError() {
      throw new Error('ERROR')
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  margin-top: 9rem;
}
.castaway-data {
  margin: 1rem 0;
  ul {
    list-style-type: none;
  }
  .control-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1rem;
    color: gray;

    .control {
      padding: 0.5rem;
      margin: 0 0.5rem;
      cursor: pointer;
      background: white;
      color: black;
    }

    @include media-breakpoint-up(md) {
      flex-direction: row;

      .control {
        padding: 0.5rem;
      }
    }
  }
}
</style>
