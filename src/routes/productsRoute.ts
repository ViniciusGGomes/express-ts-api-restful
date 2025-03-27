import { Router } from "express";
import { MyMiddleware } from "../middlewares/MyMiddleware";
import { ProductsControllers } from "../controllers/ProductsController";

const productsController = new ProductsControllers();

export const productsRouter = Router();

productsRouter.get("/", productsController.index);

productsRouter.post("/", MyMiddleware, productsController.create);
