import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { Product } from "../models/product";

const getProducts = async (req: Request, res: Response) => {
    try {
        res.json(await Product.findAll({
            attributes: ["id", "name", "company_id", "price", "stock"]
        }));
    } catch (error) {
        handleHttp(res, "ERROR on products findAll()");
    }
}

const getById = async (req:Request, res: Response ) => {
    /* try {
        res.json(await getById());
    } catch (error) {
        handleHttp(res, "ERROR on products findAll()");
    } */
}

export { getProducts, getById };