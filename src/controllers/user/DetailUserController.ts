import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";



export class DetailUserController {

  async handle(request: Request, response: Response) {

    const user_id = request.user_id

    const detailUser = new DetailUserService();
    
    const result = await detailUser.execute(user_id);


    return response.json(result)


  }


}