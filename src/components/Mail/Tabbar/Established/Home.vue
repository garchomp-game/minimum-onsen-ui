<template lang="html">
  <v-ons-page>
    <component
    v-for="mailList in mailLists"
    :is="mailList.page"
    :key="mailList.key"
    :page-stack="pageStack"
    ></component>
  </v-ons-page>
</template>

<script>
import EstablishedIndex from './Index'
export default {
  props: ['pageStack'],
  data () {
    return {
      mailLists: [
        {
          key: 1,
          page: EstablishedIndex,
          user_id: 1
        },
        {
          key: 2,
          page: EstablishedIndex,
          user_id: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
