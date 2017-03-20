'use strict'
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        User.hasMany(models.Question)
        User.hasMany(models.Answer)
        User.hasMany(models.Vote)
      }
    }
  })
  return User
}
