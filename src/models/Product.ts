import { DataTypes } from "sequelize";
import { sequelize } from "../config/postgres"

export const Product = sequelize.define(
    "products",
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
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
    }
)