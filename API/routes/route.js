const messageRouter = require("./Messages.route");
const userRouter=require("./userRoute");

const Routs=[
    userRouter, 
    messageRouter
]
module.exports=Routs