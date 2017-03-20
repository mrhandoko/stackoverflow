<template>
  <div>
    <h3 class="question">Top Questions</h3>
    <div v-for="question in questions">
      <div class="question"><a href="">{{ question.title }}</a></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        questions: []
      }
    },
    methods: {
      getData() {
        var self = this
        axios.get('http://localhost:3000/api/questions').then((response) => {
          console.log(response.data);
          self.questions = response.data;
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>
h2, h3, h4 {
  text-align: left;
}
.question {
  font-size: 18px;
  text-align: left;
  padding: 12px 0 10px 0;
  border-bottom: 1px solid #e4e6e8;
}
</style>
