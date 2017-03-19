'use strict'

var Model = require('../models')

let Answer = {}

Answer.getAnswers = (req, res, next) => {
  Model.Answer.findAll().then((answers) => {
    res.send(answers)
  })
}

Answer.getAnswerById = (req, res, next) => {
  Model.Answer.findById(req.params.id).then((Answer) => {
    res.send(Answer)
  })
}

Answer.createAnswer = (req, res, next) => {
  let dataAnswer = {
    fullname: req.body.fullname,
    Answername: req.body.Answername,
    email: req.body.email,
    password: req.body.password
  }

  Model.Answer.create(dataAnswer).then((Answer) => {
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
