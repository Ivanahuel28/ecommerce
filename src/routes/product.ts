import { Router } from "express";
import { 
    getProducts,
    getById, 
    createProduct, 
    removeByCode,
    updateByCode } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getById);
router.put("/", createProduct);
router.delete("/:code", removeByCode);
router.post("/:code", updateByCode );

export { router };