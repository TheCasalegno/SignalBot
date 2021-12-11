module.exports = {
    name: "profile",
    description: "Profilo dell'utente di Geocaching",
    aliases: ["profilo", "p"],
    execute(message, args) {

        var user = message.member.nickname

        if(!user) {
            user = message.author.username
        } 
        
        if(user.includes(" ")) {
            message.channel.send(":x: **Errore!** Il tuo username contiene il seguente carattere non ammesso: **' '** *(spazio)* :x:")
            return
        }

        var link = "https://www.geocaching.com/p/?u=" + user

        message.channel.send("Ecco a te il link del tuo profilo GC:")
        message.channel.send(link)

    }
}