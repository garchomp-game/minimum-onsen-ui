<template lang="html">
  <v-ons-page v-if="true">
    <component
    v-for="user in users"
    :is="user.page"
    :key="user.key"
    :user_id="user.user_id"
    :image="user.image"
    :page-stack="pageStack"
    ></component>
  </v-ons-page>
  <v-ons-page v-else>
    <p class="not-found text-center">まだやり取りがありません</p>
  </v-ons-page>
</template>

<script>
import MessageIndex from './Index'
export default {
  props: ['pageStack'],
  data () {
    return {
      activeIndex: 0,
      users: [
        {
          page: MessageIndex,
          user_id: 1,
          key: 1
        },
        {
          page: MessageIndex,
          user_id: 2,
          key: 2
        },
        {
          page: MessageIndex,
          user_id: 3,
          key: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.not-found {
  display: flex;
  align-items: center;
  margin:0 auto;
  height:100%;
  color:gray;
  justify-content: center;
}
</style>
