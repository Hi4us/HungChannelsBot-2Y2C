// leaderboard.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { MessageEmbed } = require('discord.js');
const Levels = require('discord-xp');
module.exports = {
    name: `leaderboard`,
    description: `Xem bảng xếp hạng`,
    type: `CHAT_INPUT`,
    run: async (client, interaction) => {
        const rawLeaderboard = await Levels.fetchLeaderboard(interaction.guild.id, 10)
        if (rawLeaderboard.length < 1) return interaction.reply(`Không có ai trong bảng xếp hạng`)
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true)
        const lb = leaderboard.map((e) => `${e.position} | ${e.username}#${e.discriminator} | Level: ${e.level}`)
        const embed = new MessageEmbed()
            .setTitle(`Bảng xếp hạng ${interaction.guild.name}`)
            .setDescription(`${lb.join('\n\n')}`)
            .setFooter(`Người yêu cầu: ${interaction.user.tag}`, interaction.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        interaction.reply({ embeds: [embed] });
    }
}