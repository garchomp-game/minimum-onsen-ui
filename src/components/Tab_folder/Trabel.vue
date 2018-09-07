<template>
  <v-ons-page>
    <input
    placeholder="検索"
    v-model="query"
    class="search"
    ></input>
    <div class="">
      <component
      v-for="content in contents"
      :is="content.page"
      :key="content.key"
      :title="content.title"
      :deadline="content.deadline"
      :image="content.image"
      :page-stack="pageStack"
      ></component>
    </div>
  </v-ons-page>
</template>

<script>
import TravelIndex from '../Trabel/Index'
export default {
  props: ['pageStack'],
  data () {
    return {
      query: '',
      contents: [
        {
          key: 1,
          page: TravelIndex,
          title: 'title 1',
          deadline: '2000/01/01',
          image: 'block.jpg'
        },
        {
          key: 2,
          page: TravelIndex,
          title: 'title 2',
          deadline: '2000/01/01',
          image: 'block.jpg'
        },
        {
          key: 3,
          page: TravelIndex,
          title: 'title 3',
          deadline: '2000/01/01',
          image: 'block.jpg'
        },
        {
          key: 4,
          page: TravelIndex,
          title: 'title 4',
          deadline: '2000/01/01',
          image: 'block.jpg'
        },
        {
          key: 5,
          page: TravelIndex,
          title: 'title 5',
          deadline: '2000/01/01',
          image: 'block.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.search {
  margin:15px;
  height:30px;
  width:80%;
}
</style>
