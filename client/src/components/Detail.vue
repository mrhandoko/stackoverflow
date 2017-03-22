<template lang="html">
  <div class="col-xs-9">
    <h3 class="question">{{ questionDetail.title }}</h3>
    <div>
      <div class="question">
        <div style="vertical-align: top;float: left;margin-right: 10px;margin-top: 0px;margin-bottom: 10px;">
        </div>
        <div class="summary"> {{ questionDetail.content }} </div>
      </div>
      <div class = "answer-box">
        <textarea v-model="dataAnswer.answer" cols="75" rows="12"></textarea>
        <br />
        <button v-on:click="onSubmitAnswer">Submit</button>
      </div>
      <div class="answers">
        <div class="answer" v-for="data in questionDetail.Answers">
          {{ data.answer }}
        <div class="votes" >
          {{ data.Votes.length }}
          <span>Votes</span>
        </div>
        <div><button v-on:click="onUpvote(data.id)" >Upvote</button><button v-on:click="onDownvote(data.id)">Downvote</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      voteLength: '',
      dataAnswer: {
        answer: '',
        QuestionId: '',
        UserId: ''
      },
      questionDetail: '',
      vote: {
        UserId: '',
        AnswerId: ''
      }
    }
  },
  methods: {
    getToken() {
      let self = this
      let token  = JSON.parse(localStorage.getItem("token"))
      axios.get('http://localhost:3000/api/verify/' + token).then((response) => {
        if (!response.data.user) {
          window.location = 'http://localhost:8080/#/login'
        } else {
          self.getDetail()
        }
      })
    },
    getDetail () {
      let self = this
      console.log('jalan');
      axios.get('http://localhost:3000/api/question/' + this.id).then((response) => {
        self.questionDetail  = response.data
        console.log(self.questionDetail);
        self.dataAnswer.UserId = self.questionDetail.User.id
        self.dataAnswer.QuestionId = self.questionDetail.id
      })
    },
    onSubmitAnswer () {
      console.log(this.dataAnswer);
      let self = this
      axios.post('http://localhost:3000/api/answer/', self.dataAnswer).then((response) => {
        self.dataAnswer.answer = ''
        self.getDetail()
      })
    },
    onUpvote (AnswerId) {
      let self = this
      self.vote.UserId = self.dataAnswer.UserId
      self.vote.AnswerId = AnswerId
      console.log('User Id : ' + self.vote.UserId);
      console.log('Answer Id : ' + self.vote.AnswerId);
      axios.post('http://localhost:3000/api/vote', self.vote).then((response) => {
        self.getDetail()
      })
    },
    onDownvote (AnswerId) {
      let self = this
      self.vote.UserId = self.dataAnswer.UserId
      self.vote.AnswerId = AnswerId
      console.log('User Id : ' + self.vote.UserId);
      console.log('Answer Id : ' + self.vote.AnswerId);
      axios.delete('http://localhost:3000/api/vote/'+ self.questionDetail.UserId + '/' + AnswerId).then((response) => {
        console.log('downvote');
        // self.getDetail()
      })
    }
  },
  mounted() {
    this.getToken(),
    this.getDetail()
  }
}
</script>

<style lang="css">
.answers {
  text-align: left;
  margin-top: 20px;
}

.answer-box {
  text-align: left;
}

.answer {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e4e6e8;
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
