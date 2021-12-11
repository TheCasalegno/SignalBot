module.exports = {
    name: "stats",
    description: "Statistiche dell'utente via Project-GC",
    aliases: ["userstats", "statistiche"],
    execute(message, args) {

        var user = message.member.nickname

        if(user.includes(" ")) {
            message.channel.send(":x: **Errore!** Il tuo username contiene il seguente carattere non ammesso: **' '** *(spazio)* :x:")
            return
        }

        var link = "https://cdn2.project-gc.com/statbar.php?includeLabcaches&quote=Geocaching%20Italia&user=" + user

        message.channel.send("Ecco a te le statistiche del tuo profilo:")
        message.channel.send(link)

    }
}