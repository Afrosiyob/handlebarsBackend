const { sequelizeDB } = require("../../connection/connectionPostgres");
const { DataTypes } = require("sequelize");

// User model
const User = sequelizeDB.define(
    "User", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: "user",
        },
    }, {
        timestamps: true,
        freezeTableName: true,
    }
);

module.exports = {
    User,
};