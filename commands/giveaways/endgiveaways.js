// endgiveaways.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
module.exports = {
    name: 'endgiveaways',
    aliases: ['endgiveaways', 'end', 'endga', `ketthuc`],
    category: 'giveaways',
    description: 'Kết thúc giveaways',
    usage: `${process.env.DISCORD_PREFIX}rerollgiveaways <id>`,
    run: async (client, message, args) => {
        if (!message.member.permissions.has('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === 'Giveaways')) return message.channel.send(`Bạn đang thiếu quyền quản lí tin nhắn`);
        const giveawaysObj = client.giveawaysManager.giveaways.find(
            (g) => g.prize === giveaway && g.guildId === message.guild.id
        ) || client.giveawaysManager.giveaways.find(
            (g) => g.messageId === giveaway && g.guildId === message.guild.id
        );
        if (!giveawaysObj) return message.channel.send(`Không tìm thấy giveaways`);
        if (giveawaysObj.ended) return message.channel.send(`Giveaways đã kết thúc từ trước`);
        client.giveawaysManager.end(giveawaysObj.messageId).then(message.channel.send(`Giveaways đã kết thúc`));
    }
}