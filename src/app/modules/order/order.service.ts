import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderIntoDB = async (payload: TOrder) => {
  const result = await Order.create(payload);
  return result;
};
// const getAllOrdersFromDB = async () => {
//     const result = await Order.find().populate('user').populate('products.product')
//     return result
// }

const getAllOrdersFromDB = async (query: Record<string, unknown>) => {
  let page = Number(query.page) || 1; // Default to page 1 if not provided
  let limit = Number(query.limit) || 10; // Default to 10 items per page if not provided
  const skip = (page - 1) * limit;

  const result = await Order.find()
    .populate('user')
    .populate('products.product')
    .skip(skip)
    .limit(limit);

  const totalOrders = await Order.countDocuments();
  return {
    data: result,
    totalOrders,
    totalPages: Math.ceil(totalOrders / limit),
    currentPage: page,
  };
};

const updateOrderIntoDB = async (id: string, payload: Partial<TOrder>) => {
  const status = payload.status;
  const result = await Order.findByIdAndUpdate(id, { status }, { new: true });
  return result;
};
const deleteOrderFromDB = async (id: string) => {
  const result = await Order.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

export const OrderService = {
  getAllOrdersFromDB,
  createOrderIntoDB,
  updateOrderIntoDB,
  deleteOrderFromDB,
};
