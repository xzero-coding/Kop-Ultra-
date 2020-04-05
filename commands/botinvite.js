const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  let embed2 = {
  "title": "Majo.exe",
  "description": "Invite the bot here: [invite link](https://discordapp.com/oauth2/authorize?client_id=681536055572430918&scope=bot&permissions=2146958591) \n Check website: [majobot](https://igorkowalczyk.github.io)\n Join to official server [PL]: [Join](https://discord.gg/f4KtqNB)",
  "url": "https://igorkowalczyk.github.io/majobot",
  "color": 3447003,
  "thumbnail": {
    "url": "https://cdn.discordapp.com/avatars/544164729354977282/c39c2d7b39e5d6d5d13a8c2bdb010373.png?size=2048"
  }
};

message.author.send("e", {embed2});

message.channel.send({embed: {
            color: 3447003,
            title: "Check a priv message!"
        }})
}

module.exports.help = {
    name: "botinvite",
    description: "Sends you the bot invite for Majo.exe",
    usage: "botinvite",
    type: "General"  
}