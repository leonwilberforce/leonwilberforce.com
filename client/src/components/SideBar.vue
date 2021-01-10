<template>
  <div id="sidebar" class="column">
    <div class="top-left">
      <img src="@/assets/images/profile-picture.png" alt="Picture of Leon" />
      <h2>Leon Wilberforce</h2>
      <p><span>Student</span> - Computer Science</p>
      <hr />
      <nav class="navbar">
        <ul class="navbar-nav">
          <li><a href="#about-me">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <hr />
    </div>
    <hr />
    <div class="social-media">
      <ul>
        <!-- <li><a id="rss" class="fa fa-rss-square" aria-hidden="true" href="#"></a></li> -->
        <li>
          <a id="twitter" class="fa fa-twitter-square" aria-hidden="true" href="https://twitter.com/leonwilberforce"></a>
        </li>
        <li>
          <a id="linkedin" class="fa fa-linkedin-square" aria-hidden="true" href="https://www.linkedin.com/in/leon-wilberforce/"></a>
        </li>
        <li>
          <a id="github" class="fa fa-github-square" aria-hidden="true" href="https://github.com/leonwilberforce"></a>
        </li>
      </ul>
    </div>
    <span>&copy; Leon Wilberforce 2018-2020</span>
    <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "SideBar"
};
</script>

<style scoped>
#sidebar span {
  font-size: 12px;
}

#sidebar {
  flex-shrink: 0;
  width: 300px;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #4f5d79;
  color: #fff;
  text-align: center;
  -webkit-box-shadow: 0 0 20px 0px #4f5d79;
  box-shadow: 0 0 20px 0px #4f5d79;
  z-index: 0;
}

#sidebar img,
.navbar img {
  height: 200px;
  width: 200px;
  -webkit-clip-path: circle(50% at 50% 50%);
  clip-path: circle(50% at 50% 50%);
  margin: 50px 30px 20px 30px;
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

/* Small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  #sidebar {
    overflow: hidden;
    animation-name: sidebar-done;
    animation-duration: 2s;
    width: 0px;
    white-space: nowrap;
  }
}
</style>
