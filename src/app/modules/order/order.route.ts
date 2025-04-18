import express from "express"
import { OrderControllers } from "./order.controller"
import validateRequest from "../../middlewares/validateRequest"
import { OrderValidation } from "./order.validation"
import auth from "../../middlewares/auth"
import { USER_ROLE } from "../user/user.constant"

const router = express.Router()

router.post('/create-order', auth( USER_ROLE.customer), validateRequest(OrderValidation.orderValidationSchema), OrderControllers.createOrder)
router.get('/', auth(USER_ROLE.admin, USER_ROLE.customer), OrderControllers.getAllOrder)
router.patch('/:id', auth(USER_ROLE.admin), validateRequest(OrderValidation.UpdateOrderValidationSchema), OrderControllers.updateSingleOrder)
router.delete('/:id', auth(USER_ROLE.admin), OrderControllers.deleteSingleOrder)

router.post('/success/:transactionId', OrderControllers.successOrder)
router.post('/fail/:transactionId', OrderControllers.failOrder)

export const orderRoutes = router    