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
    //     UserId: 2,
    //     AnswerId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     UserId: 3,
    //     AnswerId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     UserId: 4,
    //     AnswerId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }, {
    //     UserId: 5,
    //     AnswerId: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     UserId: 6,
    //     AnswerId: 4,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     UserId: 7,
    //     AnswerId: 3,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   },
    //   {
    //     UserId: 8,
    //     AnswerId: 5,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ]
    //
    // return queryInterface.bulkInsert('Votes', newArr)
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
