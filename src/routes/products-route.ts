import { Router } from "express";
import { MyMiddleware } from "../middlewares/MyMiddleware";

export const productsRouter = Router();

productsRouter.get("/:id", (request, response) => {
  const { id } = request.params;
  const { page, limit } = request.query;

  response.send(`Pagina ${page} de ${limit} - ID ${id}`);
});

productsRouter.post("/", MyMiddleware, (request, response) => {
  const { name, price } = request.body;

  response.status(201).json({ name, price, user_id: request.user_id });
});
