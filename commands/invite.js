const Discord = require('discord.js');

module.exports = {
    name: "invite",
    description: "Il link di invito del server",
    aliases: "invito",
    execute(message, args) {

        const embed = new Discord.MessageEmbed()
            .setTitle(":link: Invito del server :link:")
            .setColor("GREEN")
            .setDescription("Ecco qui il **link di invito** da condividere per entrare in questo server: __https://discord.gg/rYSmerXVD6__")

        message.channel.send({ embeds: [embed] })
    }
}