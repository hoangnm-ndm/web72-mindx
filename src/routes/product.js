import { createProduct, getAllProducts } from "../controllers/Product";
import { Router } from "express";

const routerProduct = Router();

routerProduct.get("/", getAllProducts);
routerProduct.post("/", createProduct);

export default routerProduct;
