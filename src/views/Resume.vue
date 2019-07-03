<template>
  <div class="resume">
    <l-section class="bg-t-teal text-white pt-16 pb-4">
      <div class="flex justify-between items-center md:block">
        <l-title class="text-white md:mb-2">{{ $profile().name }}</l-title>
        <p class="personal-info text-white text-xs md:text-sm text-right md:text-left">
          <span>{{ $profile().from.address_first }}</span>
          <span>{{ $profile().from.address_second }}</span>
          <span @click="contact">{{ $profile().from.email }}</span>
        </p>
      </div>
    </l-section>
    <!--summary-->
    <l-content-group white :title="resume.summary.title" class="pt-4">
      <p v-for="(content, index) in resume.summary.content" :key="index" v-html="content" class="summary"></p>
    </l-content-group>
    <!--end summary-->
    <!--experiences-->
    <l-content-group white :title="resume.experiences.title">
      <resume-section v-for="section in resume.experiences.groups" :key="section.title" :section="section" />
    </l-content-group>
    <!--end experience-->
    <!--skills-->
    <l-content-group white :title="resume.skills.title">
      <mu-row gutter class="mb-4">
        <mu-col span="12" md="6" class="mb-2" v-for="(item, index) in resume.skills.content" :key="index">
          <p class="mb-0 mt-2">{{ item.name }}</p>
          <mu-linear-progress mode="determinate" color="#38B2AC" :value="parseInt(item.score)"></mu-linear-progress>
        </mu-col>
      </mu-row>
    </l-content-group>
    <!--end skills-->
    <!--education-->
    <l-content-group white :title="resume.education.title">
      <resume-section v-for="section in resume.education.groups" :key="section.title" :section="section" />
    </l-content-group>
    <!--end education-->
    <back-to />
  </div>
</template>

<script>
import BackTo from '@components/BackTo'
import ResumeSection from '@components/ResumeSection'
export default {
  name: 'Resume',
  components: { ResumeSection, BackTo },
  computed: {
    resume () {
      return this.$profile().resume
    }
  },
  methods: {
    contact () {
      location.href = 'mailto:' + this.$profile().from.email
    }
  }
}
</script>

<style lang="scss" scoped>
  /*.summary:first-letter {*/
    /*font-size: 1.5em;*/
  /*}*/
  .personal-info span {
    @apply text-sm block;
  }
  @media (min-width: 767px) {
    .personal-info {
      span {
        @apply leading-none text-base inline-block px-2 border-r border-solid border-white;
        &:first-child {
          @apply pl-0;
        }
        &:last-child {
          @apply border-none;
        }
      }
    }
  }
</style>
