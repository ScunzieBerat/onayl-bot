const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:sag:754617925788237854> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=754775454493442101&scope=bot&permissions=0) \n <a:sag:754617925788237854> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/uWebCj7) \n <a:sag:754617925788237854> **Web Sitemizi Ziyaret etmek İçin (YAKINDA) ** [TIKLA](SİTE )`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL)
    .setColor(`#ffd100`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};