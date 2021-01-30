<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark" id="main-nav">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="@/assets/images/profile-picture.webp" alt="" width="100" height="100" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto" @click="clickedNavLink">
            <li class="nav-item">
              <router-link class="nav-link" to="/#about-me-nav">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/#projects-nav">Projects</router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link class="nav-link" to="blog">Blog</router-link>
            </li> -->
            <li class="nav-item">
              <router-link class="nav-link" to="/#contact-nav">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
var triggerHeight = 0;
import $ from "jquery";

const handleScroll = () => {
  var st = $(window).scrollTop();

  if (st >= triggerHeight) {
    $("#main-nav").addClass("navbar-condensed");
  } else if ($("#navbarNavDropdown.show").length == 0) {
    $("#main-nav").removeClass("navbar-condensed");
  }
};

export default {
  name: "NavBar",
  mounted() {
    document.addEventListener("scroll", handleScroll);
    triggerHeight = window.innerHeight < 700 - $("#main-nav").outerHeight() ? window.innerHeight : 700 - $("#main-nav").outerHeight();
  },
  methods: {
    toggleNavbar: function() {
      $(".navbar").addClass("navbar-condensed");
    },
    clickedNavLink: function() {
      if (!$("#navbarNavDropdown.show").length == 0) {
        $(".navbar-toggler").click();
      }
    }
  }
};
</script>

<style scoped>
.navbar-brand img {
  border-radius: 50%;
  transition: all 1.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.navbar li {
  width: 120px;
  text-align: center;
  font-weight: bold;
}

nav.navbar {
  background-color: #ffffff00;
  transition: all 1.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

li.nav-item a {
  color: #ebebeb !important;
}

li.nav-item a:hover {
  color: #d8d8d8 !important;
}

li.nav-item {
  font-size: 18px;
}

.navbar-nav {
  background: rgba(255, 255, 255, 0);
}

.nav-link {
  color: #000 !important;
}

.navbar.navbar-condensed .navbar-brand img {
  width: 50px;
  height: 50px;
}

.navbar.navbar-condensed {
  background-color: #4f5d79;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .navbar li {
    width: 100%;
    text-align: center;
    font-weight: bold;
    height: 50px;
  }

  .navbar li a:active,
  .navbar li a:hover {
    background-color: #66799e;
  }
}
</style>
