<template>
  <div>
    <v-ons-navigator :page-stack="pageStack">
      <component v-for="page in pageStack" :is="page" :key="page.key" :page-stack="pageStack"></component>
    </v-ons-navigator>
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
import Login from './components/Login'
import White from './components/White'
export default {
  name: 'app',
  data () {
    return {
      pageStack: []
    }
  },
  created: function () {
    const self = this
    this.axios
    .get('me')
    .then(function (res) {
      console.log(res)
      self.pageStack.push(Tabbar)
    })
    .catch(function (err) {
      console.log(err)
      self.pageStack.push(Login)
    })
    self.pageStack.push(White)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
