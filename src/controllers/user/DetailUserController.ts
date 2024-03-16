import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";



export class DetailUserController {

  async handle(request: Request, response: Response) {


    const detailUser = new DetailUserService();
    
    const result = await detailUser.execute();


    return response.json(result)


  }


}