import {  z } from "zod"
import { Status } from "./order.constant"

const orderedItemValidationSchema = z.object({
    product: z.string(),
    quantity: z.number(),
    price: z.number()
})


const orderValidationSchema = z.object({
body: z.object({
    products: z.array(orderedItemValidationSchema),
    user: z.string(),
    totalPrice: z.number(),
    status:z.enum([...Status] as [string, ...string[]]),
    isDeleted: z.boolean()
})
})



export const OrderValidation = {orderValidationSchema}