<template>
  <section id="TechnologyStack">
    <h1>Technology Stack</h1>
    <div class="container d-flex align-content-start flex-wrap text-center justify-content-center">
      <TechnologyStackItem name="VueJs" iconClass="fab fa-vuejs" colour="#3fb27f" />
      <TechnologyStackItem name="Java" iconClass="fab fa-java" colour="#f0931c" />
      <TechnologyStackItem name="JavaScript" iconClass="fab fa-js" colour="#e7d532" />
      <TechnologyStackItem name="Python" iconClass="fab fa-python" colour="#f7ca3e" />
      <TechnologyStackItem name="HTML5" iconClass="fab fa-html5" colour="#e96228" />
      <TechnologyStackItem name="CSS" iconClass="fab fa-css3-alt" colour="#28a4d8" />
      <TechnologyStackItem name="NodeJs" iconClass="fab fa-node-js" colour="#87bf00" />
      <TechnologyStackItem name="PHP" iconClass="fab fa-php" colour="#474A8A" />
    </div>
  </section>
</template>

<script>
import TechnologyStackItem from "@/components/sections/TechnologyStackItem.vue";

export default {
  name: "TechnologyStack",
  components: {
    TechnologyStackItem
  }
};
</script>

<style scoped>
#TechnologyStack {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #66799e;
  color: #eaf1ff;
}
</style>
