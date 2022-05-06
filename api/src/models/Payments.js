const { DataTypes, UniqueConstraintError } = require("sequelize");
const data = require("../productList");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Payment", {
    name: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.TEXT,
    },
    size: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    quantity: {
      type: DataTypes.FLOAT,
    },
    total_paid_amount: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
    },
    status_detail: {
      type: DataTypes.STRING,
    },
    status_delivery: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    }
    /* id_user: {
        type: DataTypes.INTEGER
    } */
  });
};
