<template lang="html">
  <div class="plan-box" @click="PlanShowView">
    <img :src="require('../../assets/block.jpg')" alt="">
    <h3>title title title<span>100</span></h3>
  </div>
</template>

<script>
import PlanShow from './PlanShow.vue'
export default {
  props: ['image', 'title', 'pageStack'],
  methods: {
    PlanShowView () {
      this.pageStack.push(PlanShow)
    }
  }
}
</script>

<style lang="scss">
.plan-box {
  height:calc(90vw / 5);
  width:90%;
  margin:5px auto;
  background-color:gray;
  display:table;
  height:80px;
  img {
    height:calc(90vw / 5);
    width:100%;
    height:100%;
  }
  h3 {
    width: 70%;
    display: table-cell;
    vertical-align: middle;
    background-color: orange;
    position: relative;
    text-align: left;
    padding-left: 10px;
    span {
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      background-color: #E80C7A;
      width: 80px;
      height: 25px;
      line-height: 25px;
      color: white;
      &:before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -10px;
        border: 10px solid transparent;
        border-top: 10px solid #E80C7A;
      }
    }
  }
}
</style>
