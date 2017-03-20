import Vue from 'vue'
import Router from 'vue-router'
import Hellobox from '@/components/Hellobox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hellobox',
      component: Hellobox
    }
  ]
})
