<template>
  <div id="article-list">
    <div class="row justify-content-center">
      <div class="col-lg-4 mt-3 col-sm-6" v-for="article in articles" :key="article.id">
        <ArticleCard :article="article" />
      </div>
    </div>
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard.vue";

export default {
  name: "ArticleList",
  props: {
    articles: Object
  },
  components: {
    ArticleCard
  }
};
</script>

<style scoped>
#article-list {
  min-height: 500px;
}

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
