
import Vue from "vue"
import App from "./homeApp"

require("static/js/mock.js")   //模拟数据

new Vue({
  render: h => h(App)
}).$mount("#app");
