const mongoose=require("mongoose")

const Schema=new mongoose.Schema({
    user:{
        type:String
    },
    card:{
        type:Number
    },
    food:{
        type:String
    },
    src:{
        type:String
    }
})

const cModel=mongoose.model("card",Schema)

module.exports={cModel}