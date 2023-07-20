const messagesModel = require("../module/messageModule")


const AddMessage = (req, res) => {
    const { message, num, userName } = req.body
    messagesModel.create({
        message: message,
        num: num,
        userName: userName
    }).then(() => {
        res.status(200).json({ message: 'sent' })
    })
}

const getAllMesages = async (req, res) => {
    try {
        const allMessages = await messagesModel.find()
        res.status(200).json(allMessages)
    } catch (error) {
        console.log("get all mesages error: ", e);
    }
}

module.exports = {
    AddMessage,
    getAllMesages
}






