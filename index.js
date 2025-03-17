const mongoose = require("mongoose");
const express = require("express");
const { router } = require("./router/user");
const cors = require("cors");
const bodyParser = require("body-parser");
const { product } =require("./router/product")
const {card}=require("./router/card")


const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use("/register", router);
app.use("/product",product)
app.use("/card",card)


async function connect() {
    try {
        await mongoose.connect("mongodb+srv://karthick:Karthick@cluster0.bn3vm7i.mongodb.net/Food?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("can not connect");
    }
}
connect();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
