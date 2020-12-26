<template>
  <section id="projects" class="small-section container-fluid">
    <a class="anchor" id="projects-nav"></a>
    <h1>Projects</h1>
    <div class="row justify-content-md-center text-center">
      <div class="col-6 mt-3">
        <div class="project card">
          <div class="row">
            <div class="col-6">
              <div class="project-image text-left">
                <i class="fab fa-java"></i>
                <i class="fab fa-node-js"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="project-detail">
                <h3>Discord Studybot</h3>
                <p>
                  When completing my studies at college, we were given
                  assignments using python. I went further to extend my
                  knowledge by using the discord.py API and SQLite to create a
                  discord assignment tracker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="project card">
          <div class="row">
            <div class="col-6">
              <div class="project-image text-left">
                <i class="fab fa-java"></i>
                <i class="fab fa-node-js"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="project-detail">
                <h3>Landscaping</h3>
                <p>
                  I developed this website as part of a course in 2017, This was
                  a good learning tool as the unique CSS was used to produce
                  different elements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6 mt-3">
        <div class="project card">
          <div class="row">
            <div class="col-6">
              <div class="project-image text-left">
                <i class="fab fa-java"></i>
                <i class="fab fa-node-js"></i>
              </div>
            </div>
            <div class="col-6">
              <div class="project-detail">
                <h3>Sorting Algorithms</h3>
                <p>
                  During my first year of university, I was tasked with making a
                  visualiser in Java to show how the different sorting
                  algorithms work. I did this using an array of JLabels to
                  represent the bar values. You can find this project on my
                  GitHub.
                </p>
              </div>
            </div>
          </div>
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

.project.card {
  height: 200px;
  overflow: hidden;
  color: black;
  margin: 0 10px;
}

.container-fluid {
  padding-left: 10%;
  padding-right: 10%;
}

.project.card .project-detail {
  padding: 20px;
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
  background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 0) 70%,
      rgb(255, 255, 255) 100%
    ),
    url(https://leonwilberforce.com/Resources/images/sorting.png);
  background-size: cover;
  background-position: center;
}

.project-image i {
  font-size: 25px;
  text-align: left;
  color: #eaf1ffd0;
  margin: 8px;
}
</style>
