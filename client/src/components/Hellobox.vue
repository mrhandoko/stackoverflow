<template>
    <div class="container">
      <div class="hellobox">
      <h4>Join the Mentock Overflow Community</h4>
      <hr>
      tack Overflow is a community of 6.9 million programmers, just like you, helping each other.
      <br/>
      Join them; it only takes a minute:
      <br>
      <a class="btn btn-info" style="margin-top:20px; margin-left:20px; color:white;" href="/#/register">Sign Up</a>
    </div>
    <list-question></list-question>
    <sidebar></sidebar>
  </div>
</template>

<script>

import ListQuestion from './ListQuestion'
import Sidebar from './Sidebar'

export default {
  name: 'hellobox',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ListQuestion,
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hellobox {
  padding-top: 20px;
  padding-bottom: 20px;
  background-image: url('https://cdn.sstatic.net/img/so-hero-alt-splash.svg');
  background-color: #f7f9fc;
}
h1, h2 {
  font-weight: normal;
}

hr {
  background-color: orange;
  padding: 2px;
  margin-left: 48%;
  margin-right: 48%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
