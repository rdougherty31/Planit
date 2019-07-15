module.exports = function(sequelize, DataTypes) {
    const Post = sequelize.define("Post", {
      country: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      startMonth: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      startDay: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      startYear: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      endMonth: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      endDay: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      endYear: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      costMin: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      costMax: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      matchedUsers: {
        type: DataTypes.STRING,
        allowNull: true
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      planned: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    });
  
    Post.associate = function(models) {
      // We're saying that a Post should belong to an Author
      // A Post can't be created without an Author due to the foreign key constraint
      Post.belongsTo(models.Author, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    // Post.create({ country: "US", city: "Philadelphia", startMonth: "11", startDay: "05", startYear: "19", endMonth: "11", endDay: "09", endYear: "19", costMin: 0, costMax: 500, matchedUsers: "match1", comments: "yay", planned: true });
    // Post.create({ country: "US", city: "Miami", startMonth: "01", startDay: "02", startYear: "20", endMonth: "01", endDay: "14", endYear: "20", costMin: 0, costMax: 300, matchedUsers: "match5", comments: "wooo", planned: false });

    return Post;
  };
  