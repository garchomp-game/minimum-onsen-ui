<template>
  <v-ons-page>
    <ons-toolbar>
      <div class="left">
        <div></div>
      </div>
      <div class="center">{{pageTitle}}</div>
      <div class="right">
        <v-ons-toolbar-button icon="fa-bell-o"></v-ons-toolbar-button>
      </div>
    </ons-toolbar>
    <v-ons-tabbar position="buttom" :tabs="tabs" :index.sync="activeIndex" @prechange="alert">
      <template slot="pages">
        <component v-for="tab in tabs" :is="tab.page" :key="tab.key" :page-stack="pageStack"></component>
      </template>
    </v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import HomePage from './Home/HomePage'
import Trabel from './Tab_folder/Trabel'
import Heart from './Tab_folder/Heart'
import Mail from './Tab_folder/Mail'
import MyPage from './Tab_folder/MyPage'

export default {
  props: ['pageStack'],
  data () {
    return {
      pageTitle: '',
      activeIndex: 0,
      tabs: [
        {
          key: 1,
          label: 'ホーム',
          page: HomePage,
          icon: 'fa-home'
        },
        {
          key: 2,
          label: 'おでかけ',
          page: Trabel,
          icon: 'fa-shopping-bag'
        },
        {
          key: 3,
          label: 'いいかも',
          page: Heart,
          icon: 'fa-heart'
        },
        {
          key: 4,
          label: 'やりとり',
          page: Mail,
          icon: 'md-email'
        },
        {
          key: 5,
          label: 'マイページ',
          page: MyPage,
          icon: 'fa-smile-o'
        }
      ]
    }
  },
  created () {
    this.pageTitle = this.tabs[0].label
  },
  methods: {
    alert (event) {
      this.pageTitle = this.tabs[event.index].label
    }
  }
}
</script>
<!--
import HomePage from './components/HomePage'
import Trabel from './components/Tab_folder/Trabel'
import Heart from './components/Tab_folder/Heart'
import Mail from './components/Tab_folder/Mail'
import MyPage from './components/Tab_folder/MyPage'
icon: 'fa-home'
icon: 'fa-heart'
icon: 'fa-door-open'

-->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
