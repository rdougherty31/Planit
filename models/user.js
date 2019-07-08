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
        allowNull: false
      },
      nature: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      histSites: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      food: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      museums: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      fineArts: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      music: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      festivals: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      nightlife: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      locals: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    User.create({ username: "user123", pword: "pword123", outdoors: true, nature: true, histSites: false, food: true, museums: false, fineArts: true, music: true, festivals: false, nightlife: true, locals: true }).then(user => {
        console.log("new user created");
    });
    User.create({ username: "user456", pword: "pword456", outdoors: false, nature: true, histSites: true, food: true, museums: false, fineArts: true, music: false, festivals: false, nightlife: false, locals: true }).then(user => {
      console.log("new user created");
  });

    return User;
  };
  