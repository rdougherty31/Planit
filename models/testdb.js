module.exports = function (sequelize, DataTypes) {
    var Test123 = sequelize.define("Test123", {
      testName: DataTypes.STRING,
      testNumber: DataTypes.INTEGER
    });  
    Test123.create({ testName: "test123", testNumber: 123 }).then(() => console.log("new test created")).catch(err=>console.log(err));
    return Test123;
  };