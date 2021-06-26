import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import index from "../components/index.vue";
import add from "../components/add.vue";
import edit from "../components/edit.vue";

const routes = [
  {
    path: "/books",
    name: "index",
    component: index
  },
  {
    path: "/books/add",
    name: "add",
    component: add
  },
  {
    path: "/books/:id/edit",
    name: "edit",
    component: edit
  }
]

const router = new VueRouter({
  mode: 'history',
  // // base: process.env.BASE_URL,
  // base: '/',
  routes
})

export default router
