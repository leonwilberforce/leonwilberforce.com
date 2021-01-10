<template>
  <div class="blog-post">
    <ParallaxCallToAction :title="article.title" height="400px" v-if="article"> </ParallaxCallToAction>

    <section id="article">
      <div v-if="article" class="container">
        <div class="row">
          <div class="col-sm-6">{{ publishedDate }}</div>
          <div class="col-sm-6 text-right">2 min read</div>
        </div>
        <hr>
        <div v-html="markdownHTML"></div>
      </div>
    </section>


  </div>
</template>

<script>
import ParallaxCallToAction from "@/components/ParallaxCallToAction.vue";
import ArticlesService from "@/services/articles.service.js";
import MarkdownIt from 'markdown-it';
import MarkdownItHighlightjs from 'markdown-it-highlightjs';
import dayjs from 'dayjs';

const md = new MarkdownIt({ html: true });
md.use(MarkdownItHighlightjs);
md.renderer.rules.table_open = function() {
      return '<table class="table table-striped">';
};

export default {
  name: "BlogPost",
  props: ['url'],
  data() {
    return {
      article: null,
      markdownHTML: null
    };
  },
  components: {
    ParallaxCallToAction
  },
  computed: {
    publishedDate() {
      return dayjs(this.article.publishedDate).format('D MMM YYYY');
    }
  },
  mounted() {
    ArticlesService.getArticle(this.url)
      .then(response => {
        console.log(response);
        this.article = response[0];

        this.markdownHTML = md.render(this.article.content);
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>