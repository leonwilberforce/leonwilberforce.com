<template>
  <div class="not-found d-flex">
    <h1>404 Not Found</h1>
    <img id="ripped-image-1" src="@/assets/images/ripped-image-1.webp" alt="" />
    <img id="ripped-image-2" src="@/assets/images/ripped-image-2.webp" alt="" />
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>

<style scoped>
.not-found {
  min-height: calc(100vh - 101px);
  background: #4f5d79;
  align-items: center;
  justify-content: center;
  color: #ebebeb;
}

#ripped-image-1 {
  position: absolute;
  transform: rotate(5deg);
  right: 10%;
  bottom: 15%;
  width: 300px;
}

#ripped-image-2 {
  position: absolute;
  transform: rotate(-5deg);
  left: 10%;
  top: 15%;
  height: 500px;
}

@media (max-width: 991.98px) {
  #ripped-image-1 {
    width: 200px;
    bottom: 100px;
  }

  #ripped-image-2 {
    height: 250px;
    top: 10px;
  }
}
</style>
