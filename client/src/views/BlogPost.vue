<template>
  <div class="blog-post">
    <ParallaxCallToAction :title="article.title" height="400px" v-if="article" />

    <section id="article">
      <div v-if="article" class="container">
        <div class="row">
          <div class="col-sm-6">{{ publishedDate }}</div>
          <div class="col-sm-6 text-right">2 min read</div>
        </div>
        <hr />
        <div v-html="markdownHTML"></div>
      </div>
    </section>
  </div>
</template>

<script>
import ParallaxCallToAction from "@/components/ParallaxCallToAction.vue";
import ArticlesService from "@/services/articles.service.js";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js/lib/core";

import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

import MarkdownItHighlightjs from "markdown-it-highlightjs/core";
import dayjs from "dayjs";

const md = new MarkdownIt({ html: true });
md.use(MarkdownItHighlightjs, { hljs });
md.renderer.rules.table_open = function() {
  return '<table class="table table-striped">';
};

export default {
  name: "BlogPost",
  props: ["url"],
  data() {
    return {
      article: null,
      title: "",
      markdownHTML: null
    };
  },
  components: {
    ParallaxCallToAction
  },
  computed: {
    publishedDate() {
      return dayjs(this.article.publishedDate).format("Do MMMM YYYY");
    },
    blogImage() {
      return location.origin + require("../assets/images/blog/" + this.article.imageUrl);
    }
  },
  mounted() {
    console.log("ID: " + this.url);
    ArticlesService.getArticle(this.url)
      .then(response => {
        this.article = response[0];

        this.title = this.article.title;

        this.markdownHTML = md.render(this.article.content);
      })
      .catch(error => {
        console.error(error);
      });

    useHead({
      title: computed(() => "Blog - " + this.title),
      meta: [
        {
          name: "description",
          content: computed(() => {
            if (this.article) {
              return this.article.summary;
            }
          })
        },
        {
          property: "og:title",
          content: computed(() => "Blog - " + this.title)
        },
        {
          property: "og:description",
          content: computed(() => {
            if (this.article) {
              return this.article.summary;
            }
          })
        },
        {
          property: "og:image",
          content: computed(() => {
            if (this.article) {
              return this.blogImage;
            }
          })
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
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

<style scoped>
.hljs {
  background-color: #f5f5f5;
}
</style>
