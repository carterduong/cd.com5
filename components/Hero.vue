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
body {
  background-color: black;
  color: white;
  font-family: neue-haas-unica, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.25em;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

a {
  color: white;
  text-decoration: none;
}

header::selection {
  background: white;
  color: black;
  // text-shadow: 2px 2px grey;
}

.hero-container {
  // margin: 1em;
  // height: calc(100vh - 2em);
  // width: calc(100vw - 2em);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0;
}

.rectangle {
  // padding: 2em 1em 2em 1em;
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

// ====

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

.header-name {
}

.name {
  border: 2px solid white;
  border-radius: 2em;
  padding: 0.4em 1em 0.5em 1em;

  color: black;
  background-color: white;
}
</style>
