<template>
  <section id="blog">
    <h1>Articles</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 category-list text-center">
          <a href="#" class="badge badge-pill badge-category badge-selected"
            >All</a
          >
          <a href="#" class="badge badge-pill badge-category mt-1"
            >Category One</a
          >
          <a href="#" class="badge badge-pill badge-category mt-1"
            >Category Two</a
          >
          <a href="#" class="badge badge-pill badge-category mt-1"
            >Category Three</a
          >
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 mt-3 col-sm-6" v-for="article in articles" :key="article.id">
          <ArticleCard :article="article" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <a href="#" class="btn btn-lg btn-primary">View More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ArticleCard from './ArticleCard.vue';
import ArticlesService from '@/services/articles.service.js';

export default {
  name: "Blog",
  data() {
    return {
      articles: null,
    };
  },
  components: {
    ArticleCard
  },
  created() {
    ArticlesService.getLatestArticles(3)
      .then(response => {
        this.articles = response;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style scoped>

.category-list .badge-category {
  padding: 10px 20px;
  margin: 0 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.category-list .badge-category {
  border: 1px black solid;
  color: black;
}

.category-list .badge-category:hover {
  background-color: #66799e28;
  border: 1px rgb(100, 100, 100) solid;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.category-list .badge-selected {
  padding: 10px 20px;
  background-color: #4f5d79;
  color: white;
  border: none;
}

.category-list .badge-selected:hover {
  background-color: #66799e28;
  border: none;
  background-color: #4f5d79;
}
</style>
