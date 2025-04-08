import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrderIntoDB = async (payload: TOrder) => {
    const result = await Order.create(payload)
    return result
}
const getAllOrdersFromDB=async () => {}
const updateOrderIntoDB= async () => {}
const deleteOrderIntoDB= async ()=> {}


export const OrderService = {getAllOrdersFromDB,
    createOrderIntoDB,
    updateOrderIntoDB,
    deleteOrderIntoDB
}