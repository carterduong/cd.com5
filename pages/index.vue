<template>
  <main>
    <Hero />
    <main class="grid">
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
    gap: 1em;
  }
}

.grid section {
  margin: 1em 1em 0 1em;

  @media only screen and (min-device-width: $tablet-portrait) {
    margin: 2em 2em 0 2em;
    grid-column: 1 / span 3;
  }
}
</style>
