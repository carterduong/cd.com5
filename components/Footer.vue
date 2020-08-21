<template>
  <footer class="grid">
    <div>
      <p class="name">About</p>
      <div>
        Carter Duong is a designer and developer from the Bay Area and near Los
        Angeles. He graduated from UC San Diego with a B.A. in Interdisciplinary
        Computing and the Arts and is open to full-time or freelance
        collaborations.
      </div>
      <p class="♪">
        <a
          href="https://whoarei.bandcamp.com/track/love-will-shine"
          target="_blank"
        >
          ♪
        </a>
      </p>
    </div>
    <div>
      <p class="name">Colophon</p>
      <div>
        This site was generated using Nuxt. Content is managed by the
        <a href="">Nuxt Content</a> module. Hosting is provided by Vercel (𝕽𝕴𝕻
        Zeit). Text is set in Unica.
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

footer {
  margin: 1em;
  height: calc(100vh - 2em);

  @media only screen and (min-device-width: $tablet-portrait) {
    margin: 2em;
    height: calc(100vh - 4em);
  }
}

a {
  text-decoration: underline;
}
</style>
