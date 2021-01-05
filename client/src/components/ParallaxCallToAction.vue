<template>
  <div
    id="parallax-call-to-action"
    class="vertical-center"
    :style="{ height: height }"
  >
    <div class="container position-relative">
      <div class="row">
        <div class="col-12">
          <h1>{{ title }}</h1>
          <p class="subtitle text-center">
            <slot name="subtitle"></slot>
          </p>
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <slot name="buttons"></slot>
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
  },
  props: {
    title: String,
    height: String
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
  font-size: 25px !important;
}
</style>
