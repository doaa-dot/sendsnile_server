const express = require("express");
const { addMessage } = require("../controler/Messages.controller");
const messageRouter = express.Router();

messageRouter.post('/addMessage' , addMessage)

module.exports = messageRouter;
