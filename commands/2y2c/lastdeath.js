// lastdeath.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const kd = require('../../models/kd.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `lastdeath`,
    aliases: [`lastdeath`, `ld`],
    category: `2y2c`,
    description: `Xem lần chết gần nhất của người chơi trong 2y2c`,
    usage: `${process.env.DISCORD_PREFIX}lastdeath <tên người chơi>`,
    run: async (client, message, args) => {
        const user = args[0]
        kd.findOne({ username: user }, async (err, data) => {
            if (err) throw err;
            if (data) {
                if (!data.lastdeath) return message.channel.send('Không tìm thấy dữ liệu')
                message.channel.send({
                    embeds: [new MessageEmbed()
                        .setDescription(data.lastdeath)
                        .setColor('RANDOM')]
                })
            } else {
                message.channel.send('Không tìm thấy dữ liệu')
            }
        })
    }
}