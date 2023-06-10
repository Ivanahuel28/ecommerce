import { Request, Response} from "express";
import { handleHttp } from "../utils/error.handle";
import { QueryResult } from "pg";

import {pool} from "../config/postgres";

const getItem = async (req: Request, res: Response) => {
 try {
   const response: QueryResult = await pool.query('SELECT * FROM chau');
   console.log(response.rows)
 } catch (e) {
   console.log(e);
    handleHttp(res, 'ERROR_GET_ITEM');
 }
}

const getItems = (req: Request, res: Response) => {
    try {
       
    } catch (e) {
       handleHttp(res, 'ERROR_GET_ITEMS');
    }
}

const updateItem = (req: Request, res: Response) => {
    try {
       
    } catch (e) {
       handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

const postItem = ({body}: Request, res: Response) => {
    try {
       res.send(body);
    } catch (e) {
       handleHttp(res, 'ERROR_POST_ITEM');
    }
}

const deleteItem = (req: Request, res: Response) => {
    try {
       
    } catch (e) {
       handleHttp(res, 'ERROR_DELETE_ITEM');
    }
}

export { getItem, getItems, updateItem, postItem, deleteItem};