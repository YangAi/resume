<template>
  <main>
    <appbar :open="open" @drawerHandle="handle" />
    <router-view class="main-content" />
    <drawer :open="open" @handle="handle" />
  </main>
</template>

<script>
import Appbar from '@/layouts/components/Appbar'
import Drawer from '@/layouts/components/Drawer'
export default {
  name: 'Default',
  components: { Drawer, Appbar },
  data () {
    return {
      open: false
    }
  },
  methods: {
    handle () {
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
  .main-content{
    padding-top: 73px!important;
  }
</style>
