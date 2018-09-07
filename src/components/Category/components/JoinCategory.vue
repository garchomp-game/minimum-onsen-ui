<template lang="html">
  <div class="scroll-relative">
    <div :class="'scroll-top' + categoryLength">
      <component
      v-for="category in joinCategories"
      :is="category.page"
      :key="category.key"
      :title="category.title"
      :image="category.image"
      PropsWidth="22"
      :page-stack="pageStack"
      ></component>
    </div>
  </div>
</template>

<script>
import CategoryIndex from '../Index'
export default {
  props: ['pageStack'],
  data () {
    return {
      title: 'title',
      joinCategories: [
        {
          key: 1,
          page: CategoryIndex,
          title: '1',
          image: 'block.jpg'
        },
        {
          key: 2,
          page: CategoryIndex,
          title: '2',
          image: 'block.jpg'
        },
        {
          key: 3,
          page: CategoryIndex,
          title: '3',
          image: 'block.jpg'
        },
        {
          key: 4,
          page: CategoryIndex,
          title: '4',
          image: 'block.jpg'
        },
        {
          key: 5,
          page: CategoryIndex,
          title: '5',
          image: 'block.jpg'
        }
      ],
      widthNum: 5
    }
  },
  computed: {
    categoryLength () {
      return this.joinCategories.length
    }
  }
}
</script>

<style lang="scss">
.scroll-relative {
  overflow: scroll;
  @for $i from 1 through 30 {
    .scroll-top#{$i} {
      width: calc((25vw + 30px) * #{$i});
    }
  }
}
</style>
