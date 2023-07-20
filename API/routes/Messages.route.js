const express = require("express");
const { getAllMesages, AddMessage } = require("../controler/Messages.controller");
const messageRouter = express.Router();

messageRouter.post('/addMessage', AddMessage)
messageRouter.get('/getAllMesages', getAllMesages)

module.exports = messageRouter;
