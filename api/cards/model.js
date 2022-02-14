const { use } = require("express/lib/application");
const { define, DataTypes } = require("sequelize");
const cardModel = define("CARD", {
    card_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    pin: { type: DataTypes.INTEGER, allowNull: false },
    balance: { type: DataTypes.DOUBLE },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: userModel,
            key: "user_id",
        },
    },
});

module.exports = cardModel;