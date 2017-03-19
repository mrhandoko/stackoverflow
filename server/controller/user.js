'use strict'

var Model = require('../models')
const hash = require('password-hash')

let User = {}

User.getUsers = (req, res, next) => {
  Model.User.findAll().then((users) => {
    res.send(users)
  })
}

User.getUserById = (req, res, next) => {
  Model.User.findById(req.params.id).then((user) => {
    res.send(user)
  })
}

User.registerUser = (req, res, next) => {
  let hashed = hash.generate(req.body.password)

  let dataUser = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: hashed
  }

  Model.User.create(dataUser).then((user) => {
    res.json({message: 'Register Success', data: user})
  }).catch((err) => {
    if (err) {
      res.json({
        err: err
      })
    }
  })
}

User.updateUser = (req, res, next) => {
  Model.User.update({where: {id: req.params.id }}).then((user) => {
    res.send(user)
  })
}

User.removeUser = (req, res, next) => {
  Model.User.destroy({where: {id: req.params.id}}).then((result) => {
    res.send(result)
  })
}

module.exports = User
