const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coin_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'coin_data',
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
