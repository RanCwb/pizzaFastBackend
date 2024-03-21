import { Request, Response } from "express";
import { SendService } from "../../services/order/SendService";

class SendController {
  async handle(req: Request, res: Response) {
    const { order_id } = req.body;
    
    const sendService = new SendService();

    const order = await sendService.execute({ order_id });

    return res.json(order);
  }
}

export { SendController };

