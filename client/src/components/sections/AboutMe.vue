<template>
  <section id="about-me">
    <div class="container">
      <a class="anchor" id="about-me-nav"></a>
      <h1>About me</h1>
      <!-- <img id="about-me-image" src="@\assets\images\about-me.png" alt="" /> -->
      <p>
        My name is Leon Wilberforce, I’m currently on placement in my third year of a Computer Science BSc (Hons) degree at Teesside University. In my spare
        time I enjoy working on a variety of different projects, many of which can be found <a href="#projects-nav">here</a>. I tend to use projects as a way to
        experiment with new technologies.
      </p>
      <p>
        Asides from programming, I really enjoy watching movies and writing informative tutorials and blog posts. These are something I also look forward to
        sharing<!--  <a href="#latest-articles-nav">here</a> -->. If you are wanting to see what I’m currently up to, feel free to follow me on Twitter. If you
        have any questions or want to talk more about some of the projects I’ve been working on send me a message.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe"
};
</script>

<style scoped>
a,
a:hover {
  color: #3764bc;
}
</style>
