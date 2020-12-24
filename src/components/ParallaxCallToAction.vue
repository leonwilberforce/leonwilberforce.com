<template>
  <div id="parallax-call-to-action" class="jumbotron vertical-center">
    <div class="container position-relative">
      <div class="row">
        <div class="col-12">
          <h1>Leon Wilberforce</h1>
          <p class="text-center">
            Student - Computer Science - Teesside University
          </p>
        </div>
      </div>
      <div class="row mt-3 justify-content-md-center">
        <div class="col-2 text-right">
          <a
            href="https://twitter.com/LeonWilberforce"
            class="btn btn-lg btn-outline-secondary"
          >
            <i class="fab fa-twitter"></i> Twitter</a
          >
        </div>
        <div class="col-2 text-center">
          <a
            href="https://github.com/leonwilberforce"
            class="btn btn-lg btn-secondary"
          >
            <i class="fab fa-github"></i> Github</a
          >
        </div>
        <div class="col-2 text-left">
          <a
            href="https://www.linkedin.com/in/leon-wilberforce/"
            class="btn btn-lg btn-outline-secondary"
          >
            <i class="fab fa-linkedin-in"></i> LinkedIn</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const handleScroll = () => {
  var st = $(window).scrollTop();
  $("#parallax-call-to-action").css(
    "background-position-y",
    -1200 + -st / 20 + "px"
  );
  $("#parallax-call-to-action .container").css("top", st / 20 + "px");
};

export default {
  name: "ParallaxCallToAction",
  mounted() {
    document.addEventListener("scroll", handleScroll);
  }
};
</script>

<style scoped>
#parallax-call-to-action {
  background-image: url("@./../../assets/images/2.png");
  height: 700px;
  max-height: 100vh;
  width: 100%;
  background-position: center;
  background-position-y: -1200px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  color: white;
}
.vertical-center {
  /* min-height: 100%;
  min-height: 100vh; */
  height: 700px;

  display: flex;
  align-items: center;
}

#left-button {
  text-align: right;
}

#right-button {
  text-align: left;
}

p {
  font-size: 25px;
}
</style>
