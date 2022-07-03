const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");
const Client = new Discord.Client({intents : ["GUILDS","GUILD_MESSAGES","GUILD_MEMBERS"]});

Client.on("ready", ()=>{
    console.log("Bot Ready.")
});

const fs = require("fs");
const { userInfo } = require("os");
const prefix = "*";

Client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"));

for(file of commands){
    const commandName = file.split(".")[0]
    const command = require(`./Commands/${commandName}`)
    Client.commands.set(commandName, command)
};

Client.on("messageCreate", message => {
    if(message.content.startsWith(prefix)){
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const commandName = args.shift()
    const command = Client.commands.get(commandName)
    if(!command) return message.channel.send({content: "Cette commande n'existe pas."})
    command.run(Client, message, args)
}
});

Client.on("interactionCreate", interaction => {
    if(interaction.isSelectMenu()){
        
        memberName = interaction.member.id

        if(interaction.values == "Administrateur"){
            roleWant = "889468318682054667"
        }
        if(interaction.values == "Autorité Supérieur"){
            roleWant = "956146953807331439"
        }
        if(interaction.values == "Autorité des Vocaux"){
            roleWant = "992855269660962917"
        }
        if(interaction.values == "Autorité des Messages"){
            roleWant = "993109697353756762"
        }
        if(interaction.values == "Autorité des Pseudonymes"){
            roleWant = "993109886407811102"
        }

        Client.channels.cache.get("992853019127468133").send({content: "<@"+memberName+"> demande a être "+interaction.values})
        Client.channels.cache.get("992853019127468133").send({content: "*controlle"})
        Client.channels.cache.get("992903164422537346").send({content: "Votre demande a été prise en compte"})
    }
})

Client.on("interactionCreate", click =>{
    if(click.isButton()){
        if(click.customId == "Oui"){
            console.log(roleWant)
            console.log(memberName)
            Client.channels.cache.get("992903164422537346").send({content: "<@"+memberName+"> votre candidature à été acceptée."})
        }
        if(click.customId == "Non"){
            Client.channels.cache.get("992903164422537346").send({content: "<@"+memberName+"> votre candidature à été refusée."})
        }
    }
})


Client.login("OTkyODM5MzY0OTE0NzA4Njkw.GXZc_2.XbFYd94Vgz5sU7m0n7LgiqVEjZWJZclFNoiUr8");