<template>
  <section id="freelance">
    <h3>{{ title }}</h3>
    <a :href="buttonLink" class="btn btn-success">{{ buttonText }}</a>
  </section>
</template>

<script>
export default {
  name: "ActionCard",
  props: {
    title: String,
    buttonText: String,
    buttonLink: String
  }
};
</script>

<style scoped></style>
