<template>
  <div>
    <h3 class="question">Top Questions</h3>
    <div v-for="question in questions">
      <div class="question">
        <div style="vertical-align: top;float: left;margin-right: 10px;margin-top: 0px;margin-bottom: 10px;">
          <div class="votes">
              <center>
                <div class="mini-counts"><span title="0 votes">{{ question.Answers.length }}</span></div>
                <div>answers</div>
              </center>
          </div>
        </div>
        <div class="summary"><a href="">{{ question.title }}</a></div>
      </div>
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
  text-align: left;
  border-bottom: 1px solid #e4e6e8;
  padding-top: 12px;
  padding-bottom: 23px;
}
.votes {
  display: inline-block;
  height: 38px;
  min-width: 38px;
  margin: 0 3px 0 0;
  font-size: 12px;
  color: #848d95;
  padding: 5px 5px 6px 5px;
}
.mini-count{
  font-size: 17px;
  font-weight: 300;
  color: #6a737c;
  margin-bottom: 4px;
}

.summary {
  font-size: 18px;
  display: inline-block;
}
</style>
