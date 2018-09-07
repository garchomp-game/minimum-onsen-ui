<template>
  <v-ons-page>
    <h1>Menu Page</h1>
    <v-ons-button @click="pop">home page</v-ons-button>
  </v-ons-page>
</template>

<script>
export default {
  name: 'menus',
  props: ['pageStack'],
  methods: {
    pop () {
      this.pageStack.pop()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
