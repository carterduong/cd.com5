<template>
  <section>
    <span class="name">{{ project.title }}</span>
    <div>{{ project.description }}</div>
    <nuxt-content :document="project" />
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
