// rank.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const Levels = require('discord-xp');
const { MessageAttachment } = require('discord.js');
const canvacord = require('canvacord');
module.exports = {
  name: `rank`,
  aliases: [`rank`],
  category: `user`,
  description: `Xem rank của người dùng`,
  usage: `${process.env.DISCORD_PREFIX}rank [tag]`,
  run: async (client, message, args) => {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member
    const user = await Levels.fetch(target.id, message.guild.id, true)
    const neededXp = Levels.xpFor(parseInt(user.level) + 1)
    if (!user) return message.channel.send(`${target.tag} chưa có dữ liệu, hãy thử giao lưu với mọi người và thử lại`)
    const rank = new canvacord.Rank()
      .setAvatar(target.user.displayAvatarURL({ format: 'png', dynamic: true }))
      .setCurrentXP(user.xp)
      .setRequiredXP(neededXp)
      .setStatus(target.presence.status, true, true)
      .setRank(user.position)
      .setLevel(user.level)
      .setProgressBar('#62D3F5', 'COLOR')
      .setUsername(target.user.username)
      .setDiscriminator(target.user.discriminator)
    rank.build().then((data) => {
      const attachment = new MessageAttachment(data, 'rankcard.png')
      message.channel.send({ files: [attachment] })
    })
  }
}