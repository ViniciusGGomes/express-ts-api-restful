import { Router } from "express";
import { productsRouter } from "./productsRoute";

const routes = Router();

routes.use("/products", productsRouter);

export { routes };
