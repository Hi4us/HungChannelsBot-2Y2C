// minecraftbot.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const mineflayer = require('mineflayer');
const tpsPlugin = require('mineflayer-tps')(mineflayer);
const util = require('minecraft-server-util');
const { Client, MessageEmbed, Message } = require('discord.js');
const ms = require('ms');
const { env } = require('process');
const { ownerid, livechat1, livechat2 } = require('../config.json');
const blacklist = require('../models/blacklist.js');
const info = {
    name: env.MC_NAME,
    pass: env.MC_PASS,
    version: env.MC_VERSION,
    ip: env.MC_IP,
    port: env.MC_PORT
}
const color = {
    red: '#f00c0c',
    yellow: '#e5f00c',
    green: '#07fc03',
    pink: '#ff17bd',
    blue: '#09bced',
    purple: '#a009e0',
    blue2: '#094ded'
}

/**
 * @param {Client} client
 */
function createBot(client) {

    // Create bot

    const minecraftbot = mineflayer.createBot({
        host: info.ip,
        // port: info.port,
        username: info.name,
        version: info.version,
        plugins: {
            afk: require('./afk'),
        },
    });

    minecraftbot.loadPlugin(tpsPlugin);

    // Log when login

    let click = false
    let end = false
    let connect = 0
    let move = 0
    let login = false
    let err = 0
    let prepare = false
    let restart = false
    let logintime = 0

    /**
     * 
     * @param {MessageEmbed} embed 
     * @param {Message} msg
     * @param {String} color
     */
    async function send(embed, msg, color) {
        if (embed) {
            const channel1 = client.channels.cache.get(livechat1);
            const channel2 = client.channels.cache.get(livechat2);
            if (!channel1 || !channel2) return;
            channel1.send({ embeds: [embed] });
            channel2.send({ embeds: [embed] });
        }
    }
    /**
     * 
     * @param {String} msg 
     * @param {String} color 
     * @returns 
     */
    async function codeblockGenerator(msg, color) {
        let c = color.toLowerCase()
        if (c === 'blue' || c === 'xanh dương') {
            return '```md\n# ' + msg.toString() + '```'
        }
        else if (c === 'orange' || c === 'cam') {
            return '```cs\n# ' + msg.toString() + '```'
        }
        else if (c === 'red' || c === 'đỏ') {
            return '```cs\n- ' + msg.toString() + '```'
        }
        else if (c === 'green' || c === 'xanh lá') {
            return '```cs\n+ ' + msg.toString() + '```'
        }
        else if (c === 'gray' || c === 'grey' || c === 'xám') {
            return '```md\n> ' + msg.toString() + '```'
        }
        else {
            return '```' + msg + '```'
        }
    }
    /**
     * 
     * @param {String} time 
     * @param {Boolean} now 
     */
    minecraftbot.on('login', async () => {
        move++
        end = false
        prepare = false
        restart = false
        let server = '2y2c.org'
        logintime++
        if (move == 1) { server = 'Pin'; minecraftbot.afk.stop() }
        else if (move == 2) { server = 'Queue'; minecraftbot.afk.stop() }
        else if (move == 3) {
            server = 'Main';
            move = 0;
            err = 0
            setTimeout(() => {
                if (end === true) { return; }
                else {
                    minecraftbot.afk.start();
                }
                const embed = new MessageEmbed()
                    .setTitle('Bắt đầu afk')
                    .setColor('GREY')
                send(embed, 'Bắt đầu AFK', 'gray')
            }, 15000);
        }
        const embed1 = new MessageEmbed()
            .setTitle(`Đã kết nối với server ${server}`)
            .setColor(color.green)
        send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
    });

    // Login to server
    // From MoonU
    minecraftbot.on('windowOpen', async (window) => {
        if (Number(window.slots.length) == 63 || Number(window.slots.length) == 62) {
            const embed = new MessageEmbed()
                .setTitle('Cửa sổ `Chuyển Server` mở')
                .setColor(color.green)
            send(embed, embed.title ? embed.title : embed.description, 'green')
            minecraftbot.simpleClick.leftMouse(10);
            const embed1 = new MessageEmbed()
                .setTitle('Đã click vào cửa sổ `Chuyển Server`')
                .setColor(color.green)
            send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
        } else if (Number(window.slots.length) == 45 || Number(window.slots.length) == 46) {
            const embed = new MessageEmbed()
                .setTitle('Cửa sổ `Nhập PIN` mở')
                .setColor(color.green)
            send(embed, embed.title ? embed.title : embed.description, 'green')
            click = true;
            window.requiresConfirmation = false;
            const pass = info.pass.split(' ')
            const p1 = pass[0];
            const p2 = pass[1];
            const p3 = pass[2];
            const p4 = pass[3];
            minecraftbot.simpleClick.leftMouse(Number(p1));
            minecraftbot.simpleClick.leftMouse(Number(p2));
            minecraftbot.simpleClick.leftMouse(Number(p3));
            minecraftbot.simpleClick.leftMouse(Number(p4));
            const embed1 = new MessageEmbed()
                .setTitle('Đã nhập mật khẩu')
                .setColor(color.green)
            send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
        }
    });

    // Livechat ingame (Mineflayer)
    // Phân loại

    // CHat thường
    const chat = /$<(.+)> (.+)^/;

    // Whisper
    const whisper1 = /^nhắn cho (.+): (.+)$/;
    const whisper2 = /^(.+) nhắn: (.+)$/;

    // Error
    const error1 = /^Unknown command$/;
    const error2 = /^Kicked whilst connecting to (.+)$/;
    const error3 = /^Could not connect to a default or fallback server, please try again later:(.+)$/;
    const error4 = /^Oops something went wrong... Putting you back in queue.$/;
    const error5 = /^Exception Connecting:ReadTimeoutException : null$/;
    const error6 = /^CommandWhitelist > No such command.$/;

    // Donater
    const donater = /^[Broadcast] (.+) (?:đạt mốc nạp|vừa ủng hộ) (.+)$/;

    //Sleep
    const sleepchat = /^(.+) players sleeping$/

    minecraftbot.on('message', async (message) => {
        if (whisper1.test(message.toString())
            || whisper2.test(message.toString())) {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.pink)
            send(embed, embed.title ? embed.title : embed.description, 'blue')
        }
        else if (error1.test(message.toString())
            || error2.test(message.toString())
            || error3.test(message.toString())
            || error4.test(message.toString())
            || error5.test(message.toString())
            || error6.test(message.toString())
        ) {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.red)
            send(embed, embed.title ? embed.title : embed.description, 'red')
            if (error4.test(message.toString())) {
                err++
                if (err >= 5) { minecraftbot.end('Không thể kết nối với server `Chính`'); err = 0 }
            }
        }
        else if (message.getText().toLowerCase().trim() === 'dùng lệnh/2y2c  để vào server.') {
            connect++;
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.blue)
            send(embed, embed.title ? embed.title : embed.description, 'blue')
            function connectServer(click, end, minecraftbot) {
                if (click === true && end === false) {
                    minecraftbot.chat('/2y2c');
                    const embed1 = new MessageEmbed()
                        .setTitle('Đã nhập `/2y2c`')
                        .setColor(color.green)
                    send(embed1, embed1.title ? embed1.title : embed1.description, 'green')
                }
            }
            if (connect == 2) {
                connectServer(click, end, minecraftbot);
            } else if (connect < 2 && connect > 2 && connect < 8) {
                return;
            } else if (connect = 8) {
                connectServer(click, end, minecraftbot);
            } else if (connect > 8) {
                minecraftbot.end('Không thể kết nối với server `Hàng chờ`');
            }
        } else if (donater.test(message.toString())) {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.purple)
            send(embed, embed.title ? embed.title : embed.description, 'blue')
        } else if (message.toString() === 'The main server is down. We will be back soon!') {
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`)
                .setColor(color.red);
            send(embed, embed.title ? embed.title : embed.description, 'red')
            setTimeout(() => { minecraftbot.end('Server Restart'); }, 5000);
        } else if (sleepchat.test(message.toString())) {
            return
        } else {
            if (message.toString() === '') return
            if (login === false && chat.test(message.toString())) {
                login === true;
                minecraftbot.afk.stop()
                setTimeout(() => {
                    if (end === true) { return; }
                    else {
                        end
                        minecraftbot.afk.start();
                        const embed = new MessageEmbed()
                            .setTitle('Bắt đầu afk')
                            .setColor('GREY')
                        send(embed, 'Bắt đầu AFK', 'gray')
                    }
                }, 15000);
            }
            const embed = new MessageEmbed()
                .setDescription(`${message.toString()}`);
            if (message.toString().split(' ').shift() === `<${info.name}}>`) {
                embed.setColor(color.blue2);
            } else {
                embed.setColor(color.blue);
            }
            send(embed, embed.title ? embed.title : embed.description, 'blue')
        }
    });

    // Chat to game (Discord)
    client.on('messageCreate', async (message, args) => {
        let mentionprefix = message.content.match(new RegExp(`<@!?(${client.user.id})>`, `gi`));
        if (mentionprefix) { prefix = `${mentionprefix[0]} ` } else { prefix = process.env.DISCORD_PREFIX };
        if (message.author.bot || !message.guild) return;
        blacklist.findOne({ id: message.author.id }, async (err, data) => {
            if (err) throw err;
            if (!data) {
                if (message.channel.id === livechat1 || message.channel.id === livechat2) {
                    if (message.content.startsWith(prefix)) return;
                    if (message.author.id === ownerid) {
                        message.react('✅');
                        minecraftbot.chat(`> [Admin | ${message.author.tag}] ${message.content} | HungChannels_TV`);
                    } else {
                        const randomnum = await random()
                        message.react('✅');
                        minecraftbot.chat(`> [${message.author.tag}] ${message.content} | ${randomnum}`);
                    }
                }
                if (!message.content.startsWith(prefix)) return;
                const args = message.content.slice(prefix.length).trim().split(/ +/g);
                const cmd = args.shift().toLocaleLowerCase();
                if (cmd.length === 0) return;
                if (cmd === 'checkonline' || cmd === 'conl' || cmd === 'co') {
                    if (!args[0]) return message.channel.send(`Bạn chưa nhập tên người chơi`);
                    let i = 0;
                    const num = Object.values(minecraftbot.players).map(name => name.username).length;
                    Object.values(minecraftbot.players).map(name => name.username).forEach((names) => {
                        if (names === args[0]) return message.channel.send(`Player ${names} đang online`);
                        if (i > num) return message.channel.send(`Player ${names} không online`);
                        i++;
                    });
                } else if (cmd === 'playeronline' || cmd === 'playersonline' || cmd === 'ponl' || cmd === 'po') {
                    message.channel.send(`Hiện có ${Object.values(minecraftbot.players).map(name => name.username).length} đang chơi trong ${info.ip}`);
                } else if (cmd === 'adminchat') {
                    if (!message.author.id === ownerid) {
                        message.reply(`Bạn phải là admin để sử dụng lệnh này`);
                    } else {
                        if (!args.length) return;
                        message.react('✅');
                        minecraftbot.chat(args.join(' '));
                    }
                }
            }
        })
    });

    // Login when kicked

    var kickcount = 0
    var rejoin = 0
    minecraftbot.on('end', (reason) => {
        end = true;
        let res = reason
        if (kickcount < 2) { rejoin = 1; kickcount++ }
        else { rejoin = 5; }
        if (reason.toString().toLowerCase() == 'Server Restart') { rejoin = 5; restart = true }
        if (prepare === true && reason.toString().toLowerCase() == 'Server Restart') restartsend('', true)
        const embed = new MessageEmbed()
            .setDescription(`**Bot đã mất kết nối đến server ${info.ip}, lí do: \`${res}\`, kết nối lại sau ${rejoin} phút**`)
            .setColor('#f00c0c')
        send(embed, embed.title ? embed.title : embed.description, 'red')
        console.log(`[2Y2C] Bot mất kết nối server, lí do: ${res}, kết nối lại sau ${rejoin} phút`)
        setTimeout(async () => {
            const embed = new MessageEmbed()
                .setDescription(`Đang kết nối lại với ${info.ip} ...`)
                .setColor(color.yellow)
            send(embed, embed.title ? embed.title : embed.description, 'orange')
            createBot(client);
        }, ms(`${rejoin}m`));
    });
    /**
   *
   * Command của bot ingame
   *
   */
    // Server
    minecraftbot.addChatPattern('server', /<(.+)> (?:og.server|!server)/, { parse: true });
    minecraftbot.on('chat:server', async () => {
        const randomnum = await random()
        util.status('2y2c.org').then(async (response) => {
            minecraftbot.chat(`> Tổng người chơi: ${response.onlinePlayers}/${response.maxPlayers} | TPS: ${minecraftbot.getTps()} | Uptime: ${ms(client.uptime)} | HungChannels_TV | ${randomnum}`);
        });
    });
    // TPS
    minecraftbot.addChatPattern('tps', /<(.+)> (?:og.tps|!tps)/, { parse: true });
    minecraftbot.on('chat:tps', async () => {
        const randomnum = await random()
        minecraftbot.chat(`> TPS: ${minecraftbot.getTps()} | HungChannels_TV | ${randomnum}`);
    });
    // Player
    minecraftbot.addChatPattern('player', /<(.+)> (?:og.player|!player)/, { parse: true });
    minecraftbot.on('chat:player', async () => {
        const randomnum = await random()

        util.status('2y2c.org').then(async (response) => {
            minecraftbot.chat(`> Tổng người chơi: ${response.onlinePlayers}/${response.maxPlayers} | HungChannels_TV | ${randomnum}`);
        });
    });
    // Botinfo
    minecraftbot.addChatPattern('botinfo', /<(.+)> (?:og.botinfo|og.bi|!botinfo|!bi)/, { parse: true });
    minecraftbot.on('chat:botinfo', async (message) => {
        const randomnum = await random()
        minecraftbot.chat(`> WSPing: ${client.ws.ping}ms | Uptime: ${ms(client.uptime)} | HungChannels_TV | ${randomnum}`);
    });
    // Help
    minecraftbot.addChatPattern('help', /<(.+)> (?:og.help|!help)/, { parse: true });
    minecraftbot.on('chat:help', async () => {
        const randomnum = await random()
        minecraftbot.chat(`> Lệnh hiện có: server, tps, player, botinfo, admin, fd, ld, fk, lk, kd, jd | HungChannels_TV | ${randomnum}`);
    });
    // Admin
    minecraftbot.addChatPattern('admin', /<(.+)> (?:og.admin|!admin)/, { parse: true });
    minecraftbot.on('chat:admin', async () => {
        const randomnum = await random()
        minecraftbot.chat(`> Discord: Hùng Channels#0669 | https://www.facebook.com/HungChannels.TV | HungChannels_TV | ${randomnum}`);
    });
    /**
     * 
     * KDA Writer
     * 
     */
    // Const regex
    const kill1 = /^(.+) bị giết bởi (.+) sử dụng (.+)$/;
    const kill2 = /^(.+) bị đẩy té xuống vực bởi (.+)$/;
    const kill3 = /^(.+) chết ngạt vì đéo biết bơi$/;
    const kill4 = /^(.+) bị thông đít đến chết$/;
    const kill5 = /^(.+) chết đói$/;
    const kill6 = /^(.+) cứ nghĩ cháy là ngầu$/;
    const kill7 = /^(.+) té đập con mẹ nó mặt$/;
    const kill8 = /^(.+) bú cu tự sát$/;
    const kill9 = /^(.+) Tập bơi trong lava$/;
    const kill10 = /^(.+) đang leo lên thì té khỏi dây leo$/;
    const kill11 = /^(.+) đã bị giết bởi (.+)$/;
    const kill12 = /^(.+) đập mặt vào cột điện$/;
    const kill13 = /^(.+) nghĩ rằng cậu ấy bơi được hoài$/;
    const kill14 = /^(.+) chết cháy$/;
    const kill15 = /^(.+) đang leo lên thì té khỏi Thang$/;
    const kill16 = /^(.+) bị bắt bởi (.+) dùng (.+)$/;
    const kill17 = /^(.+) đã giết (.+) bằng (.+)$/;
    const kill18 = /^(.+) bị giết bởi (.+)$/;
    const kill19 = /^(.+) đã giết hại (.+) bằng (.+)$/;
    const kill20 = /^(.+) chết khi tắm xông hơi$/;
    const kill21 = /^(.+) bóp chim tự tử$/;
    const kill22 = /^(.+) nổ banh xác (.+) với tnt$/;
    const kill23 = /^(.+) was blown up by a Creeper$/;
    const kill24 = /^(.+) (?:nỏ|nổ) banh chim$/;
    const kill25 = /^(.+) bị giết bởi (.+) dùng (.+)$/;
    const kill26 = /^(.+) bị sét đánh$/;
    const kill27 = /^(.+) bị đè chết bởi đe$/;
    const kill28 = /^(.+) ngủ dưới nether :kappa: $/;
    const kill29 = /^(.+) bị hội đồng bởi (.+) Sử dụng (.+)$/;
    const kill30 = /^(.+) bị bốc hơi$/;

    // Nhập vào database
    const kd = require('../models/kd');
    const date = new Date();
    const joinDate = `Ng ${date.getDate()},Thg ${date.getMonth() + 1},Năm ${date.getFullYear()}`;

    async function victimWriter(victim, message, kd) {
        let data = await kd.findOne({ username: victim })
        if (data) {
            const deathcount = Number(data.death) + 1;
            if (data.firstdeath === 'No data') {
                kd.findOneAndUpdate({ username: victim }, { $set: { firstdeath: message, lastdeath: message, death: deathcount } });
            }
            else if (data.firstdeath !== 'No data' && data.lastdeath !== 'No data') {
                kd.findOneAndUpdate({ username: victim }, { $set: { lastdeath: message, death: deathcount } });
            }
        } else {
            data = new kd({
                username: victim,
                kill: '0',
                death: '1',
                firstkill: 'No data',
                lastkill: 'No data',
                firstdeath: `${message}`,
                lastdeath: `${message}`,
                joinDate: joinDate,
            });
            data.save();
        }
    }
    async function killerWriter(killer, message, kd) {
        let data = await kd.findOne({ username: killer })
        if (err) throw err;
        if (data) {
            const killcount = Number(data.kill) + 1;
            if (data.firstdeath === 'No data') {
                await kd.findOneAndUpdate({ username: killer }, { $set: { firstkill: message, lastkill: message, kill: killcount } });
            }
            else if (data.firstkill !== 'No data' && data.lastkill !== 'No data') {
                await kd.findOneAndUpdate({ username: killer }, { $set: { lastkill: message, kill: killcount } });
            }
        } else {
            data = new kd({
                username: killer,
                kill: '1',
                death: '0',
                firstkill: `${message}`,
                lastkill: `${message}`,
                firstdeath: 'No data',
                lastdeath: 'No data',
                joinDate: joinDate,
            });
            await data.save();
        }
    }

    // Message
    minecraftbot.on('message', async (message) => {
        const messageregex = /^<(.+)> (.+)$/;
        if (messageregex.test(message.toString())) return;
        const str = message.toString();
        if (kill1.test(str)) {
            const victim = `${kill1.exec(str)[1]}`;
            const killer = `${kill1.exec(str)[2]}`;
            const weapon = `${kill1.exec(str)[3]}`;
            const message = `${victim} bị giết bởi ${killer} dùng ${weapon}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill2.test(str)) {
            const victim = `${kill2.exec(str)[1]}`;
            const killer = `${kill2.exec(str)[2]}`;
            const message = `${victim} bị đẩy xuống vực ${killer}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill3.test(str)) {
            const victim = `${kill3.exec(str)[1]}`;
            const message = `${victim} chết ngạt vì đéo biết bơi`;
            victimWriter(victim, message, kd)
        }
        else if (kill4.test(str)) {
            const victim = `${kill4.exec(str)[1]}`;
            const message = `${victim} bị thông đít đến chết`;
            victimWriter(victim, message, kd)
        }
        else if (kill5.test(str)) {
            const victim = `${kill5.exec(str)[1]}`;
            const message = `${victim} chết đói`;
            victimWriter(victim, message, kd)
        }
        else if (kill6.test(str)) {
            const victim = `${kill6.exec(str)[1]}`;
            const message = `${victim} cứ nghĩ cháy là ngầu`;
            victimWriter(victim, message, kd)
        }
        else if (kill7.test(str)) {
            const victim = `${kill7.exec(str)[1]}`;
            const message = `${victim} té đập con mẹ nó mặt`;
            victimWriter(victim, message, kd)
        }
        else if (kill8.test(str)) {
            const victim = `${kill8.exec(str)[1]}`;
            const message = `${victim} bú cu tự sát`;
            victimWriter(victim, message, kd)
        }
        else if (kill9.test(str)) {
            const victim = `${kill9.exec(str)[1]}`;
            const message = `${victim} Tập bơi trong lava`;
            victimWriter(victim, message, kd)
        }
        else if (kill10.test(str)) {
            const victim = `${kill10.exec(str)[1]}`;
            const message = `${victim} đang leo thì té khỏi dây leo`;
            victimWriter(victim, message, kd)
        }
        else if (kill11.test(str)) {
            const victim = `${kill11.exec(str)[1]}`;
            const killer = `${kill11.exec(str)[2]}`;
            const message = `${victim} bị giết bởi ${killer}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill12.test(str)) {
            const victim = `${kill12.exec(str)[1]}`;
            const message = `${victim} đập mặt vào cột điện`;
            kvictimWriter(victim, message, kd)
        }
        else if (kill13.test(str)) {
            const victim = `${kill13.exec(str)[1]}`;
            const message = `${victim} nghĩ rằng cậu ấy bơi được hoài`;
            victimWriter(victim, message, kd)
        }
        else if (kill14.test(str)) {
            const victim = `${kill14.exec(str)[1]}`;
            const message = `${victim} chết cháy`;
            victimWriter(victim, message, kd)
        }
        else if (kill15.test(str)) {
            const victim = `${kill15.exec(str)[1]}`;
            const message = `${victim} đang leo thì té khỏi thang`;
            victimWriter(victim, message, kd)
        }
        else if (kill16.test(str)) {
            const victim = `${kill16.exec(str)[1]}`;
            const killer = `${kill16.exec(str)[2]}`;
            const weapon = `${kill16.exec(str)[3]}`;
            const message = `${victim} bị bắn bởi ${killer} sử dụng ${weapon}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill17.test(str)) {
            const victim = `${kill17.exec(str)[2]}`;
            const killer = `${kill17.exec(str)[1]}`;
            const weapon = `${kill17.exec(str)[3]}`;
            const message = `${killer} đã giết ${victim} dùng ${weapon}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill18.test(str)) {
            const victim = `${kill18.exec(str)[1]}`;
            const killer = `${kill18.exec(str)[2]}`;
            const message = `${victim} bị giết bởi ${killer}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill19.test(str)) {
            const victim = `${kill19.exec(str)[1]}`;
            const killer = `${kill19.exec(str)[2]}`;
            const weapon = `${kill19.exec(str)[3]}`;
            const message = `${victim} đã giết hại ${killer} bẳng ${weapon}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill20.test(str)) {
            const victim = `${kill13.exec(str)[1]}`;
            const message = `${victim} chết khi tắm xông hơi`;
            victimWriter(victim, message, kd)
        }
        else if (kill21.test(str)) {
            const victim = `${kill21.exec(str)[1]}`;
            const message = `${victim} bóp chim tự tử`;
            victimWriter(victim, message, kd)
        }
        else if (kill22.test(str)) {
            const killer = `${kill22.exec(str)[2]}`;
            const victim = `${kill22.exec(str)[1]}`;
            const message = `${victim} nổ banh xác ${killer} bằng tnt`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill23.test(str)) {
            const victim = `${kill23.exec(str)[1]}`;
            const message = `${victim} was blown up by a Creeper`;
            victimWriter(victim, message, kd)
        }
        else if (kill24.test(str)) {
            const victim = `${kill24.exec(str)[1]}`;
            const message = `${victim} nổ banh chim`;
            victimWriter(victim, message, kd)
        }
        else if (kill25.test(str)) {
            const victim = `${kill25.exec(str)[1]}`;
            const killer = `${kill25.exec(str)[2]}`;
            const weapon = `${kill25.exec(str)[3]}`;
            const message = `${victim} bị giết bởi ${killer} dùng ${weapon}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill26.test(str)) {
            const victim = `${kill26.exec(str)[1]}`;
            const message = `${victim} bị sét đánh`;
            victimWriter(victim, message, kd)
        }
        else if (kill27.test(str)) {
            const victim = `${kill27.exec(str)[1]}`;
            const message = `${victim} bì đè chết bởi đe`;
            victimWriter(victim, message, kd)
        }
        else if (kill28.test(str)) {
            const victim = `${kill28.exec(str)[1]}`;
            const message = `${victim} ngủ dưới nether :kappa:`;
            victimWriter(victim, message, kd)
        }
        else if (kill29.test(str)) {
            const victim = `${kill29.exec(str)[1]}`;
            const killer = `${kill29.exec(str)[2]}`;
            const weapon = `${kill29.exec(str)[3]}`;
            const message = `${victim} bị hội đồng bởi ${killer} dùng ${weapon}`;
            victimWriter(victim, message, kd)
            killerWriter(killer, message, kd)
        }
        else if (kill30.test(str)) {
            const victim = `${kill30.exec(str)[1]}`;
            const message = `${victim} bị bốc hơi`;
            victimWriter(victim, message, kd)
        }
    });
}

// Export module ra index.js
module.exports.createBot = createBot;