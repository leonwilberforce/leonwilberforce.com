<template>
  <div class="top-right">
    <nav class="navbar navbar-expand-sm">
      <a class="navbar-brand" href="#"
        ><img src="@/assets/images/profile-picture.png" alt="Picture of Leon" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#about-me"
              >About <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.navbar img {
  height: 75px;
  width: 75px;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  margin: 0;
}

.navbar-nav {
  font-size: 20px;
  margin: 0 auto;
}

.navbar-nav li {
  margin: 5px 0;
}

.navbar-nav a {
  color: #d5d2d2;
}

.navbar-nav a:hover {
  color: #fff;
  text-decoration: none;
}

.navbar {
  -webkit-box-shadow: 0 0 20px 0px #4f5d79;
  box-shadow: 0 0 20px 0px #4f5d79;
  background-color: #4f5d79;
}

.navbar-toggler {
  background: #66799e;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
