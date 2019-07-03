<template>
  <div class="cover-letter">
    <l-section class="bg-t-teal pt-16 pb-4 text-sm">
      <p class="text-white mb-4">{{ $profile().coverLetter.date }}</p>
      <p class="text-gray-200">To:</p>
      <p class="text-white">{{ $profile().to.company }}</p>
      <p class="text-white">{{ $profile().to.address_first }}</p>
      <p class="text-white">{{ $profile().to.address_second }}</p>
    </l-section>
    <l-section no-padding>
      <div class="typo bg-white py-8 lg:py-16 px-4 md:px-8 shadow">
        <p>Dear {{ $profile().to.name }} and <br/> {{ $profile().to.company }}:</p>
        <p v-for="(item, index) in $profile().coverLetter.content"
           :key="index"
           v-html="item"></p>
        <p class="my-4">Respectfully yours,<br/>{{ $profile().name }}</p>
      </div>
    </l-section>
    <l-section no-padding class="more-actions py-4 pl-4 lg:pl-0 mt-2">
      <mu-button raised large class="bg-t-red" :to="{name: 'Resume'}">My Resume</mu-button>
      <mu-button raised large class="bg-transparent border-red-500 border-solid text-t-red" :href="'mailto:' + $profile().from.email">Contact me</mu-button>
    </l-section>
    <back-to />
  </div>
</template>

<script>
import BackTo from '@components/BackTo'
export default {
  name: 'CoverLetter',
  components: { BackTo }
}
</script>

<style lang="scss" scoped>
  .more-actions .mu-button {
    @apply inline-block text-white mr-4 mb-2;
  }
</style>
