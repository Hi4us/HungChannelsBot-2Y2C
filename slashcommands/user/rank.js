// rank.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const Levels = require('discord-xp');
module.exports = {
    name: `rank`,
    description: `Xem rank của người dùng`,
    run: async (client, interaction) => {
        const user = interaction.options.getUser('user') || interaction.user;
        const data = await Levels.fetch(user.id, interaction.guild.id, true)
        if (!user) {
            interaction.reply(`${user.tag} chưa có dữ liệu, hãy thử giao lưu với mọi người và thử lại`);
        } else {
            interaction.reply(`${user.tag}, level ${data.level}`);
        }
    }
}