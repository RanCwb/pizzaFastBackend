import prismaClient from "../../prisma";

interface AddItemRequest {
  
  order_id: string
  product_id: string
  amount: number
}

class AddItemService {
  async execute({order_id, product_id, amount}: AddItemRequest) {

    const item = await prismaClient.item.create({
      data: {
        order_id : order_id,
        product_id: product_id,
        amount 
      }
    })

    return item;

  }

}

export {AddItemService} ;