const Discord = require("discord.js");
const client = new Discord.Client()
const welcome = require('./welcome.js')

client.on('ready', () => {
  console.log('The client is ready!')
  client.user.setStatus('dnd') 
      client.user.setActivity('ZDC | ZODIAC', { type: 'STREAMING'})
})

client.on('ready', () => {
	welcome(client)
})




client.on('message', message=>{
  if(message.content === '!regelnscajebnasch'){
    const embed = new Discord.MessageEmbed()
    .setDescription('Alle folgenden Regeln müssen konsequent eingehalten werden, sonst muss mit Konsequenzen gerechnet werden!')
    .setAuthor('ZODIAC Regelwerk')
    .setColor('#494949')
    .setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
    .addField('1.', 'Respektvolles Verhalten gegenüber allen!')
    .addField('2.', 'Angaben der Administration werden beachtet und bitte befolgt!')
    .addField('3.', 'Fremd Bzw. Eigenwerbung wird bei uns nicht gestattet!')
    .addField('4.', 'Beleidigungen jeder Form werden nicht toleriert!')
    .addField('5.', 'Diskriminierung wird auf diesem Server nicht toleriert und wird mit einem sofortigen Bann bestraft!')
    .addField('6.', 'Meinungen anderer User dürfen diskutiert werden sollten aber dennoch toleriert werden, niemand soll aufgrund seiner Meinung ausgeschlossen werden!')
    .addField('7.', 'Pornografische Inhalte sind in keiner weise in unseren Chats toleriert!')
    .addField('8.', 'Bei Channels soll auf seine Funktion geachtet werden diese sollen nicht für falsche Zwecke genutzt werden, um ein effizientes miteinander zu garantieren!')
    message.channel.send(embed)
    
  }


})


client.on('message', message=>{
	if(message.content === '!anderesRegelWerkLOL'){
		const embed = new Discord.MessageEmbed()
		.setDescription('Alle folgenden Regeln müssen konsequent eingehalten werden, sonst muss mit Konsequenzen gerechnet werden Beispielsweise einer Verwarnung oder einer Sperre.')
		.setAuthor('ZODIAC Regelwerk')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('1.', 'Respektvolles Verhalten gegenüber allen Mitgliedern!')
		.addField('2.', 'Angaben der Administration werden beachtet und befolgt!')
		.addField('3.', 'Entscheidungen der Administration dürfen kritisiert werden, aber wir bitten um Verständnis bei allen Entscheidungen!')
		.addField('4.', 'Im Team gilt stets sportliches Verhalten gegenüber seinem Gegner und Mitspieler! ')
		.addField('5.', 'Trainingszeiten müssen eingehalten werden, außer es gibt eine plausible Entschuldigung. Dasselbe gilt auch für Turniere, Events etc.!')
		.addField('6.', 'Verwarnungen werden angenommen und nicht diskutiert, jedoch kann man um ein Gespräch mit einer der Leitungen bitten sofern es einen plausiblen Grund gibt!')
		.addField('7.', 'Diskriminierung wird auf diesem Server nicht toleriert und wird mit einem sofortigen Bann bestraft!')
		.addField('8.', 'Meinungen anderer Team Mitglieder dürfen diskutiert werden sollten aber dennoch toleriert werden, niemand soll aufgrund seiner Meinung ausgeschlossen werden!')
		.addField('9.', 'Pornografische Inhalte werden in keiner weise in unseren Chats toleriert!')
		.addField('10.', 'Bei Channels soll auf seine Funktion geachtet werden diese sollen nicht für falsche Zwecke genutzt werden, um ein effizientes miteinander zu garantieren!')
		message.channel.send(embed)
		
	}


})
 
client.on('message', message=>{
	if(message.content === '!systensgascas'){
		const embed = new Discord.MessageEmbed()
		.setAuthor('ZODIAC E-Sports')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('Generelle Warnungen:', 'Eine Warnung verfällt nach 21 Tagen, wenn während dieser  21 Tage eine weitere Warnung versendet wird folgt auf die Warnung noch eine Team-sperre. Warnungen werden nach der Regelung der alten Team-sperre versendet. Nach insgesamt 5 gespeicherten Warnungen wird eine Team-sperre ebenfalls automatisch gesendet ,egal wie lange diese Warnungen her sind.')
		.addField('Inaktivitäts Warnungen:', 'Warnungen für Inaktivität werden nicht standartmäßig dazu gerechnet, sondern haben eine eigeneständige Regelung: bei 3 Warnungen innerhalb des Monats (Kalender) für Inaktivität wird der Person die Team rolle entzogen. ')
		.addField('Inaktivitäts Regelung:', 'Verlassen eines Turniers ohne „Entschuldigung”, nicht erscheinen am Trainings Tag ohne „Entschuldigung‘‘‚ nicht erscheinen am Turnier Tag ohne „Entschuldigung‘‘‚ lange generelle Inaktivität im Team ohne „Entschuldigung‘‘.')
		.addField('Entschuldigung:', 'Zu der „Entschuldigung‘‘‚ gilt es auch vor dem ausgemachten Tag bescheid zu geben. Generell wird Inaktivität nicht beurteilt, wenn rechtzeitig bescheid gegeben wird.')
		.addField('Info:', 'Warnungen werden über den Dyno-Bot versendet und momentan haben nur die Team-Admins und die Leitung zugriff auf diese neue Funktion, dies kann sich jedoch noch in kürze ändern.')
		.addField('Schlusswort:', 'Diese Regelung gilt ab jetzt und wird die Team-sperren Regelung teilweise ersetzen!')
		message.channel.send(embed)
		
	}


})

client.on('message', message=>{
	if(message.content === '!smembers1sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('\u200b')
		.setAuthor('ZODIAC E-Sports')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('Die Bewerbung und alles andere wichtige hier!', 'Wie viele eigentlich alle wissen ist das ein E-Sports Organisations Discord Server, bedeutet nicht das jeder auf dem Discord ein Mitglied von uns ist, doch das kann sich ändern. Wir möchten euch heute in Kurzen schritten unseren Clan Vorstellen und euch die Bewerbung erklären also lasst euch Zeit.')
		.addField('Wieso sollte ich dieser Organisation beitreten?', 'Wir bieten euch als Organisation einen strukturierten Discord Server mit erfahrener Administration und vielen neuen bekanntschafften vorallem für unser Spiel-Genre, außerdem bieten wir viele Events und teilnahmen an vielen extern und internen Turnieren an.')
		.addField('In welchen Spielen bietet sich die Organisation an?', 'Valorant | RiotGames | Ego Shooter \n League Of Legends | Riot Games | MOBA')
		.addField('Wie trete ich der Organisation bei?', 'Melde dich mit einem Kurzen Bewerbungs-Formular an, wir werden uns dann in kürze bei dir melden und dir alles weitere in einem Kurzen Gespräch erklären. Bewerbung-Formular: https://zodiacesports.de/bewerben/')
		message.channel.send(embed)
		
	}


})



client.on('message', message=>{
	if(message.content === '!mod1451561sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('\u200b')
		.setAuthor('ZODIAC E-Sports')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('Die Bewerbung und alles andere wichtige hier!', 'Arbeite mit unserem Team als Moderator oder Admin zusammen um in unserem Verein organisatorische Aufgaben zu bearbeiten, und oder den Teams und Membern zu helfen.')
		.addField('Ablauf und Aufgaben!', 'Wir geben acht darauf das wir euch nicht belasten und ihr auf euch angepasste Aufgaben bekommt, mit denen ihr meist gut klarkommen solltet, ihr werdet selten allein gelassen mit Aufgaben etc. meist bekommt ihr Hilfe, wenn ihr sie braucht oder arbeitet mit mehreren zusammen! ')
		.addField('Was sollte ich können oder wissen?', 'Du solltest Motivation und Zeit mitnehmen, es können sich Aufgaben oder Problematiken auch über Tage, Wochen ziehen Belastbarkeit ist ein wichtiger Bestandteil. \n Erfahrung ist zumindest im Moderations Bereich nicht dringend notwendig, wenn man noch keine Erfahrungen hat, wird einem vieles von Admins oder anderen Moderatoren erklärt (Beigebracht) und voll alleinige  aufgaben werden einem erst freigegeben, wenn der Bereich Admin einen Erfahren genug bezeichnet. Dieser Prozess dauert meist nicht länger als 2 Wochen.')
		.addField('Wie werde ich Moderator?', 'Melde dich mit einem kurzen Bewerbungs-Formular an, wir werden uns dann in Kürze bei dir melden und dir alles weitere in einem Gespräch erklären, deinen Arbeitsbereich und mehr kannst du dann im Gespräch selbst auswählen. \n Bewerbung-Formular: https://zodiacesports.de/bewerben/')
		message.channel.send(embed)
		
	}


})




client.on('message', message=>{
	if(message.content === '!supporteer1451561sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('Unsere Community Helfer \n\n <@&719970026148593704> sind Server Mitglieder die sich von selbst aus dazu entschieden haben unserer Community Fragen zu beantworten und Ihnen wo es nur geht im Team Bereich zu helfen.')
		.setAuthor('ZODIAC E-Sports')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('Wobei Können mir Supporter denn helfen?', '-Bei deiner Bewerbung \n -Beim Aufbau zum Kontakt zu der Server Leitung und oder eines Admins \n -Bei Business Fragen \n -Bei generellen Organisations/Server oder Team Fragen')
		.addField('Wie kann ich Supporter werden?', 'Bewirb dich ganz einfach und schnell auf unserer Website: \n https://zodiacesports.de/bewerben/')
		.addField('\u200b', 'Wir hoffen diese Idee gefällt euch, und wir können damit viele eurer Fragen beantworten.')
		message.channel.send(embed)
		
	}


})







client.on('message', message=>{
	if(message.content === '!teamblaba1341dcasdascdascdas'){
		const embed = new Discord.MessageEmbed()
		.setAuthor('ZDC | ZODIAC E-Sports')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.setDescription('<@&697864268384829450> 2/2\n ┣ <@332626364068921344> \n ┗ <@351398085173182475> \n\n <@&755476775580074074> 1/1\n ┗ <@578250433299087391> \n\n <@&755476408859623525> 1/1 \n ┗ <@578250433299087391> \n\n  <@&769290972843474975> 1/1 \n ┗ <@578250433299087391> \n\n <@&743859977554493541> 1/2 \n ┣ <@345493225139601408> \n ┗   \n\n <@&719970026148593704> 0/2 \n ┣ \n ┗  \n\n <@&755477366490529963> 1/1 \n ┗ <@285335457833680896> \n\n <@&755861218547335249> 0/1 \n ┗ \n\n <@&755481568524500993> 0/1 \n ┗ \n\n')
	


		message.channel.send(embed)
		
	}


})








client.on('message', message=>{
	if(message.content === '!navigator1451561sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('┇ZODIAC ESPORTS N.E.V' + '\n' + message.guild.channels.cache.get('594438635281973268').toString() + ' - Welcome messages' + '\n' + message.guild.channels.cache.get('733672886627467265').toString() + ' - Alle Social-Media, Sponsoren Links und Infos zum Verein' + '\n' + message.guild.channels.cache.get('744178753130987651').toString() + ' - Allgemeines Regelwerk' + '\n' + message.guild.channels.cache.get('760787794032459796').toString() + ' - Alle Channels aufgelistet' + '\n' + message.guild.channels.cache.get('756145620015644782').toString() + ' - Alle Teammitglieder aufgezählt' + '\n\n' + '┇NEUIGKEITEN' + '\n' + message.guild.channels.cache.get('744290501200445520').toString() + ' - Allgemeine Neuigkeiten für Verein und oder Server' + '\n' + message.guild.channels.cache.get('744295179477057558').toString() + ' - Neuigkeiten für anstehende Events' + '\n' + message.guild.channels.cache.get('744295225748619265').toString() + ' - Neuigkeiten zu Livestreams von unseren Streampartnern' + '\n' + message.guild.channels.cache.get('758420806128238604').toString() + ' - Neuigkeiten zu unseren Partnern' + '\n\n' + '┇BEWERBUNG' + '\n' + message.guild.channels.cache.get('704085226984439848').toString() + ' - Member Bewerbungsinfos, Formular' + '\n' + message.guild.channels.cache.get('751759995863040021').toString() + ' - Moderator Bewerbungsinfos, Formular' + '\n' + message.guild.channels.cache.get('759153753915129866').toString() + ' - Streampartner Bewerbungsinfos, Formular' + '\n\n' + '┇SUPPORT' + '\n' + message.guild.channels.cache.get('741323655929135205').toString() + ' - Alle Information zum Supporter' + '\n' + message.guild.channels.cache.get('719842046797414420').toString() + ' - Text-Support und Fragen Beantwortung' + '\n\n' + '┇CHATS' + '\n' + message.guild.channels.cache.get('594468074388717589').toString() + ' - Allgemeiner Chat' + '\n' + message.guild.channels.cache.get('760774589952294912').toString() + ' - Suche nach Spielern für jegliche Spiele' + '\n' + message.guild.channels.cache.get('760777241776095242').toString() + ' - Ideen und Wünsche für Server oder Verein' + '\n' + message.guild.channels.cache.get('760842772185612350').toString() + ' - Hier kannst du für dich Werbung machen' + '\n' + message.guild.channels.cache.get('718745555840270386').toString() + ' - Befehls-Chat zum benutzen der Bots' )
		.setAuthor('Discord Navigator')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		message.channel.send(embed)
		
	}


})










client.on('message', message=>{
	if(message.content === '!infobereich1451561sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('Wir, Zodiac, haben uns mit der Idee gebildet eine Organisation vielmehr einen Verein zu gründen. Wir haben vor, mit unseren eigenen Regeln und eigenen Umgang mit dem competitiv Bereich eine Community zu gründen, Turniere zu veranstalten, Esports-Teams zu bilden und spaß zu haben. Unser Team Konzept basiert darauf, dass wir ein gutes Verhältnis mit dem Team und den Membern haben, und alle miteinander daran arbeiten sich zu verbessern. \n\n Gegründet: 16.02.2019')
		.setAuthor('ZDC | ZODIAC E-SPORTS')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('Social Media ', ':pushpin: | YouTube: Zodiac Esports \n https://www.youtube.com/channel/UCtMnReD-2hFTzB3mBMwppvw?view_as=subscriber \n\n :pushpin: | Instagram: @zdc.zodiac \n https://www.instagram.com/zdc.zodiac/?hl=de \n\n :pushpin: | Twitter: @ZdcZodiac \n https://twitter.com/ZdcZodiac \n')
		.addField('Sponsoren und Partner', ':moneybag: | *Instant-Gaming \n https://www.instant-gaming.com/igr/zodiac/ \n\n :moneybag: |  *Fiverr \n https://track.fiverr.com/visit/?bta=125364&brand=fiverrcpa \n\n *Beim benutzen unserer Affiliate Links bekommen wir bei jedem Kauf über unseren Link eine kleine Provision ohne das ihr nur einen Cent mehr zahlen müsst. All das gesammelte Geld durch die Affiliate Links und oder Sponsors von unseren Partnern geht einzig und allein in die Vereins Kasse, und wird für das Preisgeld unserer Turniere und Ligen verwendet.')
		.addField('Kontakt und mehr ', ' :e_mail:  |  E-Mail \n kontakt@zodiacesports.de \n\n :newspaper:  |  Website \n https://zodiacesports.de/')
		message.channel.send(embed)
		
	}


})




client.on('message', message=>{
	if(message.content === '!aufgabebnteran1451561sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('Jede Rolle im Team hat seine eigenständigen und zusammenhängenden Aufgaben, wir zählen diese hier nochmal auf, für mehr Aufklärung und Verständigung. \n Es werden nur alle speziellen Aufgaben aufgezählt, viele Standards haben wir nicht mitgeschrieben! ')
		.setAuthor('Aufgaben und Ablauf im Team!')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		.addField('Administartor', 'Übersicht auf den jeweiligen Bereich, Hilfe denn Team-Kapitänen und Moderatoren anbieten wenn sie benötigt wird. Alle E-Sports Teams aufrichtig halten und bei Fragen oder weiterem aufklären, Team-Captains aufklären über Neuerungen Änderungen, und alle weiteren relevanten Informationen. \n Mit den Team-Captains und Moderatoren Kontakt bleiben und einen  Kontakt zwischen Team-Captain oder Moderator und Leitung aufbauen wenn nötig. Problem Behandlung zusammen mit den Moderatoren und wenn benötigt der Leitung. Mit dem Content Admin über mögliche Events sprechen und Feedback, Ideen, Meinungen etc. entweder umsetzten/annehmen oder dem Team weitergeben. Ansprechpartner für Team-Captains, Support und Moderator bei Hilfe und Fragen sein. Helfen der Vereins-Member und Discord-User bei Problemen und Fragen etc. Aufklärung der Leitung.')
		.addField('Moderator', 'Unterstützung der Administration, und bei großen Problemen und oder Aufgaben auch Supporter. Aufklärung der Administration über mögliche Ideen, Aufgaben, Probleme und mehr. Leitung von Events, Turniere und mehr, Event und Turnier Planung.  Problem Behandlung zusammen mit der Administration  und wenn benötigt der Leitung. Im Kontakt zu den Supportern und der Administrationen  stehen, und denn Kontakt zwischen Supporter und Administrator und oder Leitung aufbauen. Kontakt zwischen Vereins-Member und Administrator und oder Leitung aufbauen. Aufklärung der Supporter über Neuerungen Änderungen, und alle weiteren relevanten Informationen, helfen der Vereins-Member und Discord-User bei Problemen und Fragen etc. Ansprechpartner für Team-Captains und Support bei Hilfe und Fragen sein. Bearbeiten von bewerbungen.')
		message.channel.send(embed)
		
	}


})




client.on('message', message=>{
	if(message.content === '!streampartner1451561sd'){
		const embed = new Discord.MessageEmbed()
		.setDescription('Unsere Stream-Partner sind bei uns registrierte Twitch Livestreamer, welche wir im Management und beim Wachsen unterstützen weshalb sie als Gegenleistung unseren Verein repräsentieren. \n\n <@&724594381385891892> \n ┣ <@583324340431356095> \n ┣ https://www.twitch.tv/johniichi \n ┣ https://www.youtube.com/channel/UC7BaGwAjkFUpsxjbjgj9xJw \n ┗ https://www.instagram.com/johniichi/?hl=de \n\n <@&724594381385891892> \n ┣ <@285335457833680896> \n ┣ https://www.twitch.tv/realdaniellogic \n ┣ https://www.youtube.com/channel/UCUFSweC4gm6uSaE7VTzHOug \n ┗ https://www.instagram.com/ttv_daniellogic/ \n\n <@&724594381385891892> \n ┣ \n ┣ \n ┣ \n ┗ ')
		.setAuthor('STREAMPARTNER')
		.setColor('#494949')
		.setFooter('ZODIAC', 'https://imgur.com/F0pY3mw.png')
		message.channel.send(embed)
		
	}


})




client.login(process.env.token);