<template lang="html">
  <v-ons-page>
    <div style="widrth:100%;overflow: scroll;">
      <div class="user-profile-image4">
        <div class="image-box">
          <img :src="require('../../assets/' + user.image)" alt="">
        </div>
        <div class="small-box">
          <div class="image-box">
            <img :src="require('../../assets/' + user.image)" alt="">
          </div>
          <div class="image-box">
            <img :src="require('../../assets/' + user.image)" alt="">
          </div>
          <div class="image-box">
            <img :src="require('../../assets/' + user.image)" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="user-profile">
          <div class="laurel">
            <img :src="require('../../assets/laurel.svg')" alt="">
            <p class="level">Lv.<span>24</span></p>
          </div>
          <div class="icon-group">
            <p class="heart"><v-ons-icon icon="fa-heart"></v-ons-icon> 100</p>
            <p class="plane"><v-ons-icon icon="fa-plane"></v-ons-icon> 100</p>
          </div>
          <p class="user-name">{{user.name}}</p>
          <div class="country">
            <img :src="require('../../assets/' + user.country.image)" alt="">
            <span>{{user.country.name}}</span>
          </div>
          <p class="profile_p">{{user.height}}cm/{{user.weight}}kg/{{user.age}}歳</p>
          <p class="profile_p">最終アクセス {{user.datetime}}</p>
        </div>
      </div>
    </div>
    <div class="profile">
      <h3>自己紹介</h3>
      <p v-for="str of user.profile.split('\n')">{{str}}</p>
    </div>
    <component
    :is="joins.page"
    :page-stack="pageStack"></component>
  </v-ons-page>
</template>

<script>
import JoinCategory from '../Category/components/JoinCategory'
export default {
  props: ['pageStack'],
  data () {
    return {
      joins: {
        page: JoinCategory
      },
      user: {
        name: 'name',
        country: {
          name: 'japan',
          image: 'block.jpg'
        },
        height: 170,
        weight: 60,
        age: 20,
        image: 'block.jpg',
        datetime: '6時間前',
        profile: '初めまして！旅行好きな学生です！\n休みの日は色んな所にたびに行きます！\n気の合う人は仲良くしてください。\nよろしくお願いします！'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

@for $i from 1 through 30 {
  .user-profile-image#{$i} {
    width: calc((80px + 20px) * #{$i} + 30px);
    height:100px;
    .image-box {
      position: relative;
      float: left;
      height: 100px;
      width: 100px;
      margin: 10px;
      img {
        height: 100px;
        width: 100px;
        position: absolute;
        bottom: 0;
        float: left;
        overflow: hidden;
      }
    }
    .small-box {
      .image-box{
        position: relative;
        height: 100px;
        width: 80px;
        float: left;
        img{
          position: absolute;
          bottom: 0;
          height: 80px;
          width: 80px;
        }
      }
    }
  }
}

.wrapper {
  width: 100vw;
  background-color: #ffa44f;
}
.container {
  max-width: 500px;
  margin: 0 auto;
}
.user-profile {
  box-sizing: border-box;
  position: relative;
  padding-bottom: 20px;
  .profile_p {
    margin: 0;
  }
  color:white;
  .user-name {
    font-size: 24px;
  }
  .country {
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      height: 20px;
    }
    span {
      position: absolute;
      bottom: 0;
      left: 30px;
      font-size: 18px;
    }
  }
  .laurel {
    position: absolute;
    right: 0;
    height: 120px;
    width: 100px;
    img {
      width: 100%;
    }
    .level {
      text-align: center;
      width: 100%;
      position: absolute;
      top: 5px;
      font-size: 18px;
      color: white;
      span{
        font-size: 36px;
      }
    }
  }
  .icon-group {
    box-sizing: border-box;
    position:absolute;
    left:100px;
    p {
      box-sizing: border-box;
      color: white;
      float: left;
      padding: 5px;
      font-weight: bold;
      font-size: 20px;
      margin: 10px 5px 0;
      position: relative;
    }
    @mixin hukidasi($color) {
      background-color: $color;
      &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        border: 10px solid transparent;
        border-top: 10px solid $color;
      }
    }
    .heart {
      @include hukidasi(#e86500);
    }
    .plane {
      @include hukidasi(#ff045f);
    }
  }
}
.profile {
  margin-left: 15px;
  h3 {
    color: rgba(0,0,0,.2);
    margin: 0;
  }
  p {
    margin: 0;
  }
}

</style>
