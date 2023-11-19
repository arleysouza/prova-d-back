import { Request, Response } from "express";
import AppDataSource from "../data-source";
import { Number } from "../entities/Number";

class NumberController {
  async create(req: Request, res: Response) {
    try{
      const { number } = req.params;
      const value = parseInt(number);
      const register = await AppDataSource.manager.save(Number, {value});
      res.json(register);
    }
    catch(e){
      res.json({message:"Valor inválido"});
    }
  }

  async remove(req: Request, res: Response) {
    const { id } = req.params;
    const { affected: count } = await AppDataSource.manager.delete( Number, {id});
    return res.json({ count });
  }

  async list(_: Request, res: Response): Promise<Response> {
    const response = await AppDataSource.manager.find(Number);
    const sum = await AppDataSource.manager.sum(Number,"value") || 0;
    return res.json({numbers:response, sum});
  }
}

export default new NumberController();
