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
    //     title: 'Gimana cara dapetin Isyana ya guys? Saran & Kritik',
    //     content: 'Mohon dibantu dengan sepenuh hati, galau banget nih',
    //     UserId: 1,
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    //   }
    // ]
    //
    // return queryInterface.bulkInsert('Questions', newArr)
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
