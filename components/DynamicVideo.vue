<template>
  <video :src="dynamicImage" />
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
