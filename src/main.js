// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入router路由
import Router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
// 使用router
// 实例化路由
// 创建和挂载根实例
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: Router,
  template: '<App></App>',
  components: {App}
})
