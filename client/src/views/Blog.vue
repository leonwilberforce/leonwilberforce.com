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

import { useHead } from "@vueuse/head";

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
  },
  setup() {
    useHead({
      title: "Blog",
      meta: [
        {
          name: "description",
          content: "A blog based around full-stack development written by Leon Wilberforce."
        },
        {
          property: "og:title",
          content: "A Blog Written by Leon Wilberforce"
        },
        {
          property: "og:description",
          content: "A blog based around full-stack development written by Leon Wilberforce."
        },
        {
          property: "og:image",
          content: "https://leonwilberforce.com/twitter-card-image.jpg"
        },
        {
          name: "twitter:card",
          content: "summary"
        },
        {
          name: "twitter:creator",
          content: "@leonwilberforce"
        },
        {
          name: "twitter:site",
          content: "@leonwilberforce"
        }
      ]
    });
  }
};
</script>
