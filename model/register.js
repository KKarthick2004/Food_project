const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String},
    password:{type:String}
})

const model=mongoose.model("register",userSchema)

module.exports={model}