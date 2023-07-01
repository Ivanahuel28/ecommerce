import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getAll } from "../services/productservice";

const getProducts = async (req: Request, res: Response) => {
    try {
        res.json(await getAll());
    } catch (error) {
        handleHttp(res, "ERROR on products findAll()");
    }
}

export { getProducts };