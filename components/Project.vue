<template>
  <section>
    <nuxt-content :document="project" />
    <hr />
  </section>
</template>

<script>
export default {
  name: 'Project',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '~assets/_variables.scss';

hr {
  margin: 1em 0 0 0;
  color: white;
}

.nuxt-content {
  display: flex;
  flex-direction: column;

  @media only screen and (min-device-width: $tablet-portrait) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1em;
  }
}

/*    Text    */
.info-container {
  @media only screen and (min-device-width: $tablet-portrait) {
    // flex-basis: calc(100vw - 6em / 3);
    // margin-right: 1em;
  }
}

.name {
  color: black;
  background-color: white;
  border: 2px solid white;
  border-radius: 2em;
  padding: 0.4em 1em 0.5em 1em;
  margin-bottom: 1em;
  display: inline-block;
  box-sizing: border-box;
  text-transform: uppercase;
  margin-bottom: 1em;
}

.clickable:hover {
  color: white;
  background-color: black;
  text-shadow: 0px 0px 4px white;
  box-shadow: 0px 0px 4px white;
  cursor: pointer;
}

.info {
  @media only screen and (min-device-width: $tablet-portrait) {
    position: sticky;
    top: 2em;
  }
}

/*    Images    */
.image-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
}

.image-100w {
  width: 100%;
  grid-column: 1 / span 2;

  @media only screen and (min-device-width: $tablet-portrait) {
    // grid-column: 2 / span 2;
  }
}

.image-50w {
  width: 100%;

  @media only screen and (min-device-width: $tablet-portrait) {
    grid-column: 1 / span 1;
  }
}

.image-1 {
  grid-column: 1 / span 1;

  @media only screen and (min-device-width: $tablet-portrait) {
    // grid-column: 2 / span 1;
  }
}

.image-2 {
  grid-column: 2 / span 1;

  @media only screen and (min-device-width: $tablet-portrait) {
    // grid-column: 3 / span 1;
  }
}

.shadow {
  box-shadow: 0px 0px 3px white;
}
</style>
