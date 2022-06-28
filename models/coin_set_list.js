const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coin_set_list', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    symbol: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price_usd: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    change_usd_24h: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    currencyIndex: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    upperLimitValue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lowerLimitValue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    update_dt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coin_set_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
