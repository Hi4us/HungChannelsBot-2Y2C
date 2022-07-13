// removeblacklist.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const blacklist = require('../../models/blacklist.js');
module.exports = {
    name: `removeblacklist`,
    aliases: [`removeblacklist`, `xoablacklist`, `rbl`],
    category: `admin`,
    description: `Bỏ cấm người dùng sử dụng bot(chỉ admin sử dụng)`,
    usage: `${process.env.DISCORD_PREFIX}removeblacklist <tag>`,
    run: async (client, message, args) => {
        if (message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
        const User = message.mentions.members.first();
        if (!User) return message.reply(`Không nhận dạng được người dùng này`);
        blacklist.findOne({ id: User.user.id }, async (err, data) => {
            if (err) throw err;
            if (data) {
                await blacklist.findOneAndDelete({ id: User.user.id })
                    .catch(err => console.log(err))
                message.reply(`${User.user.tag} đã được xóa khỏi blacklist`);
            } else {
                message.reply(`${User.user.tag} chưa có trong blacklist`);
            }

        })
    }
}