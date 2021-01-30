<template>
  <section id="skills" class="small-section">
    <div class="container">
      <a class="anchor" id="skills-nav"></a>
      <h1>Skills</h1>
      <p>
        Throughout my education and commitment to furthering my knowledge at home I have built up a range of skills; I’m always looking to learn new skills and
        experiment with new technologies. Here are a few skills that I am most proficient in:
      </p>
    </div>

    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-8 offset-md-1">
          <div class="skill skill-left card">
            <div class="skill-title">
              <div class="skill-image d-flex align-items-center justify-content-center">
                <i class="fab fa-java"></i>
              </div>
              <h3>Java</h3>
            </div>
            <div class="skill-details">
              <p>
                Unusually, Java was the first language I came across. At 13 I bought my first book on Java, which taught me the foundations of what I know and
                use today. Since then, I’ve continued to build my knowledge and skills around Java. This has came in very useful as Java is one of the main
                languages taught on my university degree, allowing me to develop my skills even further, creating applications like a GUI Sorting Algorithms
                visualiser.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-8 offset-md-3">
          <div class="skill skill-right card">
            <div class="skill-title">
              <h3>Web Development</h3>
              <div class="skill-image d-flex align-items-center justify-content-center">
                <i class="fas fa-globe-americas"></i>
              </div>
            </div>
            <div class="skill-details">
              <p>
                I originally started my web developer journey using PHP. I originally used PHP in projects like the Example Landscaping website. However, I have
                since progressed my web development technologies moving to C# and NodeJS as my main choices for both workplace and personal projects. I also use
                front-end frameworks like VueJS and knockoutJS. This website, for example, was created using a VueJS front-end and NodeJS/ExpressJS backend.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-8 offset-md-1">
          <div class="skill skill-left card">
            <div class="skill-title">
              <div class="skill-image d-flex align-items-center justify-content-center">
                <i class="fas fa-camera"></i>
              </div>
              <h3>Photoshop</h3>
            </div>
            <div class="skill-details">
              <p>
                Over the years I've become quite proficient in both Photoshop and Lightroom. I use them predominantly for graphic design and photo editing. Many
                of the photos I've edited/taken can be found here. I often use photoshop to plan and design some of my projects prior to their development. This
                gives me a good idea for what the end goal should look like.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style scoped>
.skill {
  padding: 20px;
}

.skill-right {
  /* margin: 20px 200px 20px 650px; */
  text-align: right;
}

.skill-right > .skill-title {
  margin-left: auto;
}

.skill-right .skill-image {
  margin: 0 0 0 10px;
}

.skill-left > .skill-title h3 {
  text-align: left;
  margin-left: 10px;
}

.skill .skill-title {
  display: flex;
}

.skill .skill-title h3 {
  align-self: flex-end;
}

.skill .right h3 {
  margin-left: auto;
}

.skill .right .skill-image {
  margin: 0 0 0 10px;
}

.skill img {
  width: 30px;
}

.skill-image {
  font-size: 40px;
  /* background: #4f5d79;
  color: #fff; */
  color: #4f5d79;
  border-radius: 50%;
  width: 51px;
  height: 51px;
}
</style>
