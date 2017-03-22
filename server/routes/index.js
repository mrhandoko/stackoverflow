var express = require('express')
var router = express.Router()
var User = require('../controller/user')
var Answer = require('../controller/answer')
var Question = require('../controller/question')
var Register = require('../controller/register')
var Vote = require('../controller/vote')

/* GET home page. */
router.get('/users', User.getUsers)
router.get('/user/:id', User.getUserById)
// Register User here
router.post('/user', User.registerUser)
router.put('/user:id', User.updateUser)
router.delete('/user:id', User.removeUser)

router.get('/answers', Answer.getAnswers)
router.get('/answer/:id', Answer.getAnswerById)
router.post('/answer', Answer.createAnswer)
router.put('/answer:id', Answer.updateAnswer)
router.delete('/answer:id', Answer.removeAnswer)

router.post('/vote', Vote.createVote)
router.delete('/vote/:UserId/:AnswerId', Vote.removeVote)

// Login Process
router.post('/login', Register.login)
router.get('/verify/:token', Register.verify)

router.get('/questions', Question.getQuestions)
router.get('/question/:id', Question.getQuestionById)
router.post('/question', Question.createQuestion)
router.put('/question:id', Question.updateQuestion)
router.delete('/question:id', Question.removeQuestion)

module.exports = router
