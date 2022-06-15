// sagiri.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const axios = require('axios');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `sagiri`,
    aliases: [`sagiri`],
    category: `image`,
    description: `Ảnh sagiri`,
    usage: `${process.env.DISCORD_PREFOX}sagiri`,
    run: async (client, message, args) => {
        const url = 'http://imgs-api.herokuapp.com/sagiri?apikey=mk001';
        let image, response;
        try {
            response = await axios.get(url);
            image = response.data;
        } catch (e) {
            message.channel.send(`Có lỗi xảy ra, hãy thử lại sau`);
        }
        const HungChannels = await client.users.fetch(ownerid);
        const embed = new MessageEmbed()
            .setTitle(`Ảnh sagiri | Admin: ${HungChannels.tag}`)
            .setImage(image.url)
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        await message.channel.send({ embeds: [embed] });
    }
}