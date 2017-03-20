<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <header>Ini Header</header>
    <router-view></router-view>
    <footer>Ini Footer</footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
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
