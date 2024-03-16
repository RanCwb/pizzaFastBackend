import { Response, Request } from "express";
import { AuthUserService } from "../../services/user/AuthUserService";

 class AuthUserController {

  async handle(request: Request, response: Response) {


    const { email, password } = request.body;

    const authUser = new AuthUserService();

    const result = await authUser.execute({
      email,
      password,
      res: response
    });

    return response.json(result)
  }

}
// meetJwt
export { AuthUserController } 

