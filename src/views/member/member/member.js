import Vue from "vue";
import App from "./memberApp";
import VueRouter from "vue-router";

require("static/js/mock.js"); //模拟数据

import Member from "./memberApp";
import Login from "./loginApp";
import Sign from "./signApp";

const routes = [
  { path: "/member", component: Member },
  { path: "/login", component: Login },
  { path: "/sign", component: Sign},
  { path: "/", redirect: "/member" }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
