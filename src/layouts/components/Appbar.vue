<template>
  <div class="appbar-wrap fixed top-0 right-0 left-0 z-10 bg-white border-b border-solid border-gray-300">
    <mu-appbar :title="$route.meta && !$route.meta.hidden ? ($route.meta.name || $profile().name + '\'s Resume') : ''"
               :z-depth="0"
               class="m-auto bg-white">
      <mu-button icon
                 @click="handle"
                 slot="right">
        <mu-icon value="menu" :class="{ 'open': open }"></mu-icon>
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
export default {
  name: 'Appbar',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handle () {
      this.$emit('drawerHandle')
    }
  }
}
</script>

<style lang="scss" scoped>
.open {
  transform: rotate(90deg)
}
</style>
