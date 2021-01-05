<template>
  <div class="home">
    <ParallaxCallToAction title="Leon Wilberforce">
      <template v-slot:subtitle>
        <span class="text-nowrap">Student - Computer Science</span> -
        <span class="text-nowrap">Teesside University</span>
      </template>

      <template v-slot:buttons>
        <div class="col-md-3 col-sm-4 text-sm-right text-center mb-3">
          <a
            href="https://twitter.com/LeonWilberforce"
            class="btn btn-lg btn-outline-secondary"
          >
            <i class="fab fa-twitter"></i> Twitter</a
          >
        </div>
        <div class="col-md-3 col-sm-4 text-center mb-3">
          <a
            href="https://github.com/leonwilberforce"
            class="btn btn-lg btn-secondary"
          >
            <i class="fab fa-github"></i> Github</a
          >
        </div>
        <div class="col-md-3 col-sm-4 text-sm-left text-center mb-3">
          <a
            href="https://www.linkedin.com/in/leon-wilberforce/"
            class="btn btn-lg btn-outline-secondary"
          >
            <i class="fab fa-linkedin-in"></i> LinkedIn</a
          >
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
  }
};
</script>
