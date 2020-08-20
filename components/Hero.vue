<template>
  <div class="hero-container">
    <div class="rectangle rectangle-1">
      Carter Duong
    </div>

    <div class="rectangle">
      <div class="rectangle-outline rectangle-2"></div>
      <div class="desktop-container">
        <span>Frontend Web Development</span>
        <span>&</span>
      </div>
    </div>

    <div class="rectangle">
      <div class="rectangle-outline rectangle-3"></div>
      <!-- Needed to change markup on mobile -->
      <div class="mobile-container">
        <div>Carter Duong</div>
        <div>Frontend Web Development & Design</div>
      </div>
      <div class="desktop-container">
        <span>Design</span>
        <span>(other things, too)</span>
      </div>
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
  flex-direction: column;

  @media only screen and (min-device-width: $tablet-portrait) {
    flex-direction: row;
  }
}

.rectangle {
  padding: 1em;
  height: calc(40% - 2em);
  width: calc(100% - 2em);

  @media only screen and (min-device-width: $tablet-portrait) {
    padding: 2em;
    height: calc(80% - 2em);
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
    height: calc(100% - 2em);
    display: flex;
    align-items: center;
  }
}

.rectangle-2,
.rectangle-3 {
  height: 100%;
}

.rectangle-3 {
  border-radius: 5em;
}

.mobile-container {
  display: block;
  margin-top: 2em;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: none;
  }
}

.desktop-container {
  display: none;
  margin-top: 1em;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: flex;
    justify-content: space-between;
  }
}
</style>
