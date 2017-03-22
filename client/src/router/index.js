import Vue from 'vue'
import Router from 'vue-router'
import Hellobox from '@/components/Hellobox'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Question from '@/components/Question'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hellobox',
      component: Hellobox
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/askaquestion',
      name: 'Question',
      component: Question
    }, {
      path:'/detail/:id',
      name: 'Detail',
      props: true,
      component: Detail
    }
  ]
})
