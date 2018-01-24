import Vue from 'vue'
import Router from 'vue-router'
// 引入项目的四个模块组件
import ResearchProject from '../components/ResearchProject'
import index from '../components/index'
import Achievements from '../components/Achievements'
import employment from '../components/employment'
import consult from '../components/consult'
import news from '../components/news'
import contactUs from '../components/contactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/home',
      component: index
    },
    {
      path: '/ResearchProject',
      component: ResearchProject
    },
    {
      path: '/Achievements',
      component: Achievements
    },
    {
      path: '/employment',
      component: employment
    },
    {
      path: '/consult',
      component: consult
    },
    {
      path: '/news',
      component: news
    },
    {
      path: '/contactUs',
      component: contactUs
    }
  ]
})
