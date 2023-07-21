import { Sequelize } from "sequelize";

export const sequelize = new Sequelize (
    "postgres", // db name
    "postgres", // username
    "postgres", // password
    {
        host: "localhost",
        dialect: "postgres",
        define: {
            timestamps: false
        }
    }
);