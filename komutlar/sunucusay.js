const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.sendMessage('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  let tag = '王'
    const codare = new Discord.RichEmbed()
        .setColor("#ffd100")
    .setTitle(`Epick Sunucu Sayım`)
        .addField(" <a:dde:754644974443692083> Sunucudaki üye sayısı", message.guild.memberCount)
        .addField(" <a:dde:754644974443692083> Çevrimiçi üye sayısı", message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size)
        .addField(" <a:dde:754644974443692083> Seslideki üye sayısı", count)
    message.channel.send(codare);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['sayı'],
    permLevel: 0
};

exports.help = {
    name: 'say',
    description: 'Say',
    usage: 'say'
};