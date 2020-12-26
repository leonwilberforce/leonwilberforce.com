<template>
  <section id="skills" class="small-section">
    <div class="container">
      <a class="anchor" id="skills-nav"></a>
      <h1>Skills</h1>
      <p>
        Throughout my education and commitment to furthering my knowledge at
        home I have built up a range of skills from 3D modelling to java
        programming. You can explore just some of the skills I have built up
        below.
      </p>
      <p>
        As well as the skills shown here, you can checkout the diffrent skills
        that i have picked up from the various modules <a href="#">Here</a>
      </p>
    </div>

    <div class="container-fluid">
      <div class="row mt-3">
        <div class="col-md-8 offset-md-1">
          <div class="skill skill-left card">
            <div class="skill-title">
              <div class="skill-image">
                <img src="@/assets/images/skills/java-scaled.png" alt="" />
              </div>
              <h3>Java</h3>
            </div>
            <div class="skill-details">
              <p>
                I have been interested and skilled at using Java from an early
                age. At 13 I bought my first book on java, which taught me the
                foundations of what I know and use today. Since then I have
                continued to improve my knowledge and skills around Java. This
                has come in very useful as Java is the main core language that
                is taught on my university degree.
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
              <div class="skill-image">
                <img src="@/assets/images/skills/web-scaled.png" alt="" />
              </div>
            </div>
            <div class="skill-details">
              <p>
                Across the summer holidays one year, I decided to complete a few
                different online courses on HTML and CSS, javascript, PHP and
                SQL.<br />
                One of the reasons why I am interested in and love web
                development so much is because of the speed at which functional
                applications can be developed. Websites can be developed for any
                purpose and there is a wide range of customisations that can be
                made to match the target audience. Websites are also one of the
                best distribution methods in today’s world as they can be
                accessed on all internet-connected devices.<br />
                You can find some of my web development projects in the list
                above.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col-md-8 offset-md-1">
          <div class="skill skill-left card">
            <div class="skill-title">
              <div class="skill-image">
                <img src="@/assets/images/skills/scaled.png" alt="" />
              </div>
              <h3>Photoshop</h3>
            </div>
            <div class="skill-details">
              <p>
                At Secondary School creating graphical posters using an editor
                of our choice was a coursework assignment. I decided to use
                photoshop. Since then I have become very proficient with
                developing graphical images and logos. One of my main uses of
                photoshop at the moment is to plan and design web projects using
                the
                <a href="https://960.gs/">960 Grid System</a>
                , this is especially useful is you are planning on using
                bootstraps column system.
              </p>
              <p>
                As well as web design, I also use photoshop to create various
                logos and images, often using this alongside Lightroom to edit
                various images.
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;
  /* margin: 20px 650px 20px 200px; */
  border: none;
}
.skill:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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

.skill-left > .skill-title {
  text-align: left;
}
</style>
