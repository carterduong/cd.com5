<template>
  <footer class="grid">
    <div>
      <p class="name">About</p>
      <div>
        Carter Duong is a designer and developer from the Bay Area
        <sup>
          <a href="https://goo.gl/maps/cKExn6muhyq" target="_blank">1</a>
          <span>+</span>
          <a href="https://goo.gl/maps/5SW5ohjML3i9iRJ16" target="_blank">2</a>
        </sup>
        and based near Los Angeles
        <sup>
          <a href="https://goo.gl/maps/eZz1efNkuHkCykZi9" target="_blank">3</a>
        </sup>
        . He graduated from UC San Diego
        <sup>
          <a href="https://goo.gl/maps/huatrW5chYxzW6xy8" target="_blank">4</a>
        </sup>
        with a B.A. in Interdisciplinary Computing and the Arts, and is open to
        full-time or freelance collaborations.
      </div>

      <p>
        <a href="mailto:info@carterduong.com" target="_blank">Email</a>
        <br />
        <a href="https://github.com/carterduong" target="_blank">GitHub</a>
        <br />
        <a href="http://are.na./carter-duong" target="_blank">Are.na</a>
      </p>

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
        This site was generated using Nuxt, uses the Nuxt Content module to
        manage content, and is hosted using Vercel (R.I.P. Zeit). Text is set in
        Unica.
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
