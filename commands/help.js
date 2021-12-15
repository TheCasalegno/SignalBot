const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The commands of this bot",
    aliases: "aiuto",
    execute(message, args) {

        const embed = new Discord.MessageEmbed()
            .setTitle(":frog: Signal the Bot :frog:")
            .setColor("GREEN")
            .setDescription("Hi, I'm Signal The Bot, these are my (few) commands you can use")
            .addField(":compass: USERSTATS :compass:", "Use this command to view your stats via ** Project-GC **\n*For optimal use, I recommend you to change your nickname on the server, such as that of Geocaching!* \n **|** `!stats [user]` **|** `!userstats [user]` **|** `!statistics [user]` **|**", false )
            .addField(":compass: BADGEBAR :compass:", "Use this command to view your badge via ** Project-GC **\n*For optimal use, I recommend you to change your nickname on the server, such as that of Geocaching!* \n **|** `!badgebar [user]` **|** `!badge [user]` **|** `!badgen [user]` **|**", false )
            .addField(":compass: PROFILE :compass:", "Use this command to get the link of your **Geocaching** profile\n*For optimal use, I recommend you to change your nickname on the server, such as that of Geocaching!* \n **|** `!profile [user]` **|** `!user [user]` **|** `!p [user]` **|**", false )
            .setFooter("Bot created by TheCasalegno#4196", "https://iili.io/7wpIWX.png")
        message.channel.send({ embeds: [embed] })
    }
}