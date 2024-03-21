import prismaClient from "../../prisma";


  interface ProductRequest {
    category_id: string

  }

class ListProductService {


  async execute({category_id}: ProductRequest) {


    const products = await prismaClient.product.findMany({
      where: {
        category_id
      },
      select: {

        id: true,
        name: true,
        price: true,
        banner: true,
          description: true,
          category_id: true,

     }

    })    
    return products;

  }

}

export { ListProductService }