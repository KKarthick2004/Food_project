const express=require("express")
const {productmodel} = require("../model/product")

const product=express.Router()


product.post("/product",async (req,res)=>{
    const product= new productmodel(req.body)
    await product.save()
    res.send("Added")
})
product.get("/get",async (req,res)=>{ 
    const product =await productmodel.find({})
    res.send(product)
})
// product.post("/delete",async(req,res)=>{
//     const {name}=req.body
//     await productmodel.delete({name})
// })


module.exports={product}