<template>
  <section id="blog-preview">
    <a class="anchor" id="latest-articles-nav"></a>
    <h1>Latest Articles</h1>
    <div class="container">
      <!-- <CardCategories :categories="categories" selectedCategory="0" @category-changed="categoryChanged" /> -->

      <ArticleList :articles="articles" />

      <!-- <div class="row">
        <div class="col-12 text-center">
          <a href="/blog" class="btn btn-lg btn-primary">View More</a>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
import ArticlesService from "@/services/articles.service.js";
import ArticleList from "./ArticleList.vue";
// import CardCategories from "./CardCategories.vue";

export default {
  name: "BlogPreview",
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
    ArticleList
    // CardCategories
  },
  created() {
    ArticlesService.getLatestArticles(3)
      .then(response => {
        this.articles = response;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    categoryChanged() {
      // TODO
    }
  }
};
</script>
