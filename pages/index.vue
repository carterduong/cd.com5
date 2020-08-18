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

      <section>
        <span class="name">elliottevan.com</span>
      </section>
      <section>
        <span class="name">First Bloom</span>
      </section>
      <section>
        <span class="name">Sunset Spot Remix</span>
      </section>
      <section></section>
      <section></section>

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
  }
}
</script>

<style lang="scss" scoped>
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

  color: black;
  background-color: white;
}
</style>
