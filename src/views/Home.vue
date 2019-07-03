<template>
  <div class="home flex flex-col justify-center h-100v bg-white lg:-mt-12">
    <l-section>
      <l-title class="text-5xl">Welcome! <br/> I'm <span class="text-t-red">{{ $profile().name }}.</span> </l-title>
      <l-title small>{{ $profile().descption }}</l-title>
    </l-section>
    <l-section>
      <mu-divider class="w-12 h-1 bg-t-gray" />
    </l-section>
    <l-section>
      <div class="typo">
        <p>Dear {{ $profile().to.name }}<br/> and other hiring manager: </p>
        <p>
          I made this page to express my great interest in the <span class="text-teal-500">{{ $profile().jobTitle }}</span>.
        </p>
        <p>Please find out more about me through my cover letter and resume.</p>
      </div>
    </l-section>
    <l-section>
      <mu-button raised large
                 :to="{name: 'CoverLetter'}"
                 class="inline-block mr-4 mb-4 bg-t-red text-white">My Cover Letter</mu-button>
      <br class="md:hidden"/>
      <mu-button raised large
                 :to="{name: 'Resume'}"
                 class="inline-block mr-4 mb-4 bg-transparent border-red-500 border-solid text-t-red">My Resume</mu-button>
    </l-section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  @media (min-height: 736px) {
    .home {
      @apply -mt-4;
    }
  }
</style>
