import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";



 class CreateCategoryController{

    async handle(request: Request, response: Response) {

      const { name } = request.body

      const CreateCategoryControlle = new CreateCategoryService();


      const result = await CreateCategoryControlle.execute( request.body );


      return response.json(result)


    }

}

export { CreateCategoryController } 