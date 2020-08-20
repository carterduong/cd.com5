<template>
  <main>
    <Hero />
    <main class="grid">
      <header
        class="header-name"
        style="margin-top: 50vh; margin-bottom: 49vh;"
      >
        Carter Duong
      </header>

      <header
        class="web-dev-header"
        style="margin: calc(80vh + 1em) 2em 0 2em;"
      >
        <span>Frontend Web Development</span>
        <span>&</span>
      </header>

      <header
        class="web-dev-header"
        style="margin: calc(80vh + 1em) 2em 0 2em;"
      >
        <span>Design</span>
        <span>(other things, too)</span>
      </header>

      <template v-for="project in projects">
        <project :key="project.title" :project="project" />
      </template>
    </main>
    <Footer />
  </main>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid header {
  margin: 2em;
  // position: sticky;
  // top: 2em;
  mix-blend-mode: exclusion;
}

.grid section {
  grid-column: 1 / span 3;
  margin: 2em;
  margin-bottom: 0;
  // border: 1px dotted white;
}

.middle-rectangle {
  grid-row: 1;
  grid-column: 2 / span 1;
}

.right-rectangle {
  grid-row: 1;
  grid-column: 3 / span 1;
}

.web-dev-header {
  display: flex;
  justify-content: space-between;
}

.name {
  border: 2px solid white;
  border-radius: 2em;
  padding: 0.4em 1em 0.5em 1em;
  margin-bottom: 1em;
  display: inline-block;
  box-sizing: border-box;

  color: black;
  background-color: white;
}

.name:hover {
  color: white;
  background-color: black;
  cursor: pointer;
}
</style>
