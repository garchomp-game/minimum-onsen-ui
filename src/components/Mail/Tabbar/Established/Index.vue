<template lang="html">
  <div class="mail-index">
    <img
    :src="require('../../../../assets/' + image)"
    alt=""
    >
    <h1 class="name">{{name}}</h1>
    <p>{{age}}歳・{{prefectures}}</p>
    <p class="btn-message" @click="messageShow">
      メッセージをする
    </p>
  </div>
</template>

<script>
import MailShow from './Show.vue'
export default {
  props: ['user_id', 'pageStack'],
  // user_idからaxiosで取得して表示する。
  data () {
    return {
      name: 'testname',
      image: 'block.jpg',
      age: 10,
      prefectures: '北海道'
    }
  },
  methods: {
    messageShow () {
      this.pageStack.push(MailShow)
    }
  }
}
</script>

<style lang="scss">
.mail-index {
  width:calc(50% - 10px);
  margin:15px 5px 0;
  background-color:white;
  box-sizing: border-box;
  float:left;
  text-align:center;
  h1 {
    margin:0;
    padding:0;
  }
  img {
    width:90%;
    width:100%;
  }
  .btn-message {
    padding:15px 0;
    color:pink;
    width:80%;
    border-radius:25px;
    margin:30px auto;
    border:1px solid pink;
    font-size:10px;
  }
}
</style>
