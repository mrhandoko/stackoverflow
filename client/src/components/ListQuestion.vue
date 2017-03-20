<template>
  <table>
    <thead>
      <tr>
        <th>question</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="question in questions">
        <td>{{ question.title }}</td>
      </tr>
    </tbody>
  </table>
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
</style>
