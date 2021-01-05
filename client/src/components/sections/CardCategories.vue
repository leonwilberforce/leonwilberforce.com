<template>
  <div id="card-categories">
      <div class="row justify-content-center">
        <div class="col-12 category-list text-center">
          <a role="button" @click="categoryChanged(category)" v-for="category in categories" :key="category" :id="'category-' + category.id" class="badge badge-pill badge-category mt-1">{{ category.title }}</a>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: "CardCategories",
  emits: ['category-changed'],
  props: {
    categories: Object,
    selectedCategory: String
  },
  data(){
    return {
      selected: this.selectedCategory
    }
  },
  mounted() {
     $("a#category-" + this.selected).addClass("badge-selected");
  },
  methods: {
    categoryChanged(category) {
      $("a#category-" + this.selected).removeClass("badge-selected");
      $("a#category-" + category.id).addClass("badge-selected");

      this.selected = category.id;

      this.$emit('category-changed', category)
    }
  }
};
</script>

<style scoped>
.category-list .badge-category {
  padding: 10px 20px;
  margin: 0 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.category-list .badge-category {
  border: 1px black solid;
  color: black;
}

.category-list .badge-category:hover {
  background-color: #66799e28;
  border: 1px rgb(100, 100, 100) solid;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.category-list .badge-selected {
  padding: 10px 20px;
  background-color: #4f5d79;
  color: white;
  border: none;
}

.category-list .badge-selected:hover {
  background-color: #66799e28;
  border: none;
  background-color: #4f5d79;
}
</style>
