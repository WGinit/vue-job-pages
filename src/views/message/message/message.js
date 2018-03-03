import Vue from "vue"
import App from "./messageApp";
import VueRouter from "vue-router"

require("static/js/mock.js")   //模拟数据

import Notice from "./noticeApp"
import Chat from "./chatApp"
import Job from "./jobApp"
import Interflow from "./interflowApp"
import Scan from './scanApp'

const routes = [
  { path: "/notice", component: Notice },
  { path: "/chat", component: Chat },
  { path: "/job", component: Job,
    children: [
        {path: 'interflow', component: Interflow},
        {path: 'scan', component: Scan}
    ]
  },
  { path: "/", redirect: "/notice" }
];

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
