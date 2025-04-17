import { z } from 'zod';

const productBodySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  Img: z.string().url('Image must be a valid URL'),
  brand: z.string().min(1, 'Brand is required'),
  price: z.number().positive('Price must be a positive number'),
  type: z.enum([
    'Mountain',
    'Road',
    'Hybrid',
    'BMX',
    'Electric',
    'Fat Bikes',
  ]),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(0, 'Quantity must be at least 0'),
  inStock: z.boolean(),
});

// ✅ wrap the actual schema under `body`
const productValidationSchema = z.object({
  body: productBodySchema,
});

export default productValidationSchema;