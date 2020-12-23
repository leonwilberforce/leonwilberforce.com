<template>
  <div class="home">
    <ParallaxCallToAction />
    <AboutMe />

    <Projects />

    <Skills />
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/sections/AboutMe.vue";
import Projects from "@/components/sections/Projects.vue";
import Skills from "@/components/sections/Skills.vue";
import ParallaxCallToAction from "@/components/ParallaxCallToAction.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
    Projects,
    Skills,
    ParallaxCallToAction
  }
};
</script>
