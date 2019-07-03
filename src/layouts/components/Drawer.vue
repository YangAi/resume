<template>
  <mu-drawer :docked="false" :open.sync="drawerOpen">
    <l-section class="mt-8">
      <l-title class="capitalize">
        Welcome <br/>
        To My <br/>
        Resume.
      </l-title>
      <mu-divider class="my-4 w-12 h-2 bg-t-teal" />
    </l-section>
    <mu-list>
      <mu-list-item button :to="{name: 'Home'}" @click="close">
        <mu-list-item-title>Home</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="home" />
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item button :to="{name: 'CoverLetter'}" @click="close">
        <mu-list-item-title>Cover Letter</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="mail_outline" />
        </mu-list-item-action>
      </mu-list-item>
      <mu-list-item button :to="{name: 'Resume'}" @click="close">
        <mu-list-item-title>My Resume</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="account_box" />
        </mu-list-item-action>
      </mu-list-item>
    </mu-list>
    <mu-list class="absolute bottom-0">
      <mu-list-item button :to="{name: 'About'}" @click="close">
        <mu-list-item-title>Made By <span class="text-t-teal">{{ $profile().name }}</span></mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="changePasscode" button>
        <mu-list-item-title class="text-gray-500">Use a new passcode</mu-list-item-title>
        <mu-list-item-action>
          <mu-icon value="undo" class="text-gray-500" />
        </mu-list-item-action>
      </mu-list-item>
      <!--<mu-list-item  @click="close" button class="mb-8">-->
        <!--<mu-list-item-title class="text-gray-500">Close</mu-list-item-title>-->
        <!--<mu-list-item-action>-->
          <!--<mu-icon value="close" class="text-gray-500" />-->
        <!--</mu-list-item-action>-->
      <!--</mu-list-item>-->
    </mu-list>
  </mu-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    drawerOpen: {
      get () {
        return this.open
      },
      set () {
        this.$emit('handle')
      }
    }
  },
  methods: {
    close () {
      this.drawerOpen = false
    },
    changePasscode () {
      // localStorage.removeItem('passcode')
      this.$router.push({ name: 'Auth' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
