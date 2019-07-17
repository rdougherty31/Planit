module.exports = function(sequelize, DataTypes) {
    const postTraveler = sequelize.define("postTraveler", {
      // Giving the Author model a name of type STRING
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER
    });
  
    // postTraveler.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   postTraveler.hasMany(models.User, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return postTraveler;
  };