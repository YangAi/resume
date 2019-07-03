<template>
  <div class="auth h-100v flex flex-col justify-center img-container bg-t-gray">
    <!--<l-title small white class="fixed bottom-0 right-0 p-4">Yang Ai's Resume</l-title>-->
    <l-section class="-mt-8 mb-2 md:mb-0">
      <l-title white>Hello! <br class="lg:hidden" />I'm {{ $profile().name || 'Yang Ai' }}.</l-title>
      <l-title small white class="lg:w-2/3">Please enter your passcode to get the specific resume I prepared for you.</l-title>
    </l-section>
    <l-section>
      <mu-text-field v-model="passcode" placeholder="Please enter your passcode." solo full-width class="bg-white p-4 mb-4 w-4/5" />
    </l-section>
    <l-section>
      <mu-button raised large @click="submit" class="bg-t-red text-white">submit</mu-button>
      <br/>
      <router-link :to="{name: 'Home'}" v-if="!_.isEmpty($profile())" class="inline-block mt-8 pb-1 border-b text-white">- Go to my resume directly</router-link>
    </l-section>
  </div>
</template>

<script>
export default {
  name: 'Auth',
  data () {
    return {
      passcode: ''
    }
  },
  methods: {
    async submit () {
      if (!this.passcode || this.passcode.lenth < 2) {
        return this.$toast.error('Please enter a valid passcode')
      }
      const result = await this.$store.dispatch('setProfile', this.passcode)
      if (result) {
        this.$toast.success('Welcome to my resume.')
        this.$router.push({ name: 'Home' })
      } else {
        this.$toast.error('Sorry, I can\'t find a  related resume.')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
