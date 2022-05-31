import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({

  routes: [
    {
      path: "/",
      alias: "/postLists",
      name: "postLists",
      component: () => import("./components/PostsList.vue")
    },
    {
      path: "/comments/:id",
      name: "comments-details",
      component: () => import("./components/Comment.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddPosts.vue")
    }
  ]
});
