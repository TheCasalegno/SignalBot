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
            message.channel.send(":x: **Errore!** Il tuo username contiene il seguente carattere non ammesso: **' '** *(spazio)* :x:")
            return
        }

        var link = "https://cdn2.project-gc.com/BadgeBar/" + user + ".png"

        message.channel.send("Ecco a te la tua BadgeBar del tuo profilo:")
        message.channel.send(link)

    }
}