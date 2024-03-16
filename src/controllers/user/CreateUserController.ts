import  { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

 class CreateUserController {
  async handle(request: Request, response: Response) {

   
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const result = await createUser.execute({
      name,
      email,
      password,
      res: response
    })

    return response.json(result)


  }
}
export { CreateUserController }