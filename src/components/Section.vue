<template>
  <div :class="formatClass">
    <div class="section-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MzSection',
  props: {
    gutter: {
      type: Boolean,
      default: false
    },
    white: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    formatClass () {
      let output = ['section']
      if (this.gutter) {
        output.push('mb-2')
      }
      if (this.white) {
        output.push('bg-white')
      }
      if (this.border) {
        output.push('border-b border-gray-300 border-solid')
      }
      if (this.noPadding) {
        output.push('no-padding')
      }
      return output
    }
  }
}
</script>

<style lang="scss">
  .section{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .section>.section-wrapper{
    width: 100%;
    padding: 8px 16px;
    overflow: hidden;
    position: relative;
    max-width: 1196px;
    margin: auto;
  }
  @media (min-width: 768px) {
    .section>.section-wrapper {
      padding: 16px;
    }
  }
  .section.no-padding>.section-wrapper{
    padding: 0;
  }
  .section article img {
    max-width: calc(100% + 32px);
    margin-left: -16px
  }
</style>
