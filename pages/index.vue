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
        <a href="https://www.youtube.com/watch?v=ut1Jb0-DXbg" target="_blank"
          >&</a
        >
      </header>

      <header
        class="web-dev-header"
        style="margin: calc(80vh + 1em) 2em 0 2em;"
      >
        <span>Design</span>
        <span>(other things, too)</span>
      </header>

      <template v-for="project in projects">
        <section :key="project.title">
          <span class="name">{{ project.title }}</span>
          <div>{{ project.description }}</div>
          <nuxt-content :document="project" />
        </section>
      </template>

      <footer>
        info@carterduong.com
      </footer>
    </main>
  </main>
</template>

<script>
import Hero from '~/components/Hero.vue'

export default {
  name: 'Index',
  components: {
    Hero
  },
  async asyncData({ $content }) {
    const page = await $content('home').fetch()
    const projects = await $content('projects')
      .sortBy('sort', 'desc')
      .fetch()

    return {
      page,
      projects
    }
  }
}
</script>

<style lang="scss">
p,
.fifty {
  width: 50%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.grid header {
  margin: 2em;
  position: sticky;
  top: 2em;
  mix-blend-mode: exclusion;
}

.grid section {
  height: 100vh;
  grid-column: 1 / span 3;
}

.middle-rectangle {
  grid-row: 1;
  grid-column: 2 / span 1;
}

.right-rectangle {
  grid-row: 1;
  grid-column: 3 / span 1;
}

.grid section {
  margin: 1em;
  border: 1px dotted white;
}

.web-dev-header {
  display: flex;
  justify-content: space-between;
}

footer {
  margin: 2em;
}

.name {
  border: 2px solid white;
  border-radius: 2em;
  padding: 0.4em 1em 0.5em 1em;

  color: white;
  background-color: black;
}

.name:hover {
  color: black;
  background-color: white;
  cursor: pointer;
}
</style>
