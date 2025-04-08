
import { sendResponse } from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";
import { OrderService } from "./order.service";
import httpStatus from "http-status"

const createOrder = catchAsync(async (req, res) => {
    const result = await OrderService.createOrderIntoDB(req.body)

    // console.log(result);
    sendResponse.sendCreateDataResponse(res,{
        statusCode: httpStatus.OK,
        success: true,
        message: 'Order is created succesfully',
        data: result,
    })
})

export const OrderControllers = {
    createOrder
}