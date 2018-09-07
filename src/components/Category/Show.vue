<template lang="html">
  <v-ons-page>
    <h1>hello world</h1>
    <v-ons-button @click="pops">戻る</v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  props: ['pageStack'],
  methods: {
    pops () {
      this.pageStack.pop()
    }
  }
}
</script>

<style lang="css">
</style>
