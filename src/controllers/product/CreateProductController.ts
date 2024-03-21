import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService"


class CreateProductController {


  async handle(request: Request, response: Response) {

   
    const { name, price, description, category_id } = request.body;

    const createProductService = new CreateProductService();

    if(!request.file) {
      throw new Error("File not found");

    }else{

      const { originalname, filename: banner } = request.file

      console.log(originalname)

      const product = await createProductService.execute({
        name,
        price,
        banner,
        description,
        category_id
      });
    
    return response.json(product);
  
    }


  }


}

export { CreateProductController }