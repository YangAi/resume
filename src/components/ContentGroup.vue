<template>
  <l-section v-bind="$attrs">
    <template v-if="title">
      <l-title small class="text-2xl mb-1">{{ title }}</l-title>
      <mu-divider class="w-8 h-1 mb-4 bg-t-red" />
    </template>
    <div class="typo pb-2">
      <slot />
    </div>
  </l-section>
</template>

<script>
export default {
  name: 'ContentGroup',
  props: {
    title: {
      type: [String, Number]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
