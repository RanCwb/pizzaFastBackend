import prismaClient from "../../prisma";


interface ProductRequest {

  table: number;
  name : string;
}


class CreateOrderService {


  async execute({ table, name}: ProductRequest) {

    if(!table || !name) {
      throw new Error("Table and name are required");
    }
    
    const order = await prismaClient.order.create({
      data: {
        table: table,
        name : name
      },
     })
    return order
  }

}

export { CreateOrderService }