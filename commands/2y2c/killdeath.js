// killdeath.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const kd = require('../../models/kd.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `killdeath`,
    aliases: [`killdeath`, `kd`, `kda`],
    category: `2y2c`,
    description: `Xem điểm kd của người chơi trong 2y2c`,
    usage: `${process.env.DISCORD_PREFIX}killdeath <tên người chơi>`,
    run: async (client, message, args) => {
        const user = args[0]
        kd.findOne({ username: user }, async (err, data) => {
            if (err) throw err;
            if (data) {
                var kd = data.kill / data.death
                if (!data.death && !data.kill) kd = `No data`
                if (data.death === '0' && data.kill === '0') kd = '0'
                if (data.death === '0' || !data.death) kd = `Kill: ${data.kill}`
                if (data.kill === '0' || !data.kill) kd = ` Death: ${data.death}`
                message.channel.send({
                    embeds: [new MessageEmbed()
                        .setTitle(`Số kill/death của ${user}`)
                        .addFields({
                            name: 'Kill',
                            value: `${data.kill}`,
                            inline: true
                        },
                            {
                                name: 'Death',
                                value: `${data.death}`,
                                inline: true
                            },
                            {
                                name: 'K/D',
                                value: `${kd}`,
                                inline: true
                            })
                        .setColor('RANDOM')]
                }
                )
            } else {
                message.channel.send('Không tìm thấy data')
            }
        })
    }
}