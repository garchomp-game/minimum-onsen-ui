<template lang="html">
  <v-ons-page>
    <div class="toolbar">
      <div class="toolbar__left" @click="pop">
        <span class="toolbar-button">
          <i class="fa fa-angle-left" style="font-size:18px; font-weight:bold; margin-right:5px;"></i>戻る
        </span>
      </div>
      <div class="toolbar__center">
        名前
      </div>

      <div class="toolbar__right">
        <!-- ブロック機能、通報機能、会話削除 -->
        <span class="toolbar-button" @click="ShowMenuPage"><i class="ion-more" style="font-size:32px; vertical-align:-6px;"></i></span>
      </div>
    </div>
    <div class="container" id="scrollstart">
      <component
      v-for="comment in comments"
      :is="comment.page"
      :key="comment.key"
      :message="comment.message"
      :login_user_id="comment.login_user_id"
      :message_user_id="comment.message_user_id"
      :page-stack="pageStack"
      ></component>
    </div>
    <div class="white-back">
      <label class="message-asset">
          <input type="file"/>
      </label>
      <input placeholder="入力してください"
      v-model="name"
      class="message-input"
      >
    </input>
    <input
    type="submit"
    class="message-submit"
    value="投稿"
    >
  </input>
</div>
</v-ons-page>
</template>

<script>
import Exchande from './Exchande.vue'
import ShowMenu from './ShowMenu.vue'
export default {
  props: ['pageStack'],
  data () {
    return {
      name: '',
      comments: [
        {
          page: Exchande,
          message: 'こんにちは',
          login_user_id: 1,
          message_user_id: 1,
          key: 1
        },
        {
          page: Exchande,
          message: '長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文',
          login_user_id: 2,
          message_user_id: 1,
          key: 2
        },
        {
          page: Exchande,
          message: '長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文長文',
          login_user_id: 2,
          message_user_id: 1,
          key: 3
        }
        // {
        //   page: MessageIndex,
        //   user_id: 2,
        //   key: 2
        // },
        // {
        //   page: MessageIndex,
        //   user_id: 3,
        //   key: 3
        // }
      ]
    }
  },
  methods: {
    pop () {
      this.pageStack.pop()
    },
    ShowMenuPage () {
      this.pageStack.push(ShowMenu)
    }
  },
  mounted: function () {
    var obj = document.getElementById('scrollstart')
    obj.scrollTop = obj.scrollHeight
  }
}
</script>

<style lang="scss">
.container {
  width: 90%;
  margin: 0 auto;
  height: calc(100vh - 100px);
  overflow: scroll;
}
.toolbar {
  height: 50px;
}
.message-input, .message-submit, .message-asset {
  height: 50px;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  display: block;
  border: none;
}
input[type="file"] {
    display: none;
}
.message-asset {
  width: 50px;
  left: 0;
  background-image: url('../../../../assets/image.svg');
  background-size:100% 100%;
}
.message-input {
  left: 50px;
  width: calc(80% - 50px);
  color: #ccc;
}
.message-submit {
  right: 0;
  width: 20%;
  background-color: #ccc;
  color: white;
}
</style>
