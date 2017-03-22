'use strict'

var Model = require('../models')

let Vote = {}

Vote.createVote = (req, res, next) => {
  Model.Vote.create({
    UserId: req.body.UserId,
    AnswerId: req.body.AnswerId
  }).then((vote) => {
    res.send(vote)
  })
}

Vote.removeVote = (req, res, next) => {
  Model.Vote.destroy({ where : {
    UserId: req.params.UserId,
    AnswerId: req.params.AnswerId
  }})
  .then((vote) => {
    res.send(vote)
  })
}

module.exports = Vote
