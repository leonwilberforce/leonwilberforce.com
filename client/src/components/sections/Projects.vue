<template>
  <section id="projects" class="small-section container-fluid">
    <a class="anchor" id="projects-nav"></a>
    <h1>Projects</h1>
    <div class="row justify-content-center text-center">
      <div
        class="col-xl-6 mt-5"
        v-for="project in projects"
        v-bind:key="project"
      >
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from "@/components/sections/ProjectCard.vue";

export default {
  name: "Projects",
  components: {
    ProjectCard
  },
  data: function() {
    return {
      projects: [
        {
          title: "Discord Studybot",
          description: `A discord bot that is used to track assignments and deadlines in college. Built using Python and the discord.py API.`,
          imageUrl: require("../../assets/images/projects/3.png"),
          link: null,
          technologies: [
            {
              name: "Python",
              color: "#fff",
              iconClass: "fab fa-python"
            },
            {
              name: "Discord Bot",
              color: "#fff",
              iconClass: "fab fa-discord"
            }
          ]
        },
        {
          title: "Landscaping",
          description: `A PHP website designed as part of a course in 2017. Built using HTML, CSS and PHP`,
          imageUrl: require("../../assets/images/projects/1.png"),
          link: "https://landscaping.sites.leonwilberforce.com/",
          technologies: [
            {
              name: "PHP",
              color: "#fff",
              iconClass: "fab fa-php"
            },
            {
              name: "CSS",
              color: "#fff",
              iconClass: "fab fa-css3-alt"
            },
            {
              name: "HTML",
              color: "#fff",
              iconClass: "fab fa-html5"
            }
          ]
        },
        {
          title: "Sorting Algorithms",
          description: `A sorting algorithm GUI visualiser. Built using Java and the Swing library. Supported algorithms: bubble, shuttle and shaker.`,
          imageUrl: require("../../assets/images/projects/2.png"),
          link: "https://github.com/leonwilberforce/GUI-Sorting-Algorithms",
          technologies: [
            {
              name: "Java",
              color: "#fff",
              iconClass: "fab fa-java"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
#projects {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #66799e;
  color: #eaf1ff;
}

.container-fluid {
  padding-left: 10%;
  padding-right: 10%;
}
</style>
