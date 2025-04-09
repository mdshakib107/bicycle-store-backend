import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const result = await OrderService.createOrderIntoDB(req.body);

  // console.log(result);
  sendResponse.sendCreateDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order is created succesfully',
    data: result,
  });
});

const getAllOrder = catchAsync(async (req, res) => {
  const result = await OrderService.getAllOrdersFromDB(req.query);
  sendResponse.sendCreateDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Got All Order succesfully',
    data: result,
  });
});

const updateSingleOrder = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await OrderService.updateOrderIntoDB(id, req.body);
  sendResponse.sendCreateDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Updated succesfully',
    data: result,
  });
});

const deleteSingleOrder = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OrderService.deleteOrderFromDB(id);
  sendResponse.sendCreateDataResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Deleted succesfully',
    data: result,
  });
});

export const OrderControllers = {
  createOrder,
  getAllOrder,
  updateSingleOrder,
  deleteSingleOrder,
};
