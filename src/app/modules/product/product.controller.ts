import { Request, Response } from "express"

import { productService } from "./product.service"

const createProduct= async(req:Request,res:Response)=>{
    try{
        const body =req.body
    const result=await productService.createProduct(body)

    res.send({
        success:true,
        message:"Product created successfully",
        result,
    })
    }catch(error){
        res.send({
        status:false,
        message:"something went wrong",
        error
        })  

    }
}

const getProducts= async(req:Request,res:Response)=>{
    try{
    const result=await productService.getProducts()

    res.send({
        success:true,
        message:"Product getting successfully",
        result,
    })
    }catch(error){
        res.send({
        status:false,
        message:"something went wrong",
        error
        })  

    }
}

const getSingleProduct= async(req:Request,res:Response)=>{
    try{
        const id =req.params.id
    const result=await productService.getSingleProduct(id)

    res.send({
        success:true,
        message:"your Product gets successfully",
        result,
    })
    }catch(error){
        res.send({
        status:false,
        message:"something went wrong",
        error
        })  

    }
}

const updateProduct= async(req:Request,res:Response)=>{
    try{
        const id=req.params.id
        const body =req.body
        const result=await productService.updateProduct(id,body)

    res.send({
        success:true,
        message:"Product updated successfully",
        result,
    })
    }catch(error){
        res.send({
        status:false,
        message:"something went wrong",
        error
        })  

    }
}

const deleteProduct= async(req:Request,res:Response)=>{
    try{
        const id =req.params.id
        const result=await productService.deleteProduct(id)

    res.send({
        success:true,
        message:"Product deleted successfully",
        result,
    })
    }catch(error){
        res.send({
        status:false,
        message:"something went wrong",
        error
        })  

    }
}


export const productController={
    createProduct,getProducts,getSingleProduct,updateProduct,deleteProduct
}