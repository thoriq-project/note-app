import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue";
import List from "../views/List.vue";
import NoteEdit from "../views/NoteEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/note",
    name: "Note",
    component: Note,
  },
  {
    path: "/noteedit/:id",
    name: "NoteEdit",
    component: NoteEdit,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
