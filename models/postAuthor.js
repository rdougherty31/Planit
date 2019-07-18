module.exports = function(sequelize, DataTypes) {
    var postAuthor = sequelize.define("postAuthor", {
      name: DataTypes.STRING
    });
  
    // postAuthor.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   postAuthor.hasMany(models.Author, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return postAuthor;
  };