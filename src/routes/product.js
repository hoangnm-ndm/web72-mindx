import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/Product";
import { Router } from "express";

const routerProduct = Router();

routerProduct.get("/", getAllProducts);
routerProduct.post("/", createProduct);
routerProduct.put("/:id", updateProduct);
routerProduct.delete("/:id", deleteProduct);

export default routerProduct;
