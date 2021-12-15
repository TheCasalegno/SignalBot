module.exports = {
    name: "badgebar",
    description: "BadgeBar dell'utente via Project-GC",
    aliases: ["badgen", "badge"],
    execute(message, args) {

        var user = message.member.nickname

        if(!user) {
            user = message.author.username
        } 
        if(user.includes(" ")) {
            user = user.replace(" ", "%20")
        }

        var link = "https://cdn2.project-gc.com/BadgeBar/" + user + ".png"

        message.channel.send("Here is the BadgeBar of your profile:")
        message.channel.send(link)

    }
}