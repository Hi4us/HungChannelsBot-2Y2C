// messageCreate.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { ownerid } = require('../config.json');
require('dotenv').config();
const blacklist = require('../models/blacklist.js');
const { Collection } = require('discord.js');
module.exports = async (client, message, args) => {
    let mentionprefix = message.content.match(new RegExp(`<@!?(${client.user.id})>`, `gi`));
    if (mentionprefix) { prefix = `${mentionprefix[0]} ` } else { prefix = process.env.DISCORD_PREFIX };
    if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
    blacklist.findOne({ id: message.author.id }, async (err, data) => {
        if (err) throw err;
        if (!data) {
            const args = message.content.slice(prefix.length).trim().split(' ');
            const cmd = args.shift().toLowerCase();
            const command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
            if (command) {
                if (!client.cooldowns.has(command.name)) client.cooldowns.set(command.name, new Collection());
                const now = Date.now();
                const timestamp = client.cooldowns.get(command.name);
                const cooldownAmount = (command.cooldown || 10) * 1000;
                if (timestamp.has(message.author.id)) {
                    const expirationTime = timestamp.get(message.author.id) + cooldownAmount;
                    if (now < expirationTime) {
                        const timeLeft = (expirationTime - now) / 1000;
                        return message.reply(`Bạn phải chờ ${timeLeft.toFixed(1)} giây để tiếp tục sử dụng lệnh này, lưu ý không spam bot`);
                    }
                }
                timestamp.set(message.author.id, now);
                setTimeout(() => timestamp.delete(message.author.id), cooldownAmount);
                if (command.category === 'music' && message.member.voice.channelId == null) return message.reply(`Bạn cần vào voice chat để sử dụng lệnh này`);
                if (command.category === 'admin' && message.author.id !== ownerid) return message.reply(`Bạn phải là admin để sử dụng lệnh này`);
                if (command.category === 'image' && !message.channel.nsfw) return message.reply(`Bạn cần vào kênh NSFW để sử dụng lệnh này`);
                command.run(client, message, args);
                console.log(`[COMMAND] [${message.guild.name}] [${message.channel.name}] [${message.author.tag}] ${message.content}`);
            }
        } else {
            const HungChannels = await client.users.fetch(ownerid);
            console.log(`[BLACKLIST] [${message.guild.name}] [${message.channel.name}] [${message.author.tag}] ${message.content}`);
            // message.reply(`Liên hệ ${HungChannels.tag} để được xóa blacklist`);
        }
    })
}