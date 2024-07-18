const express=require("express")
const {model} =require("../model/register")


const router=express.Router()


router.get("/",(req,res)=>{
    res.send("Hai")
})


router.post("/register",async (req,res)=>{
    const user=new model(req.body)
    const {name}=model(req.body)

    const username=await model.findOne({name})
    
    if(username)
    {
       return  res.send("already exists")
    }
    else{
        await user.save() 
    }

})


router.post("/login",async (req,res)=>{
    const {name,password}=(req.body)
     if(name=="admin"&& password=="123"){
        return res.send("admin")
     }
    const user=await model.findOne({name})

    if(user){
        if(password==user.password){
           return  res.send("login")
        }
        res.send("Password wrong")

    }
    else{
        res.send("login failed")
    }
    
     
})

module.exports={router}