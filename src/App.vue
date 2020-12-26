<template>
  <div id="main">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
/*

  GLOBAL STYLE

*/
@import url("https://fonts.googleapis.com/css2?family=Lato&family=Quicksand&display=swap");

html {
  scroll-behavior: smooth;
}

a.anchor {
  display: block;
  position: relative;
  top: -100px;
  visibility: hidden;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  text-align: center;
}

h1 {
  font-size: 70px;
}

a {
  color: #c6c6c6;
}

a:hover {
  color: #858585;
}

.card {
  border: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.btn.btn-outline-secondary {
  color: #fff;
  border-color: #f8f8ff;
}

.btn.btn-secondary:hover {
  color: #000;
  background-color: #d8d8d8;
}

.btn.btn-outline-secondary:hover {
  background-color: #d8d8d85d;
  border-color: #d8d8d85d;
}

.btn.btn-secondary {
  color: #000;
  background-color: #f8f8ff;
}

section h1,
section#freelance h3 {
  font-weight: 600;
  margin-bottom: 30px;
  text-decoration: underline;
  text-underline-offset: 20px;
  text-decoration-thickness: 3px;
}

section {
  padding: 50px 0;
}

p {
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
}

.content {
  background-color: #66799e;
  background-image: url("assets/images/60-lines.png");
  background-attachment: fixed;
}

body {
  width: 100%;
  background: #ebebeb;
  text-align: center;
  text-align: justify;
}

.content {
  display: inline-flex;
  flex-direction: column;
  padding: 50px 0 0 0;
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

.thank-you {
  background: rgba(79, 93, 121, 0.5);
  height: 271px;
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

/* Large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  }

}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}
</style>
