<template>
  <div class="blog">
    <ParallaxCallToAction title="Blog" height="400px"> </ParallaxCallToAction>
    <section id="articles">
      <div class="container">
        <CardCategories :categories="categories" selectedCategory="0" @category-changed="categoryChanged" />

        <ArticleList :articles="articles" />
      </div>
    </section>
  </div>
</template>

<script>
import ParallaxCallToAction from "@/components/ParallaxCallToAction.vue";
import ArticlesService from "@/services/articles.service.js";
import ArticleList from "@/components/sections/ArticleList.vue";
import CardCategories from "@/components/sections/CardCategories.vue";

export default {
  name: "Blog",
  data() {
    return {
      articles: null,
      categories: [
        {
          id: 0,
          title: "All"
        },
        {
          id: 1,
          title: "One"
        },
        {
          id: 2,
          title: "Two"
        },
        {
          id: 3,
          title: "Three"
        }
      ]
    };
  },
  components: {
    ArticleList,
    CardCategories,
    ParallaxCallToAction
  },
  async created() {
    this.articles = await ArticlesService.getLatestArticles();
  }
};
</script>
