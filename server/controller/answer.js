'use strict'

var Model = require('../models')

let Answer = {}

Answer.getAnswers = (req, res, next) => {
  Model.Answer.findAll({include: [{model: Model.Question}, {model: Model.Vote, include: {model: Model.User}}]}).then((answers) => {
    res.send(answers)
  })
}

Answer.getAnswerById = (req, res, next) => {
  Model.Answer.findById(req.params.id).then((Answer) => {
    res.send(Answer)
  })
}

Answer.createAnswer = (req, res, next) => {
  Model.Answer.create({
    answer: req.body.answer,
    QuestionId: req.body.QuestionId,
    UserId: req.body.UserId
  }).then((Answer) => {
    res.send(Answer)
  })
}

Answer.updateAnswer = (req, res, next) => {
  Model.Answer.update({where: {id: req.params.id }}).then((Answer) => {
    res.send(Answer)
  })
}

Answer.removeAnswer = (req, res, next) => {
  Model.Answer.destroy({where: {id: req.params.id}}).then((result) => {
    res.send(result)
  })
}

module.exports = Answer
