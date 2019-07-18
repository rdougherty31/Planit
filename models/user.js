module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define("User", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 30]
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 30]
        }
      },
      pword: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 30]
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

    // User.associate = function (models) {
    //   User.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    //   // User.belongsTo(models.postTravelers, {
    //   //   foreignKey: {
    //   //     allowNull: false
    //   //   }
    //   // });
    // }

    return User;
  };
  