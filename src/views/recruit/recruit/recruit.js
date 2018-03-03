import Vue from "vue"
import App from "./indexApp";
import Recruit from "./recruitApp";
import Search from "./searchApp";
import VueRouter from "vue-router";

const routes = [
  { path: "/recruit", component: Recruit },
  { path: "/search", component: Search },
  { path: "/", redirect: "/recruit" }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
