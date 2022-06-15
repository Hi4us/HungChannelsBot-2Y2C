// kd.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const mongoose = require('mongoose')
let Schema = new mongoose.Schema({
    username : String,
    kill : String,
    death : String,
    firstkill : String,
    lastkill : String,
    firstdeath : String,
    lastdeath : String,
    joinDate: String
})

module.exports = mongoose.model('kd', Schema)