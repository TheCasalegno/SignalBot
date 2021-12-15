module.exports = {
    name: "profile",
    description: "Profilo dell'utente di Geocaching",
    aliases: ["user", "p"],
    execute(message, args) {

        var user = message.member.nickname

        if(!user) {
            user = message.author.username
        } 
        if(user.includes(" ")) {
            user = user.replace(" ", "%20")
        }

        var link = "https://www.geocaching.com/p/?u=" + user

        message.channel.send("Here is the link of your Geocaching profile:")
        message.channel.send(link)

    }
}