import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres"

const Product = sequelize.define(
    'product',
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_id: {
            type: DataTypes.UUID,
        },
        price: {
            type: DataTypes.FLOAT
        },
        stock: {
            type: DataTypes.INTEGER
        }
    },
    {
        freezeTableName: true
    }
);

export { Product };