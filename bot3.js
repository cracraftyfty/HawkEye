const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/help') {
    	message.reply('I am under Development As soon as CraftTech will add more commands they will show up here! Stay Connected!!');
  	}
});


client.login(process.env.BOT_TOKEN);
