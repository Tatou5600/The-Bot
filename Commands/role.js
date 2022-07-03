module.exports.run = (Client, message, args) => {
    const Discord = require("discord.js")
    var row = new Discord.MessageActionRow()
    .addComponents(
        new Discord.MessageSelectMenu()
            .setCustomId("role")
            .setPlaceholder("Selectionnez un rôle.")
            .addOptions([{
                label: "Administrateur",
                description: "A tout les droits",
                value : "Administrateur"
        },{
            label: "Autorité Supérieur",
            description: "A beaucoup de permission",
            value : "Autorité Supérieur"
        },{
            label: "Autorité des Vocaux",
            description: "Régule les vocaux",
            value : "Autorité des Vocaux"
        },{
            label: "Autorité des Messages",
            description: "Régule les messages",
            value : "Autorité des Messages"
        },{
            label: "Autorité des Pseudonymes",
            description: "Régule les pseudomynes",
            value : "Autorité des Pseudonymes"
        }
    ])
    )
    Client.channels.cache.get("992903164422537346").send({content: "Menu de demande d'autorisation de rôle", components: [row]})
}