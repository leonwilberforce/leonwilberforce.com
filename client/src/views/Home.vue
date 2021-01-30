<template>
  <div class="home">
    <ParallaxCallToAction title="Leon Wilberforce">
      <template v-slot:subtitle>
        <span class="text-nowrap">Student - Computer Science</span> -
        <span class="text-nowrap">Teesside University</span>
      </template>

      <template v-slot:buttons>
        <div class="col-md-3 col-sm-4 text-sm-right text-center mb-3">
          <a href="https://twitter.com/LeonWilberforce" class="btn btn-lg btn-outline-secondary"> <i class="fab fa-twitter"></i> Twitter</a>
        </div>
        <div class="col-md-3 col-sm-4 text-center mb-3">
          <a href="https://github.com/leonwilberforce" class="btn btn-lg btn-secondary"> <i class="fab fa-github"></i> Github</a>
        </div>
        <div class="col-md-3 col-sm-4 text-sm-left text-center mb-3">
          <a href="https://www.linkedin.com/in/leon-wilberforce/" class="btn btn-lg btn-outline-secondary"> <i class="fab fa-linkedin-in"></i> LinkedIn</a>
        </div>
      </template>
    </ParallaxCallToAction>

    <AboutMe />

    <Projects />

    <Skills />

    <TechnologyStack />

    <BlogPreview />

    <ContactMe />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/sections/AboutMe.vue";
import Projects from "@/components/sections/Projects.vue";
import Skills from "@/components/sections/Skills.vue";
import TechnologyStack from "@/components/sections/TechnologyStack.vue";
import BlogPreview from "@/components/sections/BlogPreview.vue";
import ContactMe from "@/components/sections/ContactMe.vue";
import ParallaxCallToAction from "@/components/ParallaxCallToAction.vue";

import { useHead } from "@vueuse/head";

export default {
  name: "Home",
  components: {
    AboutMe,
    Projects,
    Skills,
    ParallaxCallToAction,
    TechnologyStack,
    BlogPreview,
    ContactMe
  },
  data() {
    return {
      logo: require("./../assets/images/background-image.webp")
    };
  },
  setup() {
    useHead({
      title: "Leon Wilberforce",
      meta: [
        {
          name: "description",
          content:
            "My name is Leon Wilberforce, I’m currently on placement in my third year of a Computer Science BSc (Hons) degree at Teesside University. In my spare time I enjoy working on a variety of different projects, many of which can be found here. I tend to use projects as a way to experiment with new technologies."
        },
        {
          property: "og:title",
          content: "Leon Wilberforce - Personal Website"
        },
        {
          property: "og:description",
          content:
            "My name is Leon Wilberforce, I’m currently on placement in my third year of a Computer Science BSc (Hons) degree at Teesside University. In my spare time I enjoy working on a variety of different projects, many of which can be found here. I tend to use projects as a way to experiment with new technologies."
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
