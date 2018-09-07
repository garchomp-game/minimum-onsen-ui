<template>
  <v-ons-page>
    <div class="toolbar">
      <div class="toolbar__center">ログインページ</div>
    </div>
    <div style="text-align: center; margin-top: 30px;">
      <p>
        <v-ons-input v-model="email" modifier="underbar" placeholder="Username" float></v-ons-input>
      </p>
      <p>
        <v-ons-input v-model="password" modifier="underbar" type="password" placeholder="Password" float></v-ons-input>
      </p>
      <p style="margin-top: 30px;">
        <v-ons-button @click="login">Sign in</v-ons-button>
      </p>
    </div>
  </v-ons-page>
</template>

<script>
import Tabbar from './Tabbar'
import axios from 'axios'

export default {
  props: ['pageStack'],
  data () {
    return {
      email: '',
      password: ''
    }
  },
  mounted: function () {

  },
  methods: {
    login () {
      var self = this
      let params = new URLSearchParams()
      params.append('email', self.email)
      params.append('password', self.password)
      axios.post(process.env.BASE_URL + 'login', params)
      .then(function (response) {
        localStorage.LgbtProjectToken = response.data.access_token
        self.pageStack.push(Tabbar)
      })
      if (this.$store.state.login.loginFlg === true) {
        this.pageStack.push(Tabbar)
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
