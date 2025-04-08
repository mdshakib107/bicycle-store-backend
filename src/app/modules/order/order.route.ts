import express from "express"
import { OrderControllers } from "./order.controller"
import validateRequest from "../../middlewares/validateRequest"
import { OrderValidation } from "./order.validation"

const router = express.Router()

router.post('/create-order',validateRequest(OrderValidation.orderValidationSchema), OrderControllers.createOrder)

export const orderRoutes = router