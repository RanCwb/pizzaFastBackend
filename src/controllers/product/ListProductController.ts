import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";



class ListProductController {


  async handle(request: Request, response: Response) {

    
    const category_id = request.query.category_id as string;

    const listProductService = new ListProductService();

    const products = await listProductService.execute({category_id});

    return response.json(products);
    
  }


}

export { ListProductController }