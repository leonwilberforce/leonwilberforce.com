<template>
  <div class="tech-item" :style="itemStyle">
    <i :class="iconClass"></i>
    <p>{{ name }}</p>
  </div>
</template>

<script>
export default {
  name: "TechnologyStack",
  props: {
    name: String,
    iconClass: String,
    colour: String
  },
  computed: {
    itemStyle() {
      return {
        "--color": this.colour
      };
    }
  }
};
</script>

<style scoped>
.tech-item {
  font-size: 50px;
  margin: 20px 80px;
  color: #eaf1ffd0;
}
.tech-item i {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.tech-item:hover i {
  color: var(--color);
}
.tech-item:hover p {
  color: #fff;
}
</style>
