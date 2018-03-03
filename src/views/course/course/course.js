import Vue from "vue"
import App from "./courseApp";
import VueRouter from "vue-router"

import Course from "./courseApp"
import Recommend from "./recommendApp"
import Boutique from "./boutiqueApp"
import Lecture from "./lectureApp"
import Talk from './talkApp'

const routes = [
  { path: "/course", component: Course },
  { path: "/recommend", component: Recommend },
  { path: "/boutique", component: Boutique },
  { path: "/lecture", component: Lecture },
  { path: "/talk", component: Talk },
  { path: "/", redirect: "/recommend" }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
