import { Router, Request, Response } from "express";
import controller from "../controllers/NumberController";

const routes = Router();

routes.get("/list", controller.list);
routes.get("/remove/:id", controller.remove);
routes.get("/create/:number", controller.create);

//aceita qualquer método HTTP ou URL
routes.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default routes;