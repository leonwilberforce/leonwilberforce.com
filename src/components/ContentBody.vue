<template>
  <div id="right" class="column">
    <NavBar />

    <div class="bottom content">
      <div class="container">
        <router-view />
      </div>
      <footer>
        <span>&copy; Leon Wilberforce 2018-2020</span>
        <div class="social-media">
          <ul>
            <!-- <li><a id="rss" class="fa fa-rss-square" aria-hidden="true" href="#"></a></li> -->
            <li>
              <a
                id="twitter"
                class="fa fa-twitter-square"
                aria-hidden="true"
                href="https://twitter.com/leonwilberforce"
              ></a>
            </li>
            <li>
              <a
                id="linkedin"
                class="fa fa-linkedin-square"
                aria-hidden="true"
                href="https://www.linkedin.com/in/leon-wilberforce/"
              ></a>
            </li>
            <li>
              <a
                id="github"
                class="fa fa-github-square"
                aria-hidden="true"
                href="https://github.com/leonwilberforce"
              ></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "ContentBody",
  components: {
    NavBar
  }
};
</script>

<style scoped></style>
