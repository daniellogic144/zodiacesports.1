const Discord = require("discord.js");
const client = new Discord.Client()

client.on('ready', () => {
  console.log('The client is ready!')
  client.user.setStatus('dnd') 
      client.user.setActivity('ZDC | ZODIAC', { type: 'STREAMING'})
})


const channelId = '768456836566220805'
const guild = client.guilds.cache.get('768456836289921036')
client.on('guildMemberAdd', (member) => {
  const message = `Hey <@${member.id}>,  welcome to the **Zodiac Esports [BETA]** server:tada::hugging:`

  const channel = member.guild.channels.cache.get(channelId)
  member.roles.add("768582572639780884"); 
  member(guild)
  channel.send(message)
})


client.login(process.env.token);