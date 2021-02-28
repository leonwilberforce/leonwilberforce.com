import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Blog from "../views/Blog.vue";
import BlogPost from "../views/BlogPost.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    }
  },
  // {
  //   path: "/blog",
  //   name: "Blog",
  //   component: Blog,
  //   meta: {
  //     title: "Blog"
  //   }
  // },
  {
    path: "/blog/:url",
    name: "BlogPost",
    props: true,
    component: BlogPost
  },
  { path: '/:catchAll(.*)', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    } else {
      return { top: 0 };
    }
  }
});

export default router;
