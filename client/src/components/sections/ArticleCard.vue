<template>
  <div class="article-item card ">
    <div class="article-image" :style="{ backgroundImage: 'url(' + blogImage + ')' }"></div>
    <div class="card-body">
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">{{ article.summary }}</p>
    </div>
    <router-link class="btn btn-primary mt-auto article-link" :to="'/blog/' + article.url">Read More</router-link>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: Object
  },
  computed: {
    blogImage() {
      return require("../../assets/images/blog/" + this.article.imageUrl);
    }
  }
};
</script>

<style scoped>
p {
  font-size: 15px;
  text-align: left;
}

.article-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.article-link {
  margin: 0 30px 15px 30px;
}

.article-item {
  margin: 30px 10px;
}
</style>
