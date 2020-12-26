<template>
  <header>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light" id="main-nav">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="@/assets/images/profile-picture.png"
            alt=""
            width="100"
            height="100"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavDropdown"
        >
          <ul class="navbar-nav  ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about-me-nav">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects-nav">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills-nav">Skills</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar-brand img {
  border-radius: 50%;
}

.navbar li {
  width: 120px;
  text-align: center;
  font-weight: bold;
}

nav.navbar {
  background-color: #ffffff00;
}

li.nav-item a {
  color: #fff !important;
}

li.nav-item {
  color: #fff !important;
  font-size: 18px;
}
</style>
