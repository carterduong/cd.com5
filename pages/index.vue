<template>
  <main>
    <Hero />
    <main class="grid">
      <div class="header-container">
        <template v-if="screenWidth < 834">
          Carter Duong
        </template>
        <template v-else>
          <header class="name-header">
            Carter Duong
          </header>
          <header class="web-dev-header">
            <span>Frontend Web Development</span>
            <span>&</span>
          </header>
          <header class="design-header">
            <span>Design</span>
            <span>(other things, too)</span>
          </header>
        </template>
      </div>

      <template v-for="project in projects">
        <project :key="project.title" :project="project" />
      </template>
    </main>
    <Footer />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Hero from '~/components/Hero.vue'
import Project from '~/components/Project.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'Index',
  components: {
    Hero,
    Project,
    Footer
  },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .sortBy('sort', 'desc')
      .fetch()

    return {
      projects
    }
  },
  computed: {
    ...mapState({
      screenWidth: (state) => state.screenWidth
    })
  },
  mounted() {
    this.$store.commit('setScreenWidth', window.innerWidth)
    window.addEventListener('resize', this.onResizeWindow)
  },
  methods: {
    onResizeWindow() {
      this.$store.commit('setScreenWidth', window.innerWidth)
    }
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

.grid {
  display: block;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

.grid header {
  // margin: 2em;
  mix-blend-mode: exclusion;
}

.grid section {
  margin: 1em 1em 0 1em;

  @media only screen and (min-device-width: $tablet-portrait) {
    margin: 2em 2em 0 2em;
    grid-column: 1 / span 3;
  }
}

.middle-rectangle {
  grid-row: 1;
  grid-column: 2 / span 1;
}

.right-rectangle {
  grid-row: 1;
  grid-column: 3 / span 1;
}

/*     Header     */
.header-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  @media only screen and (min-device-width: $tablet-portrait) {
  }
}

.name-header {
  // margin-top: 80vh;
  margin: 1em;

  @media only screen and (min-device-width: $tablet-portrait) {
    margin-top: 50vh;
    margin-bottom: 49vh;
  }
}

.web-dev-header,
.design-header {
  display: flex;
  justify-content: space-between;
  margin: 1em;

  @media only screen and (min-device-width: $tablet-portrait) {
    margin: calc(80vh + 1em) 2em 0 2em;
  }
}
</style>
