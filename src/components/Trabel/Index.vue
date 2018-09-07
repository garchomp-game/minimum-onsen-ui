<template lang="html">
  <div class="content-box">
    <div class="trabel-top-image">
      <img
      :src="require('../../assets/' + image)"
      >
      <div class="top">
        <p class="title">沖縄３日間の旅</p>
        <p class="level">Lv.23</p>
      </div>
      <div class="bottom">
        <span>180cm/67kg/26歳</span>
        <div class="">
          <img :src="require('../../assets/logo.png')" alt="">
          <img :src="require('../../assets/logo.png')" alt="">
          <img :src="require('../../assets/logo.png')" alt="">
        </div>
      </div>
      <div class="">

      </div>
    </div>
    <div style="margin-bottom:80px;">
      <p style="margin-top:0; float:left;">{{ title }}</p>
      <div style="clear:both;"></div>
      <component
      v-for="plan in plans"
      :is="plan.page"
      :key="plan.key"
      :title="plan.title"
      :image="plan.image"
      :page-stack="pageStack"
      ></component>
      <p style="margin-top:0; float:right; font-size:18px">{{ deadline }}</p>
      <div style="clear:both;"></div>
    </div>
  </div>
</template>

<script>
import PlanPage from './Plan'
export default {
  props: ['title', 'image', 'deadline', 'pageStack'],
  data () {
    return {
      plans: [
        {
          key: 1,
          page: PlanPage,
          title: '1',
          image: 'block.jpg'
        },
        {
          key: 2,
          page: PlanPage,
          title: '2',
          image: 'block.jpg'
        },
        {
          key: 3,
          page: PlanPage,
          title: '3',
          image: 'block.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.content-box {
  margin: 0 auto;
  width: 90vw;
  text-align: center;
  p {
    color: gray;
    font-size: 12px;
    font-weight: bold;
  }
  .trabel-top-image {
    position: relative;
    img {
      position: relative;
      height: 350px;
      width: 100%;
    }
    .top {
      position: absolute;
      top:0;
      width:100%;
      height: 100px;
      p {
        color: white;
        margin:0;
      }
      .title {
        background: orange;
        float: left;
        font-size:8vw;
      }
      .level {
        color: orange;
        -webkit-text-stroke: 2px white;
        float: right;
        font-size:10vw;
      }
    }
    .bottom {
      bottom: 0;
      color: white;
      width:100%;
      span {
        float: left;
        margin: 0;
        position: absolute;
        bottom: 2vw;
        left: 2vw;
        padding: 2px 5px;
        background: white;
        color: gray;
      }
      div {
        position: absolute;
        bottom: 0;
        right: 0;
        float:right;
        img {
          width:10vw;
          height:10vw;
        }
      }
    }
  }
}

</style>
