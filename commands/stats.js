module.exports = {
    name: "stats",
    description: "Stats of the user via Project-GC",
    aliases: ["userstats", "statistics"],
    execute(message, args) {

        var user = message.member.nickname

        if(!user) {
            user = message.author.username
        } 
        if(user.includes(" ")) {
            user = user.replace(" ", "%20")
        }

        var link = "https://cdn2.project-gc.com/StatBar/" + user + ".png?includeLabcaches&quote=Signal%20The%20Bot"

        message.channel.send("Here are the statistics of your profile:")
        message.channel.send(link)

    }
}