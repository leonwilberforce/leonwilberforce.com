<template>
  <div class="article-item card ">
    <div class="article-image" :style="{ backgroundImage: 'url(' + article.imageUrl + ')' }"></div>
    <div class="card-body">
      <h5 class="card-title">{{ article.title }}</h5>
      <p class="card-text">{{ article.summary }}</p>
    </div>
    <a :href="'blog/' + article.url" class="btn btn-primary mt-auto article-link">Read More</a>
  </div>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: Object
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
