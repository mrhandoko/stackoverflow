'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {})
    */
    // var newArr = [
    //   {
    //     answer: 'Saya gak punya jawaban, tapi klo ente ga tampan minimal ente mapan cuyy..',
    //     content: '',
    //     QuestionId: 1,
    //     UserId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     answer: 'Yaelah tong, ngayal mulu. bagusan ke mesjid tuh solat, dzikir, tobat',
    //     content: '',
    //     QuestionId: 1,
    //     UserId: 2,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     answer: 'Ga tau gan.. ga pernah pacaran. Haram, bukan muhrim',
    //     content: '',
    //     QuestionId: 1,
    //     UserId: 5,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }, {
    //     answer: 'Atas ane jomblo akut, wkwkwkwkkw..',
    //     content: '',
    //     QuestionId: 1,
    //     UserId: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     answer: 'Pake ilmu the secret coba gan, lu bayangin tiap hari sampe dapet',
    //     content: '',
    //     QuestionId: 1,
    //     UserId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ]
    //
    // return queryInterface.bulkInsert('Answers', newArr)
  },
  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {})
    */
  }
}
