// startgiveaways.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const ms = require('ms');
const messages = require('../../hungchannelstv/giveawaysmessages.js')
module.exports = {
    name: `startgiveaways`,
    aliases: [`startgiveaways`, `start`, `startga`, `batdau`],
    category: `giveaways`,
    description: `Bắt đầu giveaways`,
    usage: `${process.env.DISCORD_PREFIX}startgiveaways <kênh> <thời gian> <số lượng> <giải thưởng>`,
    run: async (client, message, args) => {
        if (!message.member.permissions.has('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === 'Giveaways')) return message.channel.send(`Bạn đang thiếu quyền quản lí tin nhắn`);
        const channel = message.mentions.channels.first()
        if (!channel) return message.channel.send(`Hãy tag kênh cần tạo giveaways`)
        const duration = args[1]
        if (!duration) return message.channel.send(`Hãy thêm thời gian giveaways`)
        const winners = args[2]
        if (!winners) return message.channel.send(`Hãy thêm số lượng người trúng giveaways`)
        const prize = args.slice(3).join(' ')
        if (!prize) return message.channel.send(`Hãy thêm giải thưởng`)
        client.giveawaysManager.start(channel, {
            duration: ms(duration),
            prize: prize,
            winnerCount: +winners,
            hostedBy: `<@!${message.author.id}>`,
            messages
        })
    }
}