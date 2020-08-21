<template>
  <footer class="grid">
    <div>
      <p class="name">About</p>
      <p>
        Carter Duong is a designer and developer from the Bay Area and near Los
        Angeles. He graduated from UC San Diego with a B.A. in Interdisciplinary
        Computing and the Arts, and is open to full-time or freelance
        collaborations.
      </p>
    </div>
    <div>
      <p class="name">Colophon</p>
      <p>
        This site was generated using Nuxt. Content is managed by the
        <a href="">Nuxt Content</a> module. Hosting is provided by Vercel. Text
        is set in Unica.
      </p>
      <p class="♪">
        <a href="https://apronrecords.bandcamp.com/track/being" target="_blank">
          ♪
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer {
  margin: 2em;
  height: calc(100vh - 4em);
}

a {
  text-decoration: underline;
}
</style>
