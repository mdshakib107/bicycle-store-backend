import { Router } from "express";
import { productController } from "./product.controller";

const productRouter=Router()

productRouter.get('/:id',productController.getSingleProduct)
productRouter.get('/',productController.getProducts)
productRouter.post('/',productController.createProduct)
productRouter.put('/:id',productController.updateProduct)
productRouter.delete('/:id',productController.deleteProduct)


export default productRouter