const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = "-"

Client.on("ready", () => {
    console.log("bot opérationnel")
});

Client.on("messageCreate", message => {
    if (message.author.bot) return ;
 
    //-salut
    if (message.content ===prefix + "salut"){
        message.channel.send("salut !");
    }

    //-spam
    if (message.content ===prefix + "spam"){
        while(true){
            message.channel.send("spam");
        }
    }
});

Client.on("guildMemberAdd", member => {
    console.log("un membre a rejoint le serveur.");
    Client.channels.cache.get("923569497695207438").send("<@" + member.id + "> a rejoint le serveur.");
});    

Client.on("guildMemberRemove", member =>{
    console.log("un membre a quitté le serveur.");
    Client.channels.cache.get("923569497695207438").send(member.displayName + " a quitté le serveur.");
});

Client.login("OTIwOTg3NzY3MzY0NzkyMzMw.YbsWsg.-kCvs_1GWk8vw5yP1f2GS-qRHCg");