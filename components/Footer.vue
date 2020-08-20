<template>
  <footer class="grid">
    <div>
      <p class="name">Colophon</p>
      <p>
        This site was generated using Nuxt. Content is managed by the
        <a href="">Nuxt Content</a> module. Hosting is provided by Vercel. Text
        is set in Unica.
      </p>
      <p class="♪">
        <a href="https://apronrecords.bandcamp.com/track/being" class="">
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
