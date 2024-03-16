import { PrismaClient } from "@prisma/client"
import prismaClient from "../../prisma"
import { compare } from "bcryptjs"
import {sign} from 'jsonwebtoken'



interface UserRequest {
  email: string
  password: string
  res: any
}

export class AuthUserService {

  async execute({email, password, res}: UserRequest) {

    const user = await prismaClient.user.findFirst({
      where: {
        email
      }
    });

    if(!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      return res.status(401).json({error: "the password is incorrect"})
    }

    console.log(email, password)


    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return res.status(200).json({

      id: user.id,
      name: user.name,
      email: user.email,
      token : token

    });
  }

}

