module.exports.run = (Client, message, args) => {
    const Discord = require("discord.js")
    var row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageButton()
            .setCustomId("Oui")
            .setLabel("Acceptez")
            .setStyle("SUCCESS")
            .setEmoji("👍")
    ) .addComponents(
        new Discord.MessageButton()
            .setCustomId("Non")
            .setLabel("Refusez")
            .setStyle("DANGER")
            .setEmoji("👎")
    )
    Client.channels.cache.get("992853019127468133").send({components: [row]})
}