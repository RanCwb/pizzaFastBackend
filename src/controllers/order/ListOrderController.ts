import { Request, Response } from "express";
import { LisOrderService } from "../../services/order/ListOrderServer";


class ListOrderController {

  async handle(req: Request, res: Response) {
    
    const listOrderService = new LisOrderService();

    const orders = await listOrderService.execute();

    return res.json(orders);
  }
}

export { ListOrderController }