const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "I comandi di questo bot",
    aliases: "aiuto",
    execute(message, args) {

        const embed = new Discord.MessageEmbed()
            .setTitle(":frog: Signal the Frog Bot :frog:")
            .setColor("GREEN")
            .setDescription("Ciao, sono il bot di Signal The Frog, questi sono i miei (pochi) comandi che puoi utilizzare")
            .addField(":compass: USERSTATS :compass:", "Usa questo comando per vedere le tue statistiche tramite **Project-GC** \n *Per un utilizzo ottimale, ti consiglio di modificare il tuo nickname nel server, come quello di Geocaching!* \n **|** `[!stats]` **|** `[!userstats]` **|** `[!statistiche]` **|**", false )

        message.channel.send({ embeds: [embed] })
    }
}