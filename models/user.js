// const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      pword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5]
        }
      },
      outdoors: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      nature: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      histSites: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      food: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      museums: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      fineArts: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      music: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      festivals: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      nightlife: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      locals: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      }
    });
  
  //   User.create({ username: "user123", pword: "pword123", outdoors: true, nature: true, histSites: false, food: true, museums: false, fineArts: true, music: true, festivals: false, nightlife: true, locals: true }).then(user => {
  //       console.log("new user created");
  //   });
  //   User.create({ username: "user456", pword: "pword456", outdoors: false, nature: true, histSites: true, food: true, museums: false, fineArts: true, music: false, festivals: false, nightlife: false, locals: true }).then(user => {
  //     console.log("new user created");
  // });

    return User;
  };
  