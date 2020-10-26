module.exports = client => {
    const channelId = '768456836566220805'

    client.on('guildMemberAdd', (member) => {
	  const message = `Hey <@${member.id}>,  welcome to the Zodiac Esports [BETA] server:tada::hugging:`

      const channel = member.guild.channels.cache.get(channelId)
      member.roles.add("768582572639780884");
	  channel.send(message)
})
}