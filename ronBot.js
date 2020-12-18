const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Connected as ' + client.user.tag)

    client.user.setActivity('with Javascript')

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name)
        // guild.channels.cache.forEach((channel) => {
        //     console.log (` ${channel.name} ${channel.type} ${channel.id}`)
        // })
    })

    // // Hen Hao Server
    // let henHaoGeneral = client.channels.cache.get('312047982424096768')
    // henHaoGeneral.send('Hello World!')

    // // The Real Boys Server
    // let boysRonBot = client.channels.cache.get('789317142792241212')
    // boysRonBot.send('Hello World!')
})

// Create an event listener for messages
client.on('message', message => {

// Ping Pong Response
if (message.content === 'ping') {

    message.channel.send('pong')
}

// Marco Polo Response
if (message.content === 'Marco') {

    message.channel.send('Polo')
}

// Billy Response
if (message.content.includes('BTS')) {

    let billyBTS = message.guild.emojis.cache.get('314491276076515328')
    message.react(billyBTS)
    message.react('🇧')
    message.react('🇹')
    message.react('🇸')

}

})

client.login(`${{secret.TOKEN}}`)
