// blacklist.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const mongoose = require('mongoose');
let Schema = new mongoose.Schema({
    id : String,
    name : String,
    by : String
})

module.exports = mongoose.model('blacklist', Schema);