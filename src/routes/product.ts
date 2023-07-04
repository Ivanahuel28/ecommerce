import { Router, Request, Response } from "express";
import { getProducts, getById } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getById);


export { router };