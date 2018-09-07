<template>
  <v-ons-page>
    <div class="">
      <p style="margin-left:15px; float:left;">参加中のカテゴリー</p>
      <p class="join-category-link" @click="CategoryEdit">編集</p>
    </div>
    <div style="clear:both;"></div>
    <component
    :is="JoinCategoryPage"
    :page-stack="pageStack"></component>
    <p style="margin-left:15px;">すべてのカテゴリー</p>
    <!-- <component
    v-for="category in allCategories"
    :is="CategoryIndexPage"
    :key="category.id"
    :title="category.title"
    :image="category.image"
    :categoryAll="category.title"
    PropsWidth="25"
    :page-stack="pageStack"
    class="all-category"
    ></component> -->
    <li
    v-for="hogehoge in allCategories"
    :key="hogehoge.id">
    {{hogehoge.title}}
    </li>
  </v-ons-page>
</template>
<script>
import JoinCategory from '../Category/components/JoinCategory'
import MenuPage from './MenuPage'
import CategoryIndex from '../Category/Index'
export default {
  name: 'home',
  props: ['pageStack'],
  data () {
    return {
      title: 'title',
      CategoryIndexPage: CategoryIndex,
      JoinCategoryPage: JoinCategory,
      allCategories: []
    }
  },
  watch: {
    allCategories: function (val) {
      console.log(val)
    }
  },
  created: function () {
    const self = this
    var listSet = []
    this.axios
    .get(process.env.BASE_URL + 'all_category')
    .then(function (res) {
      listSet = res.data
      self.allCategories = listSet
    })
  },
  methods: {
    push () {
      this.pageStack.push(MenuPage)
    },
    CategoryEdit () {
      console.log('CategoryEdit READY!')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.center {
  text-align: center;
}
.join-category-link {
  float: right;
  margin-right: 15px;
  color: gray;
}

</style>
