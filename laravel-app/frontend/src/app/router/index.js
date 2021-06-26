import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import home from "../components/home.vue";
import NotFound from "../components/NotFound.vue";
import list from "../components/list.vue";
import add from "../components/add.vue";
import edit from "../components/edit.vue";
import search from "../components/search.vue";
import dm from "../components/dm.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "*",
    component: NotFound
  },
  {
    path: "/tweet",
    name: "list",
    component: list
  },
  {
    path: "/tweet/add",
    name: "add",
    component: add
  },
  {
    path: "/tweet/:id/edit",
    name: "edit",
    component: edit
  },
  {
    path: "/search",
    name: "search",
    component: search
  },
  {
    path: "/dm",
    name: "dm",
    component: dm
  }
]

const router = new VueRouter({
  mode: 'history',
  // // base: process.env.BASE_URL,
  // base: '/',
  routes
})

export default router
