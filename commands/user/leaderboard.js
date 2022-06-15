// leaderboard.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const Levels = require('discord-xp');
module.exports = {
  name: `leaderboard`,
  aliases: [`leaderboard`, `lb`],
  category: `user`,
  description: `Xem bảng xếp hạng`,
  usage: `${process.env.DISCORD_PREFIX}leaderboard`,
  run: async (client, message, args) => {
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10)
    if (rawLeaderboard.length < 1) return message.channel.send(`Không có ai trong bảng xếp hạng`)
    const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true)
    const lb = leaderboard.map((e) => `${e.position} | ${e.username}#${e.discriminator} | Level: ${e.level}`)
    const embed = new MessageEmbed()
      .setTitle(`Bảng xếp hạng ${message.guild.name}`)
      .setDescription(`${lb.join('\n\n')}`)
      .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor('RANDOM');
    message.channel.send({ embeds: [embed] });
  }
}