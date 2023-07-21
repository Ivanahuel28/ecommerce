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

const getById = async ({params}: Request, res: Response ) => {
    try {
        // const req1 = params.id;
        res.json( await Product.findAll({
            attributes: ["id", "name", "company_id", "price", "stock"],
            where: {
                code: params.id
            }
        }));
    } catch (error) {
        handleHttp(res, "ERROR on products getById()");
    }
}

const createProduct = async ({body}: Request, res: Response) => {

    try {
        res.json( await Product.create(
            {
                code: body.code,
                name: body.name,
                company_id: body.company_id,
                price: body.type,
                stock: body.stock
            }
        ));
    } catch ( error ) {
        handleHttp(res, "ERROR on products createProduct()", error);
    }
}

const removeByCode = async ({params}: Request, res: Response) => {
    try {
        res.json( await Product.destroy({
            where: {
                code: params.code
            }
        }));
    } catch ( error ) {
        handleHttp(res, "ERROR on products createProduct()", error);
    }
}

const updateByCode = async ({params, body}: Request, res: Response) => {
    try {
        res.json( await Product.update(
            {
                name: body.name,
                company_id: body.company_id,
                price: body.type,
                stock: body.stock
            }
            ,{
            where: {
                code: params.code
            }
        }));
    } catch ( error ) {
        handleHttp(res, "ERROR on products createProduct()", error);
    }
}

export { getProducts, getById, createProduct, removeByCode, updateByCode };