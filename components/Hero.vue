<template>
  <div class="hero-container">
    <div class="rectangle rectangle-1"></div>
    <div class="rectangle">
      <div class="rectangle-outline rectangle-2"></div>
    </div>

    <div class="rectangle">
      <div class="rectangle-outline rectangle-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
@import '~assets/_variables.scss';

.hero-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
}

.rectangle {
  padding: 1em;
  width: calc(50% - 1em);

  @media only screen and (min-device-width: $tablet-portrait) {
    padding: 2em;
    width: calc(33.333% - 2em);
  }
}

.rectangle-outline {
  width: 100%;
  border: 4px solid white;
  box-sizing: border-box;
}

.rectangle-1 {
  display: none;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: block;
  }
}

.rectangle-2,
.rectangle-3 {
  height: 80%;
}

.rectangle-3 {
  border-radius: 5em;
}
</style>
