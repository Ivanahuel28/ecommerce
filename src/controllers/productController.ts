import { Request, Response } from "express";
import { Product } from "../models/Product";
import { handleHttp } from "../utils/error.handle";

export async function getProducts({params}: Request, res: Response) {
    try {
        const products = await Product.findAll({
            attributes: ["id", "name", "company_id", "price", "stock"]
        });
        res.json(products);
    } catch (error) {
        handleHttp(res, "ERROR on products findAll()");
    }
}