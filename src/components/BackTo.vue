<template>
  <l-section class="bg-blue-900 py-8">
    <l-title small white class="mb-2">{{ $profile().name }}'s resume</l-title>
    <router-link v-for="item in buttonShow" :key="item.name"
                 flat :to="{name: item.name}"
                 class="item inline-block mr-4 pr-4 text-sm text-gray-400 leading-none hover:text-white">
      {{ item.meta.name }}
    </router-link>
  </l-section>
</template>

<script>
import routers from '@/router/routers'
export default {
  name: 'BackTo',
  created () {
    console.log()
  },
  data () {
    return {
      buttons: routers[0].children
    }
  },
  computed: {
    buttonShow () {
      return this.buttons.filter((item) => {
        return item.name !== this.$route.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    border-right: 1px solid theme('colors.gray.300');
    &:last-child {
      border: none;
    }
  }
</style>
