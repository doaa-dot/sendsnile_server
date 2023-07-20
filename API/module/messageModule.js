const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const getmessages = new Schema({
   message: String,
   num: Number,
   userName: String
});
const messagesModel =
   mongoose.model("mesaage", getmessages);

module.exports = messagesModel;

