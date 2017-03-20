<template>
    <div class="container">
      <div class="hellobox">
      <h3>Join the Mentock Overflow Community</h3>
      <hr>
      tack Overflow is a community of 6.9 million programmers, just like you, helping each other.
      <br/>
      Join them; it only takes a minute:
      <br>
      <button class="btn btn-info" style="margin-top:20px; margin-left:20px;">Sign Up</button>
    </div>
    <list-question></list-question>
  </div>
</template>

<script>

import ListQuestion from './ListQuestion'

export default {
  name: 'hellobox',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    ListQuestion
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
