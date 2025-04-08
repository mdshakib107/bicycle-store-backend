import { TOrder } from "./order.interface"
import { Order } from "./order.model"

const createOrderIntoDB = async (payload: TOrder) => {
    const result = await Order.create(payload)
    return result
}
const getAllOrdersFromDB = async () => {
    const result = await Order.find().populate('user').populate('products.product')
    return result
}


const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {


    const status = payload.status
    const result = await Order.findByIdAndUpdate(
        id,
        { status },
        { new: true }
    )
    return result
}
const deleteOrderFromDB = async (id: string) => {

    const result = await Order.findByIdAndUpdate(id,
        { isDeleted: true },
        { new: true }
    )
    return result
}


export const OrderService = {
    getAllOrdersFromDB,
    createOrderIntoDB,
    updateOrderIntoDB,
    deleteOrderFromDB
}