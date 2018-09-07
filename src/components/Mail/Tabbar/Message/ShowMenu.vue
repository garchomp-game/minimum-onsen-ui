<template lang="html">
  <v-ons-page>
    <v-ons-list-title>People I know</v-ons-list-title>
    <v-ons-list>
      <v-ons-list-header>ListHeader</v-ons-list-header>
      <v-ons-list-item class="caution" @click="block">ブロック</v-ons-list-item>
      <v-ons-list-item class="caution" @click="report">通報</v-ons-list-item>
      <v-ons-list-item class="caution" @click="delete_message">会話削除</v-ons-list-item>
    </v-ons-list>
    <v-ons-dialog
    cancelable
    :visible.sync="dialogVisible"
    style="text-align:center;"
    >
    <p style="text-align: center">{{warningMessage}}</p>
    <v-ons-button @click="dialogVisible = false" style="display:block; width:60%; margin:15px  auto; background-color:red;">はい</v-ons-button>
    <v-ons-button @click="dialogVisible = false" style="display:block; width:60%; margin:15px  auto;">戻る</v-ons-button>
  </v-ons-dialog>
  <v-ons-button @click="pop" class="pop">戻る</v-ons-button>
</v-ons-page>
</template>

<script>
export default {
  props: ['pageStack'],
  data () {
    return {
      dialogVisible: false,
      warningMessage: '',
      warningType: ''
    }
  },
  methods: {
    block () {
      this.warningMessage = '本当にブロックしますか？'
      this.warningType = 'block'
      this.dialogVisible = true
    },
    report () {
      this.warningMessage = '本当にこの人を通報しますか？'
      this.warningType = 'report'
      this.dialogVisible = true
    },
    delete_message () {
      this.warningMessage = '本当にメッセージを削除しますか？'
      this.warningType = 'delete_message'
      this.dialogVisible = true
    },
    pop () {
      this.pageStack.pop()
    }
  }
}
</script>

<style lang="scss">
.caution {
  color:red;
}
.pop {
  margin:30px 0;
  width:100%;
  background-color:green;
}
</style>
