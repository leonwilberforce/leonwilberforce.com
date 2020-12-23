<template>
  <div class="home">
    <div class="container">
      <AboutMe />

      <hr class="m-0" />

      <ActionCard
        title="I am available for freelance work."
        buttonText="Contact Me"
        buttonLink="#contact"
      />

      <hr class="m-0" />

      <Projects />

      <hr />

      <Skills />

      <hr />

      <ContactMe />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AboutMe from "@/components/sections/AboutMe.vue";
import Projects from "@/components/sections/Projects.vue";
import Skills from "@/components/sections/Skills.vue";
import ContactMe from "@/components/sections/ContactMe.vue";
import ActionCard from "@/components/sections/ActionCard.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
    Projects,
    Skills,
    ContactMe,
    ActionCard
  }
};
</script>
