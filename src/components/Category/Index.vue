<template lang="html">
  <div
  class="block-item"
  :style="{width:PropsWidth+'vw'}"
  @click="CategoryClickShow"
  >
  <img
  :src="require('../../assets/' + image)"
  style="width:100%; float:right;"
  >
  <p>test {{title}}</p>
</div>
</template>

<script>
import CategoryShow from './Show'
export default {
  props: ['title', 'image', 'PropsWidth', 'pageStack', 'categoryAll'],
  mounted: function () {
    console.log(this.categoryAll)
  },
  methods: {
    CategoryClickShow () {
      this.pageStack.push(CategoryShow)
    }
  }
}
</script>

<style lang="css">
.block-item {
  margin: 15px;
  float: left;
}
</style>

<!--
props
image
name
id
category_id

hasmany PreviouslyRead
user_id
category_id

HOT!の表示基準
n日の間で既読がxを超えた場合に表示
-->
