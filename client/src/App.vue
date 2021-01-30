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
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
}

.card:hover {
  border: none;
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.btn-primary {
  background-color: #4f5d79;
  border: none;
}

.btn.btn-lg {
  border-radius: 1rem;
}

.btn {
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.btn:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.btn-primary:hover {
  background-color: #3b5382;
  border: none;
}

.btn.btn-outline-secondary {
  color: #ebebeb;
  border-color: #ebebeb;
}

.btn.btn-secondary:hover {
  color: #000;
  background-color: #fff;
}

.btn.btn-outline-secondary:hover {
  background-color: #d8d8d81c;
  border-color: #d8d8d85d;
  color: #fff;
  border-color: #fff;
}

.btn.btn-secondary {
  color: #000;
  background-color: #ebebeb;
}

.btn.btn-primary.focus,
.btn.btn-primary:focus {
  background-color: #2b4477;
  box-shadow: none;
  border: none;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.btn-primary:not(:disabled):not(.disabled).active:focus,
.btn-primary:not(:disabled):not(.disabled):active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: #2b4477;
}

.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show > .btn-primary.dropdown-toggle {
  background-color: #2b4477;
  border: none;
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

p,
label {
  font-family: "Quicksand", sans-serif;
  font-size: 20px;
}

body {
  width: 100%;
  background: #ebebeb;
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
  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
  background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0));
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
  h1 {
    font-size: 50px;
  }

  p {
    font-size: 18px;
  }
}

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
}
</style>
