<template lang="html">
  <v-ons-page>
    <h1>show page</h1>
    <v-ons-button @click="back">戻る</v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  props: ['pageStack'],
  methods: {
    back () {
      this.pageStack.pop()
    }
  }
}
</script>

<style lang="scss">
</style>
