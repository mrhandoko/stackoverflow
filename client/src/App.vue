<template>
  <div id="app">
    <navbar></navbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'app',
  data () {
    return {
      message: 'Mentockoverflow'
    }
  },
  components: {
    'navbar': Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
