var DataTypes = require("sequelize").DataTypes;
var _coin_data = require("./coin_data");
var _coin_set_list = require("./coin_set_list");

function initModels(sequelize) {
  var coin_data = _coin_data(sequelize, DataTypes);
  var coin_set_list = _coin_set_list(sequelize, DataTypes);


  return {
    coin_data,
    coin_set_list,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
