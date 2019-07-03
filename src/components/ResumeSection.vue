<template functional>
  <div class="resume-content-group">
    <div class="title">
      <span>{{ props.section.title }}</span>
      <span>{{ props.section.time }}</span>
    </div>
    <p v-for="(content, index) in props.section.content" :key="index" v-html="content"></p>
  </div>
</template>

<script>
export default {
  name: 'ResumeSection'
}
</script>

<style lang="scss" scoped>
  .resume-content-group {
    @apply mb-8;
    &:last-child {
      @apply mb-6;
    }
    .title {
      @apply mb-2;
      span {
        @apply block;
        &:first-child {
          @apply font-bold;
        }
        &:last-child {
          @apply text-sm text-gray-600;
        }
      }
    }
  }
  @media (min-width: 767px) {
    .resume-content-group {
      .title {
        @apply flex justify-between;
      }
    }
  }
</style>
