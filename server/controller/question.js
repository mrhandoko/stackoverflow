'use strict'

var Model = require('../models')

let Question = {}

Question.getQuestions = (req, res, next) => {
  Model.Question.findAll({include: [{model: Model.Answer, include: [{model: Model.Vote, include: {model: Model.User}}]}, {model: Model.User}]}).then((Questions) => {
    res.send(Questions)
  })
}

Question.getQuestionById = (req, res, next) => {
  Model.Question.findById(req.params.id).then((Question) => {
    res.send(Question)
  })
}

Question.createQuestion = (req, res, next) => {
  let dataQuestion = {
    fullname: req.body.fullname,
    Questionname: req.body.Questionname,
    email: req.body.email,
    password: req.body.password
  }

  Model.Question.create(dataQuestion).then((Question) => {
    res.send(Question)
  })
}

// Question.setUserQuestion = (req, res, next) => {
//   Model.User.find({where: {username : req.params.id}})
// }

Question.updateQuestion = (req, res, next) => {
  Model.Question.update({where: {id: req.params.id }}).then((Question) => {
    res.send(Question)
  })
}

Question.removeQuestion = (req, res, next) => {
  Model.Question.destroy({where: {id: req.params.id}}).then((result) => {
    res.send(result)
  })
}

module.exports = Question
