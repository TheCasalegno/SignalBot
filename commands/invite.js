const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "Il link di invito del server",
    aliases: "invito",
    execute(message, args) {

        const embed = new Discord.MessageEmbed()
            .setTitle(":link: Bot invitation link :link:")
            .setColor("GREEN")
            .setDescription("Here is the ** invite link ** to add this bot in your server:\n__https://discord.com/oauth2/authorize?client_id=919001856263487488&scope=bot&permissions=274878220288__")

        message.channel.send({ embeds: [embed] })
    }
}