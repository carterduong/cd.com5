<template>
  <video autoplay muted loop playsinline>
    <source :src="dynamicVideo" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</template>

<script>
export default {
  name: 'DynamicVideo',
  props: {
    filename: {
      type: String,
      required: true
    }
  },

  computed: {
    dynamicVideo() {
      return require(`~/assets/${this.filename}`)
    }
  }
}
</script>
