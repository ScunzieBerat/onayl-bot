const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.RichEmbed()  
.setAuthor(`Epick Yardım Menüsü`, client.user.avatarURL)
.setColor('#ffd100')
.setDescription(`<a:siren1:754644945570234410> Epick botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:sar1:754645159152582737> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:ortak:754617891214589973> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`<a:ayar:754645123941531708> \`${prefix}guard\`  `,true)
.addField(`__Sunucu Komutları__`,`<a:partner:754644998850478230> \`${prefix}sunucu\` `,true)
.addField(`__Eklenti Komutları__`,`<a:elmas:754617906867994656> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:hyprsqu2:754645153301528616> \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`<a:siren1:754644945570234410> \`${prefix}davet\` | Epick'yi Sunucunuza Davet Edersiniz\n<a:siren1:754644945570234410> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/avatars/754775454493442101/7f7eff5b475b325a5719defa72353d14.png?size=2048`)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  