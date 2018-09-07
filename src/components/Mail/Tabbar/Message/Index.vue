<template lang="html">
  <div class="message-user" @click="MessageShowSend">
    <v-ons-row>
      <v-ons-col width="30%" class="left-content col-content">
        <img
        :src="require('../../../../assets/' + user.image)"
        alt=""
        class="pull-left"
        >
      </v-ons-col>
      <v-ons-col width="70%" class="right-content col-content">
        <div class="top-content">
          <p class="name">{{user.name}}</p>
          <p class="country">{{user.country.name}}</p>
        </div>
        <div style="clear:both;"></div>
        <div class="bottom-content">
          <p class="profile">{{user.height}}cm/{{user.weight}}kg/{{user.age}}歳</p>
          <p class="time">{{user.datetime}}</p>
        </div>
        <div style="clear:both;"></div>
      </v-ons-col>
    </v-ons-row>
    <div style="clear:both;"></div>
  </div>
</template>

<script>
import MessageShow from './Show'
export default {
  props: ['user_id', 'pageStack'],
  data () {
    return {
      user: {
        name: 'testname',
        country: {
          name: 'japan',
          image: 'block.jpg'
        },
        height: 170,
        weight: 60,
        age: 20,
        image: 'block.jpg',
        datetime: '6時間前'
      }
    }
  },
  methods: {
    MessageShowSend () {
      this.pageStack.push(MessageShow)
    }
  }
}
</script>

<style lang="scss">
.message-user {
  border-bottom:1px solid gray;
  .left-content {
    padding:10px;
    img {
      width:100%;
    }
  }
  .right-content {
    .top-content {
      .name {
        float:left;
      }
      .country {
        float:right;
      }
    }
    .bottom-content {
      .profile {
        float:left;
      }
      .time {
        float:right;
      }
    }
  }
  .col-content {
  }
}
</style>
