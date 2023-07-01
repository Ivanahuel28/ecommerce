import { Router, Request, Response } from "express";
import { getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);

export { router };