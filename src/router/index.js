import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import MainView from "../views/MainView.vue";
import UserView from "../views/UserView.vue";
import UserUpdate from "../views/UserUpdate.vue";
import PostView from "../views/PostView.vue";
import AddTest from "../views/AddTest.vue";
import ImageTest from "../views/ImageTest.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/userUpdate",
    name: "userUpdate",
    component: UserUpdate,
  },
  {
    path: "/post/:tag/amu",
    name: "post-amu",
    component: MainView,
  },
  {
    path: "/post/post/:id",
    name: "post",
    component: PostView,
  },
  {
    path: "/add/:src",
    name: "add",
    component: AddTest,
  },
  {
    path: "/image",
    name: "image",
    component: ImageTest,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
