import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";



interface Payload {
  sub: string
}

/**
 * Function to check if the user is authenticated based on the request headers.
 *
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {NextFunction} next - The next function
 * @return {void}
 */

export function isAuth(req: Request, res: Response, next: NextFunction) {

  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).json({
      errorCode: "token.invalid"
    }).end();
  };

  const [, token] = authToken.split(" ")

  try {

    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    return next();
     
    
  } catch (error) {
    
    return res.status(401).json({
      errorCode: "token.expired"
    }).end();
  }


  
}