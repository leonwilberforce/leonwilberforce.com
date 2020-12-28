<template>
  <footer class="p-3 m-0">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 text-center">
          <p class="m-0">&copy; Leon Wilberforce 2018-2020</p>
          <div class="social-media">
            <a href="https://twitter.com/LeonWilberforce" id="twitter"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="https://github.com/leonwilberforce" id="github"
              ><i class="fab fa-github"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/leon-wilberforce/"
              id="linkedin"
              ><i class="fab fa-linkedin-in"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
footer {
  color: #fff;
}

.social-media a {
  margin: 20px;
  font-size: 26px;
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
</style>
