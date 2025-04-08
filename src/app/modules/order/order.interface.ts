import { Types } from "mongoose"


export type TStatus = 'PENDING' | 'PROCESSING' | 'ON THE WAY' | 'DELIVERED' | 'CANCELED'

export type TOrderedItem = {
    product: Types.ObjectId,
    quantity: number,
    price: number
}

export type TOrder = {
    products: TOrderedItem[],
    user: Types.ObjectId,
    totalPrice: number,
    isDeleted?: boolean,
    status: TStatus
}