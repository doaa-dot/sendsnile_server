const messagesModel = require("../module/messageModule")


const addMessage = (req , res) => {
    const {message , num , userName} = req.body
    messagesModel.create({
        message: message , 
        num : num , 
        userName : userName
    }).then(() => {
        res.status(200).json({message:'sent'})
    })
}

module.exports = {
    addMessage
}

 


 
    
