import { Product } from "../models/product";

export async function getAll() {
    return Product.findAll({
        attributes: ["id", "name", "company_id", "price", "stock"]
    });
};

