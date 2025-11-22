/*
Enrutamiento para los productos... 
*/ 
import express from "express"

import {
    getAllProductsControllers,
    getProductByIdControllers,
    postProductsControllers,
    deleteproductControllers
} from "../controllers/products.controllers.js"

const routes = express.Router();

routes.get("/products", getAllProductsControllers);
routes.get("/products/:id", getProductByIdControllers);
routes.post("/products/create", postProductsControllers)
routes.delete("/products/:id", deleteproductControllers)

export default routes