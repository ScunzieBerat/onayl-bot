const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(cclient, message, args) => {

let cembed = new Discord.RichEmbed()
.setAuthor(cclient.user.username, cclient.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.addField(" <a:sag:754617925788237854> Bot Verileri", `Toplam Sunucu **|** **${cclient.guilds.size}** \nToplam Kullanıcı **|** **${cclient.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal **|** **${cclient.channels.size}**`)
.addField(" <a:sag:754617925788237854> Yapımcılar", `<@749915024109207634> **|** **ScunzieAmca Hâzretleri#6666**`)
.addField(" <a:sag:754617925788237854> Gecikmeler", `Bot Pingi **|** **${cclient.ping}** \nMesaj Gecikmesi **|** **${new Date().getTime() - message.createdTimestamp}**`)
.setColor("#ffd100")
message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istatistik','yapımcım'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'botbilgi',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
