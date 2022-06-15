// checkonline.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { Message } = require('discord.js');
module.exports = {
    name: `checkonline`,
    aliases: [`checkonline`, `conl`, `co`],
    category: `2y2c`,
    description: `Xem người chơi có online trong 2y2c`,
    usage: `${process.env.DISCORD_PREFIX}checkonline <tên người chơi>`,
    /**
    * @param {Message} message 
    */
    run: async (client, message, args) => {
        return
    }
}