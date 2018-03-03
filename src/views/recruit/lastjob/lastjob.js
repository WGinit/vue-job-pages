import Vue from "vue";
import VueRouter from "vue-router";
import App from "./lastjobApp";
import Recruit from "../recruit/recruitApp";


const routes = [
  { path: "/recruit", component: Recruit }
];


Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
