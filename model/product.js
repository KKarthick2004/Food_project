const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{
        type:"String"
    },
    src:{
        type:"String"
    }

})
const productmodel=mongoose.model("product",productSchema)

module.exports={productmodel}