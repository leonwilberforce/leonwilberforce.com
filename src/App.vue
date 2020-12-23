<template>
  <div id="main">
    <SideBar />
    <ContentBody />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import ContentBody from "@/components/ContentBody.vue";

export default {
  components: {
    SideBar,
    ContentBody
  }
};
</script>

<style>
/*

  GLOBAL STYLE

*/
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Quicksand&display=swap");

html,
body,
#app,
#main {
  height: 100%;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Lato", sans-serif;
}

a {
  color: #c6c6c6;
}

a:hover {
  color: #858585;
}

section h1,
section#freelance h3 {
  font-weight: 600;
}

p {
  font-family: "Quicksand", sans-serif;
}

.container p {
  text-align: justify;
}

section.small-section {
  font-family: "Quicksand", sans-serif;
  max-width: 700px;
  margin: 0 auto;
}

section#about-me {
  margin-bottom: 25px;
}

section#projects {
  margin-top: 25px;
}

#main {
  height: 100%;
  overflow: hidden;
  margin: 0px;
  display: flex;
  box-sizing: border-box;
}

.column {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.quote {
  padding: 20px;
}

.fa-quote-right,
.fa-quote-left {
  margin: 0 10px;
  font-size: 30px !important;
}

hr {
  border: 0.5px solid rgb(213, 213, 213);
  width: 78%;
}

.top-left {
  flex-grow: 9;
  width: 100%;
}

.top-right {
  flex-shrink: 0;
  padding: 0;
}

ul {
  display: inline-flex;
  list-style: none;
}

.bottom {
  flex-grow: 1;
  overflow-y: auto;
  width: 100%;
}

.content {
  background-color: #66799e;
  background-image: url("assets/images/60-lines.png");
  background-attachment: fixed;
}

.social-media ul {
  padding: 0;
}

.social-media .fa {
  font-size: 40px;
  margin: 5px;
}

.social-media a {
  color: #7d95c4;
}

.social-media a#twitter:hover {
  color: #38a1f3;
}

.social-media a#linkedin:hover {
  color: #0077b5;
}

.social-media a#github:hover {
  color: #fff;
}

.social-media a#rss:hover {
  color: #f26522;
}

.social-media a:hover {
  text-decoration: none;
}

#right {
  width: 100%;
  background: #66799e;
  color: #eaf1ff;
  text-align: center;
}

.content {
  display: inline-flex;
  flex-direction: column;
  padding: 50px 0 0 0;
}

hr {
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
}

.projects {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
}

.project {
  background: #4a5f87;
  background-image: url("assets/images/tmp.png");
  width: 250px;
  height: 250px;
  background-size: contain;
  padding: 200px 0 0 0;
  overflow: hidden;
  margin: 10px;
}

.example-landscaping {
  background-image: url("assets/images/example.png");
}

.sorting {
  background-image: url("assets/images/sorting.png");
}

.project-image {
  width: 200px;
}

.project-detail {
  padding: 5px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.5);
}

@keyframes example {
  0% {
    height: 0px;
    padding: 0;
  }

  50% {
    height: 5px;
    padding: 0;
  }

  100% {
    height: 150px;
    padding: 35px;
  }
}

#freelance {
  color: #2c3850;
  background-image: -webkit-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
  background-image: -o-linear-gradient(
    left,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.75),
    rgba(0, 0, 0, 0)
  );
  overflow: hidden;
  height: 150px;
  padding: 35px;
  animation-name: example;
  animation-duration: 2s;
}

.btn.btn-success {
  background: rgba(79, 93, 121, 0.5);
  border: solid 1px rgb(38, 50, 56);
}

.btn.btn-success:hover {
  background: rgb(79, 93, 121);
}

.media-query-indicator {
  height: 10px;
  width: 10px;
  background: #fff;
  position: absolute;
  z-index: 1;
}

.media-query-indicator.one {
  top: 5%;
  left: 5%;
}

.media-query-indicator.two {
  top: 95%;
  left: 95%;
}

.media-query-indicator.three {
  top: 95%;
  left: 5%;
}

.media-query-indicator.four {
  top: 5%;
  left: 95%;
}

.top-right nav {
  display: none;
}

label {
  width: 100%;
  text-align: left;
}

.form-group {
  width: 100%;
  margin: 0 0 10px 0;
}

.form-group input,
.form-group textarea {
  background-color: rgba(130, 150, 187, 1);
  color: #fff;
}

.form-group input:focus,
.form-group textarea:focus {
  background-color: rgba(153, 172, 207, 1);
  color: #fff;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #dbe9ff;
}

.form-row {
  padding-left: 0px;
  padding-right: 0px;
}

form .btn.btn-form {
  background-color: #4f5d79;
  border: #fff 1px solid;
  width: 100%;
}

form .btn.btn-form:hover {
  background-color: #556483;
}

form .btn.btn-form:active {
  background-color: #3e4b65 !important;
}

form .btn.btn-form:focus {
  box-shadow: none !important;
}

.form-group input:focus,
.form-group textarea:focus,
form .btn.btn-form:focus {
  border-color: #b0b0b0 !important;
  box-shadow: none;
}

.thank-you {
  background: rgba(79, 93, 121, 0.5);
  height: 271px;
}

.thank-you {
  padding: 116.3px 0;
}

footer {
  background-color: #4f5d79;
  margin-top: 25px;
  padding: 10px;
}

.copyright {
  margin: 0;
}

.skill .skill-title {
  display: flex;
}

.skill .skill-title h3 {
  align-self: flex-end;
}

.skill .skill-image {
  margin: 0;
  background: #4f5d79;
  width: 50px;
  height: 50px;
  padding: 10px;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  margin-right: 10px;
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

#about-me-image {
  width: 250px;
  float: left;
  margin: 0 15px 5px 0;
}

/* Extra large devices (large desktops) */

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  #freelance h3 {
    width: 320px;
    margin: 0 auto;
  }

  #freelance {
    padding: 17.5px;
  }
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .top-right nav {
    display: flex;
    overflow: hidden;
    animation-name: test2;
    animation-duration: 2s;
  }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}
</style>
