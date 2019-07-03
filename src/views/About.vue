<template>
  <div class="about flex flex-col justify-center h-100v bg-white -mt-12 lg:-mt-20">
    <l-content-group white gutter class="py-4">
      <p>Thank you for visiting my resume. my name is {{ $profile().name }}. This website is designed and coded by me with the help of many open source framework and libraries. </p>
      <p>You could find the source code on <a :href="$profile().sourceCode" target="_blank">{{ $profile().sourceCode }}</a>.</p>
    </l-content-group>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss" scoped>

</style>
