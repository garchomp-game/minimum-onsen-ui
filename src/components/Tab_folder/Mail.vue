<template>
  <v-ons-tabbar swipeable position="top"
  :tabs="tabs"
  :visible="true"
  :index.sync="activeIndex"
  >
  <template slot="pages">
    <component v-for="tab in tabs" :is="tab.page" :key="tab.key" :page-stack="pageStack"></component>
  </template>
</v-ons-tabbar>
</template>

<script>
import Established from '../Mail/Tabbar/Established/Home'
import Message from '../Mail/Tabbar/Message/Home'
import Favo from '../Mail/Tabbar/Favo/Home'
export default {
  props: ['pageStack'],
  data () {
    return {
      activeIndex: 0,
      tabs: [
        {
          label: '成立中',
          page: Established,
          key: 'Established'
        },
        {
          label: 'メッセージ',
          page: Message,
          key: 'newsPage'
        },
        {
          label: 'お気に入り',
          page: Favo,
          key: 'settingsPage'
        }
      ]
    }
  }
}
</script>
<!--
uer_id
name
hasOne user_id <= login_user_id Establishment
hasMany user_id <= login_user_id message

newはEstablishmentのcreated_atから算出
-->
<style scoped>
</style>
