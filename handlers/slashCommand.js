// slashCommand.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
const { readdirSync } = require('fs');
const slashCommands = [];
const { slashallow1, slashallow2 } = require('../config.json');
module.exports = async (client) => {
    let count = 0;
    readdirSync('./slashcommands').forEach(dir => {
        const commands = readdirSync(`./slashcommands/${dir}`).filter(file => file.endsWith('.js'));
        for (const file of commands) {
            const pull = require(`../slashcommands/${dir}/${file}`);
            if (pull.name) {
                count++;
                client.interactions.set(pull.name, pull);
                slashCommands.push(pull);
            } else {
                console.log(`[UNLOAD] ../${dir}/${file}`);
                continue;
            }
        }
    });
    client.once('ready', async () => {
        const guild1 = client.guilds.cache.get(slashallow1);
        const guild2 = client.guilds.cache.get(slashallow2);
        if (!guild1 || !guild2 ) return;
        await guild1.commands.set(slashCommands);
        await guild2.commands.set(slashCommands);
    });
    console.log(`[SLASHCOMMAND] Loaded ${count} slashcommands`);
}