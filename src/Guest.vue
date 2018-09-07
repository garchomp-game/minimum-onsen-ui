<template>
  <v-ons-page>
    <div class="toolbar">
      <div class="toolbar__center">ログイン</div>
    </div>
    <ul class="list">
      <li class="list-item">
        <div class="list-item__center">
          <input type="text" v-model="email" class="text-input" placeholder="ユーザー名">
        </div>
      </li>
      <li class="list-item">
        <div class="list-item__center">
          <input type="password" v-model="password" class="text-input" placeholder="パスワード">
        </div>
      </li>
    </ul>
    <v-ons-button
    @click="login"
    style="margin:15px auto;display:block;text-align:center;">ログイン</v-ons-button>
  </v-ons-page>
</template>

<script>
const axios = require('axios')
export default {
  name: 'app',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log(this.email)
      console.log(this.password)
      axios
      .get(process.env.BASE_URL + '/api/', {
        params: {
          'email': this.email,
          'password': this.password
        }
      })
      .then(function (res) {
        console.log(res.data)
      })
      .catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
