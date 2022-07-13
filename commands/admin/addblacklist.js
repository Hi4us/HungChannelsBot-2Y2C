// addblacklist.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const blacklist = require('../../models/blacklist.js');
const { Message } = require('discord.js');
module.exports = {
    name: `addblacklist`,
    aliases: [`addblacklist`],
    category: `admin`,
    description: `Cấm người dùng sử dụng bot(chỉ admin sử dụng)`,
    usage: `${process.env.DISCORD_PREFIX}addblacklist <id>`,
    /**
     * @param {Message} message
     */
    run: async (client, message, args) => {
        if (message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
        const User = message.mentions.members.first();
        if (!User) return message.reply(`Không nhận dạng được người dùng này`);
        blacklist.findOne({ id: User.user.id }, async (err, data) => {
            if (err) throw err;
            if (data) {
                message.reply(`${User.user.tag} đã có trong blacklist`);
            } else {
                data = new blacklist({ id: User.user.id, name: User.user.tag, by: message.author.tag });
                data.save()
                    .catch(err => console.log(err))
                message.reply(`${User.user.tag} đã được thêm vào blacklist`);
            }
        })
    }
}