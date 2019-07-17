module.exports = function (sequelize, DataTypes) {
  var Author = sequelize.define("Author", {
    name: DataTypes.STRING
  }, 
  // {timestamps: false}
  );

  // Author.associate = function (models) {
  //   Author.hasMany(models.Post, {
  //     onDelete: "cascade"
  //   });
  //   Author.belongsTo(models.postAuthor, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // }
  
  return Author;
};