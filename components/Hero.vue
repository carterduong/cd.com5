<template>
  <div class="hero-container">
    <div class="rectangle"></div>
    <div class="rectangle">
      <div class="rectangle--outline rectangle--left"></div>
    </div>

    <div class="rectangle">
      <div class="rectangle--outline rectangle--right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style lang="scss" scoped>
.hero-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
}

.rectangle {
  padding: 2em;
  width: calc(33.333% - 2em);
}

.rectangle--outline {
  width: 100%;
  border: 4px solid white;
  box-sizing: border-box;
}

.rectangle--left,
.rectangle--right {
  height: 80%;
}

.rectangle--right {
  border-radius: 5em;
}

.text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: calc(100vw * 2 / 3 - 3em);
  position: sticky;
  top: 1em;
}
</style>
