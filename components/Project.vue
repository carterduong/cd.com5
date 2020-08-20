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
hr {
  margin: 1em 0 0 0;
  color: white;
}

.nuxt-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;

  @media only screen and (min-device-width: 834px) {
    grid-template-columns: repeat(3, 1fr);
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

.name:hover {
  color: white;
  background-color: black;
  text-shadow: 0px 0px 4px white;
  box-shadow: 0px 0px 4px white;
  cursor: pointer;
}

.shadow {
  box-shadow: 0px 0px 3px white;
}

.image-100w {
  width: 100%;
  grid-column: 1 / span 2;

  @media only screen and (min-device-width: 834px) {
    grid-column: 2 / span 2;
  }
}

.image-50w {
  width: 100%;

  @media only screen and (min-device-width: 834px) {
    grid-column: 2 / span 1;
  }
}

.image-1 {
  grid-column: 1 / span 1;

  @media only screen and (min-device-width: 834px) {
    grid-column: 2 / span 1;
  }
}

.image-2 {
  grid-column: 2 / span 1;

  @media only screen and (min-device-width: 834px) {
    grid-column: 3 / span 1;
  }
}

.project-info {
  top: 2em;
  grid-column: 1 / span 2;

  @media only screen and (min-device-width: 834px) {
    position: sticky;
  }
}

.project-meta {
  font-size: 0.7em;
  text-transform: uppercase;
}
</style>
