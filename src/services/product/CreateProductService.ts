import prismaClient from "../../prisma";


interface ProductRequest {

  name: string;
  price: string;
  banner: any;
  description: string;
  category_id: string;

}


class CreateProductService {

  async execute({name, price, description, category_id, banner}: ProductRequest) {
    const product = await prismaClient.product.create({
      data: {
        name,
        banner,
        price,
        description,
        category_id
      }
    })
    return product;
  }

  

}

export { CreateProductService }