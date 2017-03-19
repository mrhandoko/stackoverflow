'use strict'

const Model = require('../models')
const hash = require('password-hash')
const secret = 'kukukakikakakkakekkukakukaku'
const jwt = require('jsonwebtoken')

let Register = {}

Register.login = (req, res, next) => {
  Model.User.findOne({where: {username: req.body.username}}).then((user) => {
    if (!user) {
      res.send({usernotfound: true})
    }
    if (user) {
      if (hash.verify(req.body.password, user.password)) {
        let token = jwt.sign({
          username: user.username
        }, secret, {})
        res.send({token: token})
      } else {
        res.send({passworderror: true})
      }
    }
  }).catch((err) => {
    res.send({err: err})
  })
}

Register.verify = (req, res, next) => {
  let token = req.params.token

  jwt.verify(token, secret, (err, decoded) => {
    if (decoded) {
      res.json({user: true})
    }
    if (!decoded) {
      res.json({user: false})
    }
    if (err) {
      console.log(err)
    }
  })
}

module.exports = Register
