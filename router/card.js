const { default: mongoose } = require("mongoose");
const { cModel } = require("../model/card");
const express = require("express");
const card = express.Router();

card.post("/", async (req, res) => {
    try {
        const { user, card: newCardValue,food,src } = req.body; // Renamed card to newCardValue to avoid variable shadowing
        const newFood=food

        // Check if user and card are present in the request body
        if (!user || !newCardValue) {
            return res.status(400).send("User and card data are required.");
        }

        // Create a new instance of cModel with the request body
        const cmodel = new cModel({ user, card: newCardValue,food,src });               
        
        // Check if the card value is "0", if so, save the new card entry
         
            // Assuming this is the ID of the document to update
            // Update the document where user matches
            if (!(await cModel.findOne({user}))) {
                await cmodel.save();
        }
        else{
            await cModel.updateOne(
                { user: user,food:newFood }, // Check if user matches
                { $set: { card: newCardValue,src:src}},{upsert:true}
            );
        }
    
        res.send("Saved to card successfully.");
    } catch (error) {
        console.error("Error adding to card:", error);
        res.status(500).send("Internal Server Error")
    }
});

card.post("/display",async(req,res)=>{
      const {user}=req.body
      const card=await cModel.find({user})
      res.send(card)
})
card.post("/delete",async(req,res)=>{
    const {user,food}=req.body

    await cModel.deleteOne({user,food})
})
card.post("/sum",async(req,res)=>{
    const {user}=req.body
    const response=await cModel.find({user})
    res.send(response)
})

// card.post("/total",async(req,res)=>{
//      const {user}=req.body
//      const response=(await cModel.find({user}))
// })



module.exports = { card };
