
const express = require("express");
const mongoos = require("mongoose");
const messageRouter = require("./API/routes/Messages.route");

const app = express();
app.use(express.json());
const mongooselink = "mongodb+srv://doaa30:30112003@cluster0.lbko51h.mongodb.net/"


mongoos.connect(mongooselink);
mongoos.connection.on("connected", () => {
    console.log("mongo conected");
});
// app.get("/app",(req,res)=>{
//     res.status(200).json({
//         message:"yes",
//         batat:"5kg",
//     });
// })

app.use(messageRouter)
module.exports = app;
