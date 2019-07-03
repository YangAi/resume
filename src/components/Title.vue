<template>
  <component :is="tag"
             :class="['section-title', small ? 'small-title' : 'big-title', {'text-white': white} ]">
    <slot>{{ title }}</slot>
  </component>
</template>

<script>
export default {
  name: 'Title',
  props: {
    tag: {
      type: String,
      default: 'h2'
    },
    title: {
      type: String
    },
    white: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
