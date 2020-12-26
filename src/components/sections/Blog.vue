<template>
  <section id="blog">
    <h1>Articles</h1>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 category-list text-center">
          <a href="#" class="badge badge-pill badge-category badge-selected"
            >All</a
          >
          <a href="#" class="badge badge-pill badge-category mt-1">Category One</a>
          <a href="#" class="badge badge-pill badge-category mt-1">Category Two</a>
          <a href="#" class="badge badge-pill badge-category mt-1">Category Three</a>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-sm-6">
          <div class="blog-item card ">
            <div class="blog-image"></div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus eveniet perferendis quia consequuntur saepe iure
                laborum aspernatur dolore fugit, labore recusandae ad
                necessitatibus iusto accusantium delectus dicta quos hic odit.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="blog-item card ">
            <div class="blog-image"></div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus eveniet perferendis quia consequuntur saepe iure
                laborum aspernatur dolore fugit, labore recusandae ad
                necessitatibus iusto accusantium delectus dicta quos hic odit.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="blog-item card ">
            <div class="blog-image"></div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Temporibus eveniet perferendis quia consequuntur saepe iure
                laborum aspernatur dolore fugit, labore recusandae ad
                necessitatibus iusto accusantium delectus dicta quos hic odit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <a href="#" class="btn btn-lg btn-primary">View More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Blog"
};
</script>

<style scoped>
p {
  font-size: 15px;
  text-align: left;
}

.blog-image {
  background-image: url("https://via.placeholder.com/150");
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}

.blog-item {
  margin: 30px 10px;
}

.category-list .badge-category {
  padding: 10px 20px;
  margin: 0 10px;
}

.category-list .badge-category {
  border: 1px black solid;
  color: black;
}

.category-list .badge-category:hover {
  background-color: #66799e62;
  border: 1px rgb(100, 100, 100) solid;
}

.category-list .badge-selected {
  padding: 10px 20px;
  background-color: #66799e;
  color: white;
  border: none;
}

.category-list .badge-selected:hover {
  background-color: #4e5d7a;
}
</style>
