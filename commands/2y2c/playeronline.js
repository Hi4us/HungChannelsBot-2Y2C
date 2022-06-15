// playeronline.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { Message } = require('discord.js');
module.exports = {
    name: `playeronline`,
    aliases: [`playeronline`, `playersonline`, 'ponl', `po`],
    category: `2y2c`,
    description: `Xem số lượng người chơi online trong 2y2c`,
    usage: `${process.env.DISCORD_PREFIX}playeronline`,
    /**
    * @param {Message} message 
    */
    run: async (client, message, args) => {
        return
    }
}