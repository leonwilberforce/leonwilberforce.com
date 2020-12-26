<template>
  <div class="project card">
    <div class="row">
      <div class="col-md-6">
        <div
          class="project-image text-left"
          :style="{ backgroundImage: 'url(' + project.imageUrl + ')' }"
        >
          <i
            v-for="technology in project.technologies"
            v-bind:key="technology"
            :class="technology.iconClass"
          ></i>
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column">
        <div class="project-detail">
          <h3>{{ project.title }}</h3>
          <p class="mb-xl-0">
            {{ project.description }}
          </p>
        </div>
        <a
          v-if="project.link"
          :href="project.link"
          class="btn btn-primary mt-auto project-link"
          >View Project</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: Object
  },
  computed: {}
};
</script>

<style scoped>
.project.card {
  overflow: hidden;
  color: black;
  margin: 0 10px;
}

.project.card .project-detail {
  padding: 20px 20px 0 20px;
}

.project.card .project-detail h3 {
  font-size: 20px;
}

.project.card .project-detail p {
  font-size: 14px;
}

.project.card .project-image {
  height: 200px;
  width: 100%;
  /* background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 0) 70%,
    rgb(255, 255, 255) 100%
  ); */
  background-size: cover;
  background-position: center;
}

.project-image i {
  font-size: 25px;
  text-align: left;
  color: #eaf1ffd0;
  margin: 8px;
}

.project-link {
  margin-bottom: 15px;
  margin-right: 30px;
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .project-link {
    margin-left: 30px;
  }
}
</style>
