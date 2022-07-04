// ready.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../config.json');
const { createBot } = require('../vaitosoi/minecraftbot.js');
const keepAlive = require('../hungchannelstv/server.js');
module.exports = async (client) => {
    const HungChannels = await client.users.fetch(ownerid);
    client.user.setPresence({ activities: [{ name: '', type: 'PLAYING' }], status: 'online' });
    console.log(`[READY] ${client.user.tag} đang hoạt động | Admin: ${HungChannels.tag}`);
    keepAlive(client);
    createBot(client);
    console.log(`[2Y2C] Đã kích hoạt livechat | Admin: ${HungChannels.tag}`);
}