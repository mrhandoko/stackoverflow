'use strict'
module.exports = function (sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    answer: DataTypes.STRING,
    QuestionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  })
  return Answer
}
