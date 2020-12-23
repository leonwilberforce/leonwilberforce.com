<template>
  <section id="projects" class="small-section">
    <a href="#projects" id="projects"></a>
    <h1>Projects</h1>
    <div class="projects">
      <div class="project sorting">
        <div class="project-detail">
          <h3>Sorting Algorithms</h3>
          <p>
            During my first year of university, I was tasked with making a
            visualiser in Java to show how the different sorting algorithms
            work. I did this using an array of JLabels to represent the bar
            values. You can find this project on my GitHub
            <a href="https://github.com/leonwilberforce/GUI-Sorting-Algorithms"
              >here</a
            >.
          </p>
        </div>
      </div>
      <div class="project example-landscaping">
        <div class="project-detail">
          <h3>Landscaping</h3>
          <p>
            I developed this website as part of a course in 2017, This was a
            good learning tool as the unique CSS was used to produce different
            elements. Feel free to take a look at this project at:
            <a href="https://landscaping.sites.leonwilberforce.com"
              >https://landscaping.sites.leonwilberforce.com</a
            >
          </p>
        </div>
      </div>
      <div class="project">
        <div class="project-detail">
          <h3>Discord Studybot</h3>
          <p>
            When completing my studies at college, we were given assignments
            using python. I went further to extend my knowledge by using the
            discord.py API and SQLite to create a discord assignment tracker.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Projects"
};
</script>

<style scoped>
#projects {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #66799e;
  color: #eaf1ff;
}
</style>
