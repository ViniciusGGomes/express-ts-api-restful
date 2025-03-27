import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

export class ProductsControllers {
  /**
   * index - GET para listar vários registros
   * show - GET para exibir um registro especifico
   * create - POST para criar um registro
   * update - PUT para atualizar um registro.
   * remove - DELETE para deletar um registro
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    throw new AppError("Erro ao listar os produtos", 500);

    response.send(`Pagina ${page} de ${limit}`);
  }

  /**
   * 400 (Bad Request): Erro do cliente
   * 500 (Internal Server Error): Erro interno do servidor
   */

  create(request: Request, response: Response) {
    const { name, price } = request.body;

    if (!name) {
      throw new AppError("Nome do produto é obrigatório");
    }

    if (name.trim().length < 6) {
      throw new AppError("Nome do produto precisa ter pelo menos 6 caracteres");
    }

    if (!price) {
      throw new AppError("Preço do produto é obrigatório");
    }

    if (price < 0) {
      throw new AppError("Preço do produto não pode seer menor do que zero");
    }

    // throw new Error("Erro ao tentar criar um produto");
    // throw new AppError("Erro ao tentar criar um produto");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}
