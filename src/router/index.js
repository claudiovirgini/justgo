import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/Home'
import ResultView from '@/components/Result'
import CountryView from '@/components/Country'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/result',
      name: 'Result',
      component: ResultView
    },
    {
      path: '/country',
      name: 'Country',
      component: CountryView
    }
  ],
  mode: 'history'
})
