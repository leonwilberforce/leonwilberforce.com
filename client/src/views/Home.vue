<template>
  <div class="home">
    <ParallaxCallToAction />

    <AboutMe />

    <Projects />

    <Skills />

    <TechnologyStack />

    <Blog />

    <ContactMe />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/sections/AboutMe.vue";
import Projects from "@/components/sections/Projects.vue";
import Skills from "@/components/sections/Skills.vue";
import TechnologyStack from "@/components/sections/TechnologyStack.vue";
import Blog from "@/components/sections/Blog.vue";
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
    Blog,
    ContactMe
  }
};
</script>
