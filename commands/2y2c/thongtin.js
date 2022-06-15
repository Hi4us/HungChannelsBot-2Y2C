// thongtin.js File
// Code by Hùng Channels
// #Discord.js #V13 #HungChannels #Code
require('dotenv').config();
const { ownerid } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: `thongtin`,
    aliases: [`thongtin`, `tieusu`, `tt`],
    category: `2y2c`,
    description: `Xem thông tin của người chơi trong 2y2c`,
    usage: `${process.env.DISCORD_PREFIX}thongtin [tên người chơi]`,
    run: async (client, message, args) => {
        const HungChannels = await client.users.fetch(ownerid);
        const embed1 = new MessageEmbed()
            .setTitle(`Những người có thông tin | Admin: ${HungChannels.tag}`)
            .setDescription(`\`0Thien\` \`0Channy\` \`Ginkei\` \`GoCryBabe\` \`TheTower\` \`zZHoangKhangZz\` \`Akimochi1\` \`0_Lunch_Katsu_0\` \`Dungvngamer\` \`Hackgamekoluatle\` \`Huymouse\` \`JackGm147\` \`Maple\` \`Killer112\` \`JimBoKhoa123\` \`0_Name\` \`LapisG\` \`memphis\` \`vanbinh\` \`Kuro_Here\` \`DanhhNoob\` \`TCT\` \`MoneyDogDie\` \`NguyenSugi\` \`oppocameraphone6\` \`Meloncheo\` \`DuyKhang\` \`kubookutevip\` \`tommmm\` \`DatLight\` \`Sn1per\` \`PrinceLakeVN\` \`Omama20\` \`CongHKM1\` \`BruhSoSuck\` \`HackerShader\` \`TitanHellotin132\` \`ItzNatty_\` \`ZenAD212\` \`xXHungXx\` \`SonUwU\` \`m_GN_m\` \`NguyenPham\``)
            .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor('RANDOM');
        if (!args[0]) return message.channel.send({ embeds: [embed1] });
        if (args[0] === '0Thien') {
            const embed = new MessageEmbed()
                .setImage(`https://uphinh.vn/images/2022/04/19/6b2b51ca010c177463cfc244bcfbdac4.png`)
                .setTitle(`0Thien | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Thien là 1 player vô tích sự, vừa lười vừa ngu chả được tích sự gì.
- Anh tham gia server vào ngày 22/11/2020. Ban đầu chỉ đi bú kit mấy anh ở spawn rồi sau này bắt đầu tham gia vào team DUV của Huy chuột và các công trình cộng đồng.
- Sau này anh được nhiều người biết đến về quan hệ rộng và cũng một phần là do đi đâu cũng thấy mặt thằng này.
- Những team anh từng tham gia: DUV, RTX, Rapides, Vakyla
- Anh cũng từng góp mặt trong các sự kiện lớn như: Họp Oldfag ngày 14/2; Sinh nhật 2Y2C; Sự kiện Halloween 2021 của White Wolf...`,
                    inline: true
                },
                    {
                        name: `Tình trạng`,
                        value: `- Sống rất khỏe và đang đi trồng tre ở spawn.`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === '0Channy') {
            const embed = new MessageEmbed()
                .setImage(`https://uphinh.vn/images/2022/04/18/f190a1fe6c2d1a299722963474035034.png`)
                .setTitle(`0Channy | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Channy tham gia 2b2t vào 8/2020, anh ta làm video đầu tiên về "2b2t survival" vào 26/8/2020.
- Vào ngày 15/9/2020 Channy tạo ra server 2y2c.org với ý định tạo ra một sân chơi cho các fans của 2b2t tại Việt Nam có cơ hội giao lưu với nhau.
- 11/10/2020 Channy đã không còn là Owner của 2y2c và đã chuyển quyền sở hữu cho Jeff từ đó Channy chỉ vào server trong chế độ Spectator(Ngoại trừ một số trường hợp đặc biệt) và bị tước mọi quyền trong server.
- 29/10/2020 Channy vào server bằng một tài khoản khác khác và xây nhà tại X: 660 Z:-38, cùng ngày hôm đó một căn nhà đá đã được Channy xây tại tọa độ X 1045 Z:-54 Khoảng cuối tháng 12/2020 Channy xây một căn cứ mang tên là Bánh kem cùng một vài người khác, nhưng sau đó đã bị phá hủy`,
                    inline: true
                },
                    {
                        name: `Thông tin khác`,
                        value: `- Youtube channel: https://www.youtube.com/channel/UC-tJ52OfXxNyZJhj-dGqMYQ`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Ginkei') {
            const embed = new MessageEmbed()
                .setImage(`https://cdn.discordapp.com/attachments/764799307991220254/794442369025835028/Player___GoCryBabe_1.png`)
                .setTitle(`Ginkei | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Ginkei là 1 player của 2y2c.org. Anh ấy tham gia server vào ngày 15/9/2020.
                    - Anh là 1 trong những Oldfag và là người builder giỏi nhất 2y2c.org. Anh ta là chủ của clan Yaku nhằm mục đích đi phá base ( sau này xác nhập với Foundation, nhưng Gin đã rời ) sau đó anh cùng team clayer xây dựng căn cứ halloween và đc channy trao giải sau khi bị phá đã sát nhập với RBL để xây dựng nhưng vì leader team FreddyKhang còn quá trẻ nên ko quản lí được đã tan giã ít lâu sau đó.
                    - Điều này đã khiến GinKei nhớ lại dự định xưa là lập 1 team xây lớn nhất sv và nó mang tên Horizon Dust ( lười viết chi tiết quá )`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'GoCryBabe') {
            const embed = new MessageEmbed()
                .setImage(`https://cdn.discordapp.com/attachments/764799307991220254/794437766602817576/Player___GoCryBabe.png`)
                .setTitle(`GoCryBabe | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- GoCryBabe Là 1 Player Cũ Của 2Y2C Tham Gia Vào 15/9/2020 Và Được Biết Đến Nhờ Sự Xui Xẻo Của Mình Khi Mà Player Này Đi Căn Cứ Nào Thì Căn Cứ Đó Hôm Sau Sẽ Bị Phá Hủy
- Player Này Từng Backdoor Server 2 Lần Sau Đó Chuyển Sang Làm Builder
- Vào Ngày 16/1/2021, GoCryBabe Đã Gửi 3 Tấm Ảnh Chứa Vật Phẩm Bất Hợp Pháp Là 2 Cuốn Sách Có Tên Màu, Block Tàng Hình, điều Này Đã Khiến Mọi Người Bất Ngờ Bởi Vì Trước Đó Cũng Đã Cho Mọi Người Xem Cuốn Sách Có Những Chữ Màu Và Bookban Thậm Chí Là Những Con "Rat",
- Đã Từng Thuộc Các Nhóm: Foundation, Yaku, DUV, Crystal, Rebellion, Revolution, Hội Người Già Của Andrew, SpawnEyes, 2Y2C Fanclub, DuperTC, SpawnGuard, WinAllGame, GATO
- Anh đồng thời là người tạo ra 3 cây kiếm enchanted sharpness lv.32k đầu tiên của sever`,
                    inline: true
                },
                    {
                        name: `Tình trạng`,
                        value: `- Đã ra đi, và sẽ quay lại`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'TheTower') {
            const embed = new MessageEmbed()
                .setTitle(`TheTower | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Là một oldfag join server vào ngày 15/9/2020. TheTower đã từng join rất nhiều clan, kể đến đó tiêu biểu nhất là RBL.
- Lúc vào server mục tiêu của The Tower chính là xây Highway nether, nhưng lúc đến 50k thì anh ấy đã bỏ cuộc.
- Từ tháng 10 đến tháng 11 là khoảng thời gian mà TheTower xây base với team là RBL, do một vài xích mích mà clan đã tan rã.
- Tháng 12, The Tower rời RBL và lên 1tr4 để xây Chill Palace I, lúc đó thì có soichill giúp sức.
- Tháng 1 năm 2021, soichill đã rời khỏi server, nguyên liệu xây base vẫn còn nhưng dupe đã bị fix. Do chỉ còn một mình nên The Tower đã bỏ cuộc ( do lười). Dự án Chill Palace I bị hoãn
- Sau đó, The Tower đã off từ tháng 2 đến tháng 4. Nhưng đã quay lại vào tháng 5. Và cũng từ đó anh ấy đã dùng nửa tháng để Xây dựng Chill Palace II với nguồn nguyên liệu từ Chill Palace I còn sót lại`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'zZHoangKhangZz') {
            const embed = new MessageEmbed()
                .setImage(`https://cdn.discordapp.com/attachments/764799307991220254/794444473676726272/Player___GoCryBabe_2.png`)
                .setTitle(`zZHoangKhangZz | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Chủ clan TSW ( đã giải tán vì sát nhập vào Foundation ) hiện nay là chủ clan DuperTC ( cũng đã giải tán ) , người đầu tiên vả vỡ mồm con Ender Dragon và giờ là chủ clan GATO
- ZzHoangKhangzZ là người Donator có tâm nhất server, anh còn là một player hệ đa nhân cách với nhân cách thứ hai là BestCrystalPVP, là một thành viên cống hiến cho việc kill Newbie
- Hiện nay vẫn còn online và tìm cách Backdoor server.
- BONUS: Anh là người Toxic nhất trong sever này`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Akimochi1') {
            const embed = new MessageEmbed()
                .setTitle(`Akimochi1 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Theo những gì t được biết thì aki và 1 thanh niên hiền (với người quen). Anh ấy cũng là 1 cpvper pro với lượng fame hơi to trong sv.
- Hiện nay anh ta đang thuộc team IC (team vô danh nên đừng để ý) và off 2y vì ghét tập tính bầy đàn của 1 số lượng lớn spawnfag hiện nay
- Là người thành lập ra team IC khi chơi trong sever HeroMC, sau khi HeroMC bị sụp đổ các thành viên của IC dẫn đầu là Akimochi1 đã tiến đến 2y2c, với khả năng sử dụng crystal điêu luyện của mình akimochi1 đã từng gia nhập 2 team cpvp mạnh nhất thời bấy giờ là F11 và Vakyla.`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === '0_Lunch_Katsu_0') {
            const embed = new MessageEmbed()
                .setTitle(`0_Lunch_Katsu_0 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Lunch Katsu là 1 player, 1 Youtuber đến từ 2B2T, anh là bạn của 0Channy, họ cùng nhau xây dựng The Autumn Drain và nhiều base khác trong sever 2B2T. 
- Lunch Katsu đến với 2y2c trong vai trò là khác mời đặc biệt của admin sever, anh được admin cung cấp quyền hạn gần bằng 1 admin, cũng chính vì lý do đó tài khoàn của Lunch Katsu đã là mục tiêu nhắm đến của nhiều cuộc raid accounts trong sever 2y2c vì lý do đó admin đã thêm quyền IP máy vào tài khoản của Lunch Katsu từ đó chấm dứt hi vọng của các hackers trong sever.
- Bên cạnh đó Lunch Katsu cũng đã tham gia rất nhiều công trình và sự kiện được tổ chức trong sever 2y2c, tiêu biểu phải kể đến xây dựng base Lunar Drain, base 10k10k, Horizon V,.. và tham gia một số hoạt động như là khách mời của sự kiện 1 YEARS 2Y2C,...
- Hiện tại, Lunch Katsu vẫn còn hoạt động trong sever, anh đang xây dựng công trình Feel Good Island, về spawn để khám phá và có 1 số projects bí mật.`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Dungvngamer') {
            const embed = new MessageEmbed()
                .setImage(`https://2y2c.miraheze.org/wiki/File:Dungvngamer.png`)
                .setTitle(`Dungvngamer | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Dungvngamer là một player join từ 19/9/2020. 
- Dungvngamer tuy không phải là một player nổi bật nhưng anh ta cũng đã có một số thành tựu nhất định. 
- Dungvngamer là một historian trong 2y2c và cũng là một trong những người xây nên Base Halloween 2020.
- Dungvngamer cũng là lãnh đạo của clan Clayer,  đã từng sát nhập với RBL. Clan mạnh thứ 3 server thời điểm tháng 9 -> tháng 11/2020.
- Sau khi tách khỏi RBL, anh đã lãnh đạo Clayer thêm 1 thời gian trước khi nó tan rã.
- Dungvngamer là một Histoirian vì join từ khá sớm. Luận văn của anh ấy khá hay, điều này đã được Huymouse - một Historian hàng đầu công nhận. Anh ta bắt đầu viết từ tháng 6, chủ đề anh ta viết là về các một số team, player và clan. Đẫ có rất nhiều bài viết về player và lịch sử của server.
- Anh là người đã giúp kênh discord của đội lịch sử 2y2c sống trở lại và đã phát triển nó lên một tầm cao hơn.`,
                    inline: true
                },
                    {
                        name: `Thông tin khác`,
                        value: `- Youtube channel: https://www.youtube.com/channel/UC9B2RWXjGVp_yCYPtXlqFXw`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Hackgamekoluatle') {
            const embed = new MessageEmbed()
                .setTitle(`Hackgamekoluatle | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- HackGamekoluatle (HGKll) là môt người chơi trong sv 2y2c.
- Anh ta là người thuộc team Karsion.
- Anh ta bắt đầu vào sv tháng 2 năm 2021 khi channy có sv ko luật lệ khiến anh ta rất thích style này.
- Ngày đầu chs 2y2c anh ta rời spawn rất khó khăn. Sau mấy tháng, anh ta đã tìm đc một bản hack tên là impact client nhờ nguyen sugi đã giới thiệu bản hack này.
- Tháng 7 năm 2021, anh ta quen một người bạn có tên là Sown2k6 đã gặp anh ở nether khi lúc đó họ đã cho đồ ăn, kết bạn facebook vs nhau và đã quen nhau.
- Sau 2 tuần thì bị Một người chs tên là HanoimienbacMC đã spy và phá base.
- Vào tháng 8 năm 2021 chính thức thành lập team Karsion gồm có: Heddy_VNN, Sown2k6,Vietcong123 và kaitogaming.
- 1 tuần sau base của team d94 bị phá khiến anh ta rất buồn, họ đã xây base rất xa khiến anh ta quay về rất lâu. Chỉ trong vòng 1 tiếng team họ đã kết nạp đc một người hiện nay chưa biết tên ingame`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Huymouse') {
            const embed = new MessageEmbed()
                .setImage(`https://static.miraheze.org/2y2cwiki/0/0d/Minecraft_1.16.5_-_Ch%C6%A1i_m%E1%BA%A1ng_%28M%C3%A1y_ch%E1%BB%A7_b%C3%AAn_th%E1%BB%A9_3%29_01_06_2021_6_15_00_PM.png`)
                .setTitle(`Huymouse | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Huymouse tham gia server lần đầu vào ngày 15/9/2020, là một trong những người chơi đời đầu trong server 2y2c.
- Công việc chính khi tham gia server là chỉ đế khám phá và nâng cao hiểu biết cũng như có được trải nghiệm khác nhau,tuy nhiên sự hứng thú đưa đẩy cậu trở thành phó thủ lĩnh của Ender life
- Sau sự tan rã của Ender Life, Huymouse lập nên một Clan mới với cái tên DUV.
- Làm lãnh đạo của clan lớn một thời gian dài cùng nhiều cuộc chiến,cậu tích lũy được nhiều kinh nghiệm và kỷ niệm đẹp với những người bạn của mình.
- Huymouse thành lập ra 2Y2C History và trở thành Historian thứ 2 nhưng cũng là người đã duy trì và phát triển chúng lâu dài,để trở thành History Team hiện tại.
- Một thời gian dài lãnh đạo Clan, cậu ta giờ chuyển về ở ẩn và không có mấy người liên lạc được với cậu ấy nữa.`,
                    inline: true
                },
                    {
                        name: `Câu truyện khác`,
                        value: `- Bên cạnh các chuyện chính, Huymouse cũng tham gia Hội người già của Andreww do Andrew-Thủ Lĩnh Foundation thành lập, tổ chức Team Older Idea, các thành viên tất cả đều phải là Oldfags từ trước tháng 10 và đều đặt tên ngược lại với acc chính của mình.
- Huymouse cũng là khách mời và là thành viên đời đầu của Horizon Dust trong dự án Lunar Drain,tuy nhiên vì một số lý do mà cậu ta chẳng xây được gì cả.
- Là khách mời của Clan HOG do một thành viên của DUV thành lập, đồng thời cũng lập ra một nhóm tín đồ thờ phụng mình,tự gọi mình là Dormin. Trong nhóm tín đồ đó gồm 3 thành viên của HOG và một vài thành viên khác trong đó có cả Memphis
- Ngoài ra Huymouse cũng thành lập một đại gia đình với 8 người con,5 người anh em và gồm các thành viên khác trong gia đình`,
                        inline: true
                    },
                    {
                        name: `Vai Trò`,
                        value: `- Thành Viên Older Idea ( Hội Người Già của Andreww )
- Thủ Lĩnh Clan DUV.
- Thủ Lĩnh nhóm Historian đời đầu.
- Thủ Lĩnh Rapides.
- Phó Thủ Lĩnh Ender Life.
- Giáo Chủ của hội tín đồ Dormin
- Thành viên của: Foundation,Horizon Dust,HOG,....`,
                        inline: true
                    },
                    {
                        name: `Thành tích`,
                        value: `- Chủ Dự án xây dựng của 14/17 base chính thuộc clan DUV.
- Dựng lên gần 40 Base nhỏ lẻ.
- Nắm giữ và lên kế hoạch dupe đồ bất hợp pháp ( nametag đỏ ) mà chỉ có 2 người biết tới
- Là một trong những người thành công đặt block vô hình lên world 2y2c.
- Khởi động càn quét newfags bố láo ở spawn.
- Chống lại và đẩy lùi quân Foundation hoặc tự xưng là Foundation ở spawn.
- Hỗ trợ nhóm người chơi bị kẹt ở spawn thời đầu
- Tham gia dựng lên một vài bức tường ở spawn`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'JackGm147') {
            const embed = new MessageEmbed()
                .setImage(`https://static.miraheze.org/2y2cwiki/d/d1/Jackgm147.png`)
                .setTitle(`JackGm147 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- JackGm147 là một người chơi kì cựu của server, anh tham gia server từ sớm và là một thành viên của đội Highway ( sơ khai )
- Ban đầu Jack được biết đến cái tên Maple, anh là người đã Backdoor được server và là member đầu tiên có quyền OP nhưng đã bị Owner server chặn bỏ, sau đó anh bắt đầu sử dụng tên JackGM147 và cũng tham gia khá nhiều vụ Backdoor sau này
- Anh cũng tham gia khá nhiều clan lớn như DUV, RPG,.....
- Sau này anh sử dụng lại cái tên Maple và đã hồi sinh lại spawn cùng với HelloTuiLaFinn, IRM, Nhoihotme,......
- Jack còn là một người chơi thuộc top kill của server khi đã kill khá nhiều newbie
- Hiện tại Jack đang chơi solo và đang săn 1 vài người trong server như YT_DragonMini ( thanh niên cắn lén )
- Tình trạng: Vẫn còn thở`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Maple') {
            const embed = new MessageEmbed()
                .setTitle(`Maple | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Duper đầu tiền của sv với set đồ gần như op nhất sv thời kì đầu
- Maple với TheGreatWall rất bí ẩn nên k có thông tin nhiều nên chỉ biết hiện nay đã mất tích, nhiều người cho rằng Maple là một nick của JackGm147 lập ra để cho đồ.`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Killer112') {
            const embed = new MessageEmbed()
                .setTitle(`Killer112 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Hiện tại là chủ clan Foundation thay cho Andrew, builder xịn xò con bò nhất của clan
- Hiện nay Foundation không còn hoạt động nhiều nên Killer112 chuyển sang thành builder tự do, các clan có thể nhờ hoặc thuê về xây base giúp ( 10/10 build, hơi ít online )`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'JimBoKhoa123') {
            const embed = new MessageEmbed()
                .setTitle(`JimBoKhoa123 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Là 1 thằng member giết ENDER DRAGON đầu tiên cùng với ZzHoangKhangzZ
- Anh từng leak coord 1 trong những base khá to của Foundation để đi hú hí với HoangKhang theo tiếng gọi con chim, một trong những người có thanh kiếm enchanted sharpness lv.32k`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === '0_Name') {
            const embed = new MessageEmbed()
                .setTitle(`0_Name | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Simp trúa Tể Của Sever 2Y2C
- Từng là một người mở đầu cho cuộc xâm lăng spawn lần 1 do Foundation khởi đầu và anh là người giết rất nhiều member, từng mãi đi làm máy farm exp rồi để BASE 25K bị phá bởi đb The Tower hiện nay vẫn còn online và đi kiếm thêm em gái nuôi và làm dàn Harem phiêu du ở TheMegaDrain`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'LapisG') {
            const embed = new MessageEmbed()
                .setTitle(`LapisG | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- LapisG là thằng đẹp trai nhất White Wolf.
- LapisG là 1 thằng dau buoi re rach.
- LapisG đang bị truy nã.
- LapisG là một đứa đa sầu đa cảm :'(`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'memphis') {
            const embed = new MessageEmbed()
                .setTitle(`memphis | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- memphis lần đầu tham gia server vào ngày 26/12/2020 với ingame là kenzz và caubengayngo.
- Chơi được một khoảng thời gian đến tháng 1 thì anh gặp một player tên là GodFire và được mời tham gia team HOG.
- Hoạt động trong đó được 2 tháng thì team tan giã và memphis trở thành một thằng vô gia cư.
- Khoảng thời gian đó anh đã đổi tên của mình sang memphis. 
- Trong một lần đi trên highway anh đã gặp một player tên PrinceLakeVN và đã cũng nhau lập một team có tên là White Wolf.
- Sau này anh đã lãnh đạo team để xây dựng những công trình nổi tiếng trong server như: Tượng Bác Hồ, logo whitewolf tại spawn,...
- Sau một khoảng thời gian lãnh đạo bên White Wolf thì anh bắt đầu chán việc build và tham gia vào nhóm phượt của Huy chuột nhưng đã tan rã.
- Anh đã cố gắng hồi sinh nhóm phượt nhưng bất thành.`,
                    inline: true
                },
                    {
                        name: `Một số điều thú vị`,
                        value: `- Trong khoảng thời gian 2 team Vakyla và F11 xảy ra war thì memphis gần như là một đồng minh khá đáng tin của Vakyla vì một số thành phần thành viên của F11 đã phá + cản trở việc xây dựng một số dự án của team anh ấy.
- Nhưng sau này đột nhiên memphis thông báo rằng đã gia nhập F11 và bắt đầu chống lại Vakyla( bằng mõm ).
- Khoảng thời gian còn hoạt động trong HOG thì memphis( lúc đó là caubengayngo ) có quan hệ khá xấu với GodFire cho nên khi HOG tan rã caubengayngo đã đổi tên thành memphis để cắt đứt mối quan hệ với HOG.`,
                        inline: true
                    },
                    {
                        name: `Bổ sung`,
                        value: `- Memphis cũng là quản trị viên của group "Cộng đồng Anarchy 2y2c" trên facebook với hơn 1000 thành viên.`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'vanbinh') {
            const embed = new MessageEmbed()
                .setTitle(`vanbinh | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Truyền nhân của Bình GOLD
- Một trong những người chơi đời đầu trong SV
- Người đầu tiên tới 100k lúc sv mới mở đc vài ngày
- Anh ấy cũng là 1 builder có số công trình để đời khu thung lũng lúa mì mini, base Haloween The Shield.
- Hiện là 1 builder tự do có thể tuyển về build ( build 9/10 )`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Kuro_Here') {
            const embed = new MessageEmbed()
                .setTitle(`Kuro_Here | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Kẻ lưu lạc
- Đây là một người chơi đời đầu, 1 builder lưu lạc trong 2y2c chưa có mục đích gì lớn để làm
- Anh giữ bí mật tốt tới nổi 1 thằng member trong team không chịu được phải nói coord cho thg Finn phá base
- Hiện là builder tự do và đang làm nô lệ builder cho Ginkei`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'DanhhNoob') {
            const embed = new MessageEmbed()
                .setTitle(`DanhhNoob | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Cánh tay phải của DUV, anh là thằng đb dám tẩn cả chủ clan
- Anh từng rời clan và đi phiêu du cùng hội DUPE từng tai tiếng khi dẹp Foundation ở spawn nhưng lại dính cauluong
- Anh cũng là 1 trong những pvper chủ lực của clan đã cống hiến không ít, sau đó anh trở thành AnCapNganHang, là 1 thằng khốn nạn gì đó thì anh em đọc đều từng trải rồi`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'TCT') {
            const embed = new MessageEmbed()
                .setImage(`https://cdn.discordapp.com/attachments/764799307991220254/794457405063954472/Player___GoCryBabe_3.png`)
                .setTitle(`TCT | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Từng Là Trợ Thủ Đắc Lực Của Ginkei
- Với khả năng spy, học tập, đánh đấm không khác gì mật vụ kingman.
- Khả năng copy như con mắt sharingan của Obito
- Hiện còn onl và phiêu với nhiều clan và công trình khác nhau`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'MoneyDogDie') {
            const embed = new MessageEmbed()
                .setTitle(`MoneyDogDie | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Vào servers Vào Đầu Tháng 4
- MoneyDogDie hay còn gọi là "MDD" đang sở hữu 1 kênh YT có lượng Sub trên 400
- MDD đang là leader của team MDD và là thành viên của hơn 5 team khác
- MDD dù có xây vài công trình nhưng không để lại nhiều dấu ấn vì đó không phải sở trường của anh ta, các công trình như MDD 1, MDD 2, Summer UnMDD, MDD 3, ...
- Hiện tại anh ta đang làm cho cloudyshop và từ bỏ build và chuyển dần sang Crystal PvP
- Mục tiêu của anh ta hiện tại là đi đến rìa thế giới và kênh YT đạt 500 sub`,
                    inline: true
                },
                    {
                        name: `Thông tin khác`,
                        value: `- Discord MDD Team: https://discord.gg/J2VPuhCCEV
- Youtube channel: https://www.youtube.com/channel/UCf2uMUQahnqne6CGBXxMo3g`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'NguyenSugi') {
            const embed = new MessageEmbed()
                .setTitle(`NguyenSugi | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Nguyên Sugi (hay còn gọi Sugi) là một player, youtuber của 2y2c.org.
- Anh ta tham gia vào server khoảng tháng 11-12.
- Anh ấy nhanh chóng nổi lên với một số video về "hack" và "reviewbase".
- Anh ta từng là member của Homeless Base[1] do Letch làm leader.
- Vào ngày 14-2-2021, do mâu thuẩn nội bộ nên anh ta cùng với LogWorld và Onii rời team và lập nên The Holden.`,
                    inline: true
                },
                    {
                        name: `Hoạt động và sự nghiệp`,
                        value: `- Anh ta tham gia server 2y2c.org vào khoảng tháng 11-12.
- Nguyên Sugi trở thành một youtuber 2y2c vào những ngày cuối tháng 1 với video "reviewbase" Homeless Base.
- Sau đó anh ấy bắt đầu làm video để chia sẽ cách download và install về các loại "hack" thông dụng.
- Hack đầu tiên mà anh ta hướng dẫn là Impact Client, tiếp sau đó là WWE Client,...
- Ngày 22-3-2021, anh ấy hướng dẫn download Meteor Client.
- Bắt đầu từ video đó, các video ngày trước và sau bắt đầu tăng view, nhiều người biết anh ta hơn, mỗi video của anh ta tầm 1k view đổ lên.
- Những ngay sau đó, anh ta bắt đầu chểnh mảng với công việc youtube của mình, tần suất ra video rất chậm (tầm 2 tháng), làm cho video ngày càng tụt view đi, mất đi một lượng lớn fan đã bỏ đi.
- Ngày 7-8-2021, anh ta đã comeback youtube 2y2c và lợi hại hơn xưa, tần suất ra video cũng trở về.`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'oppocameraphone6') {
            const embed = new MessageEmbed()
                .setTitle(`oppocameraphone6 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- oppocameraphone6 là 1 trong những player của 2y2c.org.
- Anh ấy tham gia sever vào trưa 16/9 là 1 trong những oldfag và là 1 player thời đầu không đóng góp gì quá đặc biệt.
- oppocameraphone6 là chủ clan Forever Alone được thành lập với mục đích đi chu du khắp 2y2c sau 1 thời gian thì 1 số thành viên đã off sv và clan chỉnh thức tan rã
- Một số công trình mà clan Forever Alone để lại là: Phá hủy đường cao tốc, phá spawn
- Vì còn muốn chơi 2y2c mà không cô đơn thì vào ngày 29/12 thì trong khi đi đang cao tốc x+ thì gặp sondepzai 1 người đang đi ở cao tốc, anh ấy ngỏ lời mời sondepzai vào clan, vậy clan Infinte Eternal(IE) được thành lập, clan IE đến giờ vẫn hoạt động và đóng góp được 1 ít công trình vào 2y2c.`,
                    inline: true
                },
                    {
                        name: `Đóng góp`,
                        value: `- Người đầu tiên phá spawn( vì war với 1 số người trong dis 2y2c thì anh ta đã phá spawn với 1 lượng lớn tnt và hơn 125 con wither )
- Phá đường cao tốc x+ khi chưa được phủ obsidan
- Tham gia công cuộc tàn sát newbie`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Meloncheo') {
            const embed = new MessageEmbed()
                .setTitle(`Meloncheo | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Chủ clan PET
- Khá ít thông tin về anh trừ đợt Đại Chiến Các Clan và sau đó cũng thấy anh im hơi lặng tiếng
- Có comeback và mở 1 SHOP nhưng doanh thu quá ngu nên đã nghĩ luôn server.`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'DuyKhang') {
            const embed = new MessageEmbed()
                .setTitle(`DuyKhang | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Cánh tay trái của DUV, chịu đựng tốt là một người mà tôi từng ngưỡng mộ, khả năng pvp cao
- Là builder tốt phải nói là cao thủ, tôi từng có ý định đưa anh ta làm chủ clan sau khi tôi rời, có năng lực chỉ đạo chính là lý do tôi muốn nâng cao anh ta.
- Anh ta thích ở ẩn nên không nhiều tai tiếng chứ djtme nếu thích anh lên trùm server.
- Sau này chuyển giao acc cho tôi và pay màu ( F for Duykhang )`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'kubookutevip') {
            const embed = new MessageEmbed()
                .setTitle(`kubookutevip | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Join sv vào khoảng cuối tháng 10
- Anh ấy là 1 cpvper. Với tài năng của mình anh ấy đã tiêu diệt rất nhiều đối thủ+player có tiếng
- Với tài năng cua gái của mình anh ấy đã chiếm được rất nhiều cô gái trong 2y2c.
- Đầu tháng 1 anh ta gặp tom ( người sẽ có nhiều đất diễn sau này ).
- Anh ta và 1 số người bạn từng thống trị ở spawn nether gây nhiều ức chế cho 1 số newbie
- Hiện tại anh ta đang là thành viên của F11 và là cái chân giữa cho tom`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'tommmm') {
            const embed = new MessageEmbed()
                .setTitle(`tommmm | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Ngày đầu tiên vào sever là cuối tháng 11 năm 2020, lúc đó vào server với acc mang tên là pain
- Mục đích lúc đó vào sever chỉ là muốn build thôi, sau đó tham gia dự án 119
- Và sau khi tìm hiểu về hack thì đã đi crystalpvp ở spawn, và gia nhập team vakyla 1 thời gian thì team giải tán
- Lúc đó cũng có danh tiếng trong sever thì thành lập ra team F11 với datlight, rồi bắt đầu đi chiến với những người khác ví dụ là zZHoangKhangZz, xXhungXx, phuongprofi và dành được chiến thắng
- Khi đã hết đối thủ để crystalpvp thì đã rút khỏi 2y2c vào ngày 19 tháng 5 năm 2021`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'DatLight') {
            const embed = new MessageEmbed()
                .setTitle(`DatLight | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Anh ta vào sv vào khoảng tháng 11 đến 12/2020.
- Anh ta là 1 pvper có kĩ năng cao từng tham gia nhiều cuộc chiến từ lớn đến nhỏ bằng chứng cho việc đó là số kill cao
- DatLight đang 1 là phó thủ lĩnh của F11
- Kill rất nhiều player có tiếng trong 2y2c
- Tham gia nhiều đợt fix spawn nether ( nhà của anh ấy )
- Nhiều người đánh giá anh khá thân thiện,thằng nào đụng tới friend là ăn chém
- Hiện tại anh ta vẫn còn on 2y2c và đang tham gia cuộc chiến giữa F11 và vakyla`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Sn1per') {
            const embed = new MessageEmbed()
                .setTitle(`Sn1per | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- God of Horny
- Xuất hiện trong server vào cuối tháng 12
- Là cánh tay trái của kubookutevip
- Cũng kill rất nhiều Players có tiếng nhưng có vẻ anh ta mạnh hơn DatLight rất nhiều
- Hồi trước thường đứng trụ cai quản Spawn Nether nhưng giờ thì ko
- Tính cách của anh thì đụng newbie là giết ngoại trừ nhưng người quen và những người trong F11
- Vẫn on trong server và cũng tham gia war cùng team với Vakyla`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'PrinceLakeVN') {
            const embed = new MessageEmbed()
                .setTitle(`PrinceLakeVN | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Lake là người tạo ra ww`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'Omama20') {
            const embed = new MessageEmbed()
                .setImage(`https://uphinh.vn/images/2022/04/25/0195f26746e374d448f9b7d9c45efcb9.png`)
                .setTitle(`Omama20 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Tham gia vào server 5/12/2021 
- Khi mới vào server và team đầu tiên a định vào đó là F11, nhưng vài sự cố khiến anh ghét f11 lúc đó và chọn Vakyla là team của mình
- Anh vô Vakyla 19/12/2021 lúc đó anh được phỏng vấn nhưng do lí do nào đó mà tất cả member đều phải cpvp để bước vào team nhưng anh thì ngoại lệ
- Mới đầu vô a chỉ làm cpvp phụ cho team nhưng dần dần 
- Lần đầu war vào ngày ** anh ta rất phế die liên tục nhưng khi war với vakyla nhiều dần dần a trở lên pro hơn
- Anh cũng là member đỉnh cao leo role cực nhanh khi chỉ 2 tuần với tư cách member lên Cố Vấn Tối Cao
- Tình trạng hiện tại: đang chờ Hentaiz hồi sinh`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'CongHKM1') {
            const embed = new MessageEmbed()
                .setTitle(`CongHKM1 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- CongHKM1 Tham gia 2y2c vào ngày 12/3/2021
- Anh ta từ đầu là 1 builder sau khi gây war với 1 thành viên trong clan bạt nhẫn anh ta đã trao hết stash và base của team cho F11 để trả thù (chính sn1per là người đã mời anh ấy tham gia F11)
- Trong F11 anh ta là 1 thành viên không mấy nổi và hay bị fade (sn1per) bắt nạt
- Từ tháng 6 anh ta off 2y2c đến tháng 10 thì online
- Đến tháng tháng 12/2021 vakyla và F11 hợp tác với nhau để dọn rác(hpg) ở spawn từ đó anh ta được quan tâm nhiều hơn và trình càng ngày càng cao
- Với trí thông minh anh ta có thể tự build được cfg ( hoặc skid của người khác ) và bắt kịp meta 2y2c cực kì nhanh
- Anh ta có sở thích gáy, ngắm loli và dùng rác để dọn rác
- Tình trạng hiện tại: vẫn còn sống nhăn răng`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'BruhSoSuck') {
            const embed = new MessageEmbed()
                .setTitle(`BruhSoSuck | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- BruhSoSuck tham gia vào 2y2c giữa tháng 9/2021 dưới acc IamDreamm
- Lúc mới vào thì anh tham gia một team build nhỏ nhưng vì quá chán nên đã phá base của team
- Sau khi bị phát hiện anh lập acc clone spy team đó một lần nữa
- Anh đã có ý định tham gia team mới và vào cuối tháng 10 anh tham gia C20
- Ở lâu thấy C20 khá rác nên anh bỏ và xin vào Vakyla vào đầu tháng 11
- Dù hồi đấy cpvp như ... được nhân nhượng nên anh được vào Vakyla nhờ Chika chơi hộ :))
- Rồi trình từ từ phát triển sau 6 tháng anh là một trong những tv còn online nhiều nhất trong Vakyla
- Tình trạng : Đang sủi do onichan rồng bỏ bé chi :<
- Sở thích đặc biệt của sú: Bú liếm kit cực mạnh`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'HackerShader') {
            const embed = new MessageEmbed()
                .setImage(`https://uphinh.vn/images/2022/04/20/bcfc537d0ac7c9988d41681e806fb9a4.png`)
                .setTitle(`HackerShader | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- 3 vô: vô clan, vô team, vô server đầu tháng 12
- Ban đầu vô server là chỉ để đi loanh quanh và thăm quan server có gì vui
- Cho đến đến khoảng tháng 1 - 3, tham gia đội phá HeroMC với mục đích chả để làm gì
- Bắt đầu xây dựng highway 5x3 tại x-
- Từ tháng 4 đến bây giờ: vẫn làm đường, đào tới -100k, lấp obsidian tới -40k
- Hiện tại: Đào X+, Z+
- Trạng thái: Còn thở ( online bình thường )
- Công việc hiện giờ: Vẫn còn hoạt động với nhiệm vụ đào đường cao tốc`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'TitanHellotin132') {
            const embed = new MessageEmbed()
                .setImage(`https://static.miraheze.org/2y2cwiki/1/13/Titan_skin_April2now%3F.png`)
                .setTitle(`TitanHelotin132 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Tham gia server vào 28/2/2021 với mục đích dạo chơi quanh spawn và trải nghiệm hack nhưng sau này anh đã xác định chí hướng của mình
- 17/3/2021, anh ta cùng một người bạn của mình xây 1 căn cứ nhỏ ở 50k vẫn sống sót cho đến nay
- Nhờ cơ hội đó, Titan đã làm quen gặp gỡ rất nhiều oldfag và midfag
- Vào giữa 6/2021, anh ta đã tìm dc coord base Chill Palace của TheTower và quyết định đi đến đó cùng bạn mình gom kit
- Cuối 6/2021 có đợt dupe nên Titan đã tạm dừng chuyến đi và tạo cho mình một stash nhỏ
- Tầm tháng 7-8, Titan đã tham gia Highway2Y2C
- Nhờ sự tích cực của mình, anh đã leo lên mods và sau đó là owner của Highway2Y2C
- Titan đã tham gia team Univer và lên chức mods của MDD và Univer
- 14/11, Highway2Y2C giải tán, Titan quay về xây base
- Cuối 11/2021, Titan tham gia Highway Constructor và tham gia chỉ đạo các worker mới`,
                    inline: true
                },
                    {
                        name: `End`,
                        value: `- Titan off server vào ngày 11/4/2022 do hư máy nhưng anh ta vẫn luôn on discord thường xuyên và chỉ đạo một số hoạt động của 2Y2C Highway Constructor`,
                        inline: true
                    },
                    {
                        name: `Thông tin ngoài lề`,
                        value: `- Fun fact: Titan được khá nhiều newfag ghét khi anh ta lâu lâu lại đi võ mồm với vài người khác`,
                        inline: true
                    },
                    {
                        name: `Những công trình anh ta từng tham gia`,
                        value: `- Base địa đạo (17/3/2021)
- MDD 1 (tháng 5)
- MDD 2 (cuối tháng 5)
- MDD Sea (cuối tháng 5)
- M.O.B Mother Of Bases (tháng 6)
- MDD 3 (tháng 7)
- Black Knight 1 (tháng 7)
- Univer Farm (cuối tháng 7)
- Black Knight 2 / Univer's Beach (tháng 8)
- Bamboo Base Univer (tháng 9)
- Titan's Lolicon Base (tháng 10)
- MDD Spawn Base (tháng 10)
- MDD 4 (2/2022)
- Nether Highway (tháng 6 cho đến nay)
- 125K X+
- 100K X- (repaired)
- 125K X-
- 50K Z+
- 80K Z+
- 125K Z+
- 40K Z-
- 125K Z-
- 1M X+`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'ItzNatty_') {
            const embed = new MessageEmbed()
                .setImage(`https://cdn.discordapp.com/attachments/917578965265297448/970579506203074580/image-removebg-preview_1.png`)
                .setTitle(`ItzNatty_ | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Tham gia server vào 13/6/2021
- Vào server với mục đích muốn được sinh tồn những vì mấy thằng hãm loz của 2y2c thời đó scam và ăn hiếp Natty nên đã tìm hiểu về cpvp
- Vào Vakyla khoảng từ giữa tháng 7 hoặc đầu tháng 8 vì được KenPro147 đưa yêu cầu gia nhập team sau khi thấy anh ấy Cpvp quá khét ở 119 Nether khi gây lộn với fuckmen và akabon
- Và không phụ lòng mọi người anh ấy đã trở thành cơn ác mộng của F11 vì bất cứ khi nào thấy Natty là F11 chạy như chó ghẻ vì sợ lên montage, còn nếu không chạy thì cũng chết và vẫn lên montage
- Đã nghỉ chơi 2y2c kể từ lúc server lên 1.17.1 vì bị Omama dẫn dắt vào con đường nghiện liên minh`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'ZenAD212') {
            const embed = new MessageEmbed()
                .setTitle(`ZenAD212 | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- ZenAD212 xuất hiện vào tháng 3/2022 anh là 1 assasin thực thụ khi ẩn danh ko tiết lộ thân phận
- Anh clear vakyla ez vcl và còn farm kill SonUwU 1 thời nhưng khi bị farm kill nhiều quá SonUwU đã raid acc
- Acc clone của Omama20`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'xXHungXx') {
            const embed = new MessageEmbed()
                .setTitle(`xXHungXx | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Tiểu sử`,
                    value: `- Xuất hiện vào ngày 21/9/2020 anh là 1 thằng mõm chúa và chả ai solo mõm lại được
- Anh ta và đồng bọn backdoor server và sau đó bị Maple phá base
- Sau đó nguyên team anh ta đi đánh Foundation
- Vào khoảng 2/2021 Hưng Nắm Trùm Spawn , Cùng Đồng bọn phuongprofi tuyên bố trùm server 
- Vào khoản dupe the end vẫn còn team Của xXHungXx có những người như YT_DragonMini, phuongprofi, JustOnlyNoob, Rùa ra chiếm the end ai thả lừa xuống sẽ bị lấy hết kit dupe và chết
- Đến tháng 5/2021 xXHungXx off server và vài tháng sau comeback và lại off đến khoảng tháng 2/2022 
. xXHungXx comeback server sau đó trở thành 1 thằng nô lệ của YT_DragonMini`,
                    inline: true
                })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'SonUwU') {
            const embed = new MessageEmbed()
                .setImage(`https://static.miraheze.org/2y2cwiki/0/05/2022-04-08_18.22.35.png`)
                .setTitle(`SonUwU | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Giới thiệu`,
                    value: `- SonUwU còn có một ingame khác đó là IAMSUCVAT
- Tên thật của SonUwU là Lê Thanh Sơn và Hiện đang sinh sống tại Hà Nội
- Anh ta vào server khoảng cuối tháng 8`,
                    inline: true
                },
                    {
                        name: `Tiểu sử`,
                        value: `- Anh ta vào server với mục đích ban đầu đi build, sau đó anh ta gặp được TN1 vào được tuyển vào team BlackPool tuy nhiên sau đó base của team đã bị phá bởi cau7mau, sau đó các thành viên trong team ít on dần và team đã giải tán không lâu sau đó.
- Đầu tháng 11 anh ta bị được một player có ingame là TN1 dụ dỗ vào F11 và sau đó đi war khá nhiều
- Đầu tháng 12 vì bức xúc vì nội bộ team nên đã rời, sau đó anh ta đã gặp cau7mau người đã phá base người xưa và làm quen.
- Lúc đó anh ta bị F11 gọi là phản bội và anh ta quyết định vào HPG (SonUwU rủ thêm NBTT và Nam)
- Hiện tại anh ta vẫn đang tiếp tục ở trong team HPG
- Vai trò chủ yếu của SonUwU trong team là đi cpvp và là một spawnfag chính hiệu
- Anh ta đã đạt được nhiều thành tựu trong server với nhiều dự án
- Một trong số đó không thể không kể đến là dự án dọn sạch một khu vực lava ở spawn`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
            message.channel.send({ embeds: [embed] });
        } else if (args[0] === 'm_GN_m') {
            const embed = new MessageEmbed()
                .setTitle(`m_GN_m | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Giới thiệu`,
                    value: `- m_GN_m join server vào khoảng tháng 3 hoặc tháng 4/2021.
- Là một builder chăm chỉ, một youtuber và đồng thời cũng là...trò hề của cả server
- Kênh YT của GN: https://www.youtube.com/channel/UCEeRTp-_JIMw2Jfp-lZGPLg`,
                    inline: true
                },
                    {
                        name: `Tiểu sử`,
                        value: `- Join vào tháng 3, lúc đầu anh không có gì quá nổi bật nhưng đến khi GN đăng một video về base Hello Sea của mình cùng NoobPlayer123, tất cả player của 2y2c đều trầm trồ và thán phục anh
- Anh đã trở thành idol của rất nhiều người, là youtuber gây được tiếng vang thời bấy giờ
- 20/6, Hello Sea bị phá bởi DatLight, vì quá cay cú GN đã làm ngay video bốc phốt F11 và nhận cực kì nhiều gạch đá vì những lí luận của anh
- 7/2021, GN đã xây nên Hello Sky như một base thay thế cho Hello Sea, đồng thời GN cũng xây nên base đại đấu trường để tổ chức event
- Base đại đấu trường đã bị phá vào ngày 20/7 do trước đó GN đã gây gỗ với MDD
- GN tiếp tục gây sự Ginkei và kết cục là Hello Sky bị phá nốt bởi Ginkei và MDD ngày 22/8
- GN đã xây base nhỏ gần spawn nhưng đều bị phá trong vòng vài ngày
- 9/9, GN xây logo của mình tại 3K -3K
- 16/9, GN xây nên Midnight City và trở thành một trong những base hiếm hoi khi được xây ở the end
- Sau này vì quá nhiều drama và tranh cãi, GN đã ẩn hết video ở kênh của mình`,
                        inline: true
                    },
                    {
                        name: `Thông tin khác`,
                        value: `- Anh ta khá cục súc và bảo thủ và dường như chỉ on trên Facebook nên khá khó để nói chuyện với anh ta
- GN cũng từng với một người khác xây nên map art private cho riêng mình và cũng có map art về logo của anh ta do một player khác tặng`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
        } else if (args[0] === 'NguyenPham') {
            const embed = new MessageEmbed()
                .setImage(`https://static.miraheze.org/2y2cwiki/b/b5/Nguyenpham_th%E1%BB%9Di_c%C3%B2n_newbie.jpg`)
                .setTitle(`NguyenPham | Admin: ${HungChannels.tag}`)
                .addFields({
                    name: `Giới thiệu`,
                    value: `- Là một player join từ tháng 6/2021, là một trong những người "nổi tiếng" nhất server 2y2c với lượng fan đông đảo lên đến vài trăm người
- Với câu slogan nổi tiếng: "Tao sẽ backdoor server", nguyenpham đã nhận được đông đảo fan và trở thành idol giới trẻ, trò hề của server
- Khi nhắc đến backdoor, không thể kể đến Nguyenpham`,
                    inline: true
                },
                    {
                        name: `Tiểu sử`,
                        value: `- Join từ 6/2021, lúc đầu anh ta chỉ đi lòng vòng khám phá spawn nhưng sau này anh ta cũng đã đăng một vài video về cuộc hành trình của mình
- 22/6, NguyenPham định cư tại base HOG và gặp gỡ mem ở đây
- Cho đến 17/7, NguyenPham đã đăng một video cực hot mang tên 2Y2C:dọn đống kit đi trốn với câu nói "Tao sẽ backdoor server", ngay từ video này từ khóa "backdoor" lên hot trend 2y2c
- NguyenPham đã cùng các "fan" xây nên Villa 2S, đồng thời cũng tạo ra team 2S
- Vài ngày sau, base Villa 2S đã bị phá bởi DattVn
- 6/8, NguyenPham đăng video bốc phốt, tuyên chiến G5 nhưng lại thua sml nên đã đăng video xin lỗi G5 sau sự kiện này
- 11/8, NguyenPham war vs Genesis và gặp gỡ người lãnh đạo ở đây là Rainkid và khanh1161 và tất nhiên anh ta lại thua tiếp
- Khoảng thời gian sau, NguyenPham mở một server tên 2s2m trong thời gian này anh cũng đang tập cpvp
- Tuy nhiên, NguyenPham khá chán đời khi lại suốt ngày đăng bài về server của mình trên group facebook 2y2c làm cho các mem chán nản và đòi tẩy chay anh ta`,
                        inline: true
                    },
                    {
                        name: `Lại backdoor`,
                        value: `- 3/1, Nguyenpham lại comeback việc backdoor, tôi sẽ nói hoa mĩ là "khai thác lỗ hổng" đi
- Anh ta cũng tiện tay public thêm những lỗ hổng của server 2y2c như lỗi pin, dupe, fly và lỗi nhận point và xác suất rất nhỏ là sẽ làm được và tất nhiên chả có cái nào là real cả`,
                        inline: true
                    },
                    {
                        name: `Thông tin khác`,
                        value: `- NguyenPham tuy chả có gì đặc biệt nhưng chính phát ngôn của anh ta đã khiến anh ta trở thành chúa hề trong mắt mọi người
- Anh ta cũng có thể bị lỗi bàn phím khi anh ta toàn nhắn caplock lẫn lộn chả ai đọc được gì`,
                        inline: true
                    })
                .setFooter(`Người yêu cầu: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
                .setColor('RANDOM');
        } else return message.channel.send(`Không có thông tin về người chơi này`);
    }
}