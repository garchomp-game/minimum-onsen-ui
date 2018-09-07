<template lang="html">
  <v-ons-page>
    <p>plan show example</p>
    <v-ons-button @click="backpage">
      戻る
    </v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  props: ['pageStack'],
  methods: {
    backpage () {
      this.pageStack.pop()
    }
  }
}
</script>

<style lang="scss">
</style>
<!--  -->
