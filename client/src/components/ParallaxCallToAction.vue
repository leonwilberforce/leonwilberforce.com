<template>
  <div id="parallax-call-to-action" class="vertical-center" :style="{ height: height }">
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
import $ from "jquery";

const handleScroll = () => {
  var st = $(window).scrollTop();
  $("#parallax-call-to-action").css("background-position-y", -st / 20 + "px");
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
  background-image: url("@./../../assets/images/background-image.webp");
  height: 700px;
  max-height: 100vh;
  width: 100%;
  background-position: top;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  color: white;
  background-size: cover;
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

/* Medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  #parallax-call-to-action {
    background-attachment: fixed;
  }
}
</style>
