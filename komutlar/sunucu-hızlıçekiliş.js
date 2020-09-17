const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
    .setTitle("Epick Bot Çekiliş Sistemi", true)
    .addField("Çekilişi Yapan", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField(`Çekilişi Kazanan`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek  Kazanan`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek  Kazanan 2`, `<@${message.guild.members.random().id}>`, true)
    .setColor("#ffd100")
    .setDescription('')
      message.react('754645158712180837')
    return message.channel.sendEmbed(çekiliş);

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["hızlıçek"],
  kategori: 'çekiliş',
  permLevel: 2
};

exports.help = {
  name: 'hızlıçek',
  description: 'Çekiliş yapar. (klasik)',
  usage: 'hızlıçek'
};  