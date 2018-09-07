<template>
  <v-ons-page>
    <component
    v-for="content in contents"
    :is="content.page"
    :key="content.key"
    :page-stack="pageStack"
    ></component>
  </v-ons-page>
</template>

<script>
import MypageHome from '../MyPage/Home'
export default {
  props: ['pageStack'],
  data () {
    return {
      query: '',
      contents: [
        {
          key: 1,
          page: MypageHome
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
