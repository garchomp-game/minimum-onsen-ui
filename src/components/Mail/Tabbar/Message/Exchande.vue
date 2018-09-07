<template lang="html">
  <div class="">
    <div :class="Balloon1">
      <p>{{message}}</p>
      <span :class="ReverseBalloon1">
        {{created_at}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message', 'login_user_id', 'message_user_id'],
  data () {
    return {
      Balloon1: this.login_user_id === this.message_user_id ? 'balloon1-right' : 'balloon1-left',
      ReverseBalloon1: this.login_user_id === this.message_user_id ? 'float-left' : 'float-right',
      created_at: '00/00'
    }
  }
}
</script>

<style lang="scss">
.float-left {
  float:left;
  right:45px;
}
.float-right {
  float:right;
  left:45px;
}
.float-right, .float-left {
  font-size:12px;
  color:gray;
  position:relative;
  line-height:0;
  bottom:3px;
}
.balloon1-right {
  position: relative;
  display: inline-block;
  margin: 1.5em 25px 1.5em 0;
  padding: 7px 10px;
  max-width: 70%;
  color: #555;
  font-size: 16px;
  background: #FFD895;
  float:right;
}

.balloon1-right:before{
  content: "";
  position: absolute;
  top: 50%;
  left: 100%;
  margin-top: -10px;
  border: 10px solid transparent;
  border-left: 10px solid #FFD895;
}

.balloon1-right p {
  margin: 0;
  padding: 0;
}

.balloon1-left {
  position: relative;
  display: inline-block;
  margin: 1em 0 1em 15px;
  padding: 7px 10px;
  max-width: 70%;
  color: #555;
  font-size: 16px;
  background: #FFF8E7;
}

.balloon1-left:before{
  content: "";
  position: absolute;
  top: 50%;
  left: -20px;
  margin-top: -10px;
  border: 10px solid transparent;
  border-right: 10px solid #FFF8E7;
}

.balloon1-left p {
  margin: 0;
  padding: 0;
}
</style>
