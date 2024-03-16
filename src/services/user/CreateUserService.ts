import { PrismaClient } from "@prisma/client"
import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
  name: string
  email: string
  password: string
  res :any
}

export class CreateUserService {

  async execute({ name, email, password, res}: UserRequest) {

    if (!email) {
      return res.status(400).json({
        error: "Email is required"
      })
    }
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email
      }
    });

    if (userAlreadyExists) {
        return res.status(400).json({
            error: "User already exists"
         });
    };
    
    const passwordHash = await hash(password, 8)

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });
    return user
  }

}


