const Discord  = require(`discord.js`);
const bot      = new Discord.Client();
const links    = require(`./links.json`);
const jimp     = require(`jimp`)
const config   = require(`./config.json`);


// aviso de pronto mais status aleatorios
bot.on(`ready`, () => {
    console.log(`O bot ${bot.user.username} foi iniciado com sucesso! com ${bot.users.cache.size} usuarios, ${bot.channels.cache.size} canais e ${bot.guilds.cache.size} Servidores.`);
    function randomStatus() {
        let status = [`se inscreva no canal`, `convide seu amigo para o Discord`, `twitch`, `facebook`]
        let randomStatus = Math.floor(Math.random() * status.length);
        bot.user.setActivity(status[randomStatus],  {type: `STREAMING`, url: `https://www.twitch.tv/demon_crowley_93`});
        bot.user.setActivity(status[randomStatus],  {type: `PLAYING`});
        bot.user.setActivity(status[randomStatus],  {type: `WATCHING`});
        bot.user.setActivity(status[randomStatus],  {type: `LISTENING`});
    }; setInterval(randomStatus, 5000)
})
//aviso de pronto mais status aleatorios terminou aqui
//deixar online na heroku 
const express = require(`express`);
const path    = require(`path`);
const PORT    = process.env.PORT ||  5000;

express()
  .use(express.static(path.join(__dirname, `public`)))
  .set(`views`, path.join(__dirname, `views`))
  .set(`view engine`, `ejs`)
  .get(`/`, (req, res) => res.render(`pages/index`))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
//deixar online na heroku terminou aqui
bot.on("guildMemberAdd", async member => {
    //inicio do contador de membros
    let guild = `${
        bot.guilds.cache.get("586675318073589760") .memberCount
    }`.split("");
    const contador = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    let count = "";
    for (let i =0; i <guild.length;i++) {
        count += ":" + contador[guild[i]] + ":";
    }
    let canal1 = bot.channels.cache.get("690707795326140478");
    canal1.setTopic(`Temos atualmente no servidor ${count} membros :heart_eyes: .`);
    // final do contador de membros 
//mensagem de boas vindas com imagem para novos membros
    let canal = bot.channels.cache.get("690590568060944474")
    let fonte = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
    let mask = await jimp.read('mascara.png')
    let fundo = await jimp.read('fundo.png')
    
    let avatar5 = member.user.displayAvatarURL({ dynamic: true, size: 1024 })
    if (avatar5.endsWith(".webp?size=1024")) {avatar5 = member.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 })}
    jimp.read(avatar5).then(avatar => {
    avatar.resize(130, 130)
    mask.resize(130, 130)
    avatar.mask(mask)
  
    fundo.print(fonte, 220, 175 ,member.user.username)
    fundo.composite(avatar, 20, 130).write('bemvindo.png')
    canal.send("**Seja bem-vindo(a) ao Edu Dicas e Gameplay**\n`Lembre-se de ler as`<#611358627793469479>\n`E o Sistema de`<#690672530406637598>", { files: ["bemvindo.png"] })
    console.log('Imagem enviada para o Discord')
    })
    .catch(err => {
    console.log('error avatar')
    })
})
// mensagem de boas vindas com imagem para novos membros terminou aqui
//mensagem que o bot entrou no servidor
bot.on("guildCreator", guild => {
    console.log(`O bot entrou nos servidor: ${guild.name.cache} (id: ${guild.id.cache}). População: ${guild.memberCount.cache} membros`);
    bot.user.setActivity(`Estou em ${bot.guilds.cache.size} servidores`);
});
// mensagem que o bot entrou no servidor terminou aqui 
// mensagem que o bot foi removido do servidor
bot.on("guilDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name.cache} (id: ${guild.id.cache})`);
    bot.on.setActivity(`Seving ${bot.guilds.cache.size} servers`);
});
// mensagem que o bot foi removido do servidor terminou aqui
// mensagens manuais que puxam da pasta links inicia aqui
bot.on(`message`, message => {
    responseObject = links;
    if(responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

// mensagens manuais que puxam da pasta links termina aqui
// mensagens automaticas iniciam aqui
    if(message.content.startsWith(`state of decay`)){
        message.reply(" \n**State of Decay 2\n`torrent` <https://is.gd/amunub>\n`onlinefix` <https://is.gd/gadeki>**");
    }

    if(message.content.startsWith(`state of decay 2`)){
        message.reply(" \n**State of Decay 2\ntorrent`` <https://is.gd/amunub>\n`onlinefix` <https://is.gd/gadeki>**");
    }

    if(message.content.startsWith(`State of decay 2`)){
        message.reply(" \n**State of Decay 2\n`torrent` <https://is.gd/amunub>\n`onlinefix` <https://is.gd/gadeki>**");
    }

    if(message.content.startsWith(`State Of Decay 2`)){
        message.reply(" \n**State of Decay 2\n`torrent` <https://is.gd/amunub>\n`onlinefix` <https://is.gd/gadeki>**");
    }

    if(message.content.startsWith(`State Of Decay`)){
        message.reply(" \n**State of Decay 2\n`torrent` <https://is.gd/amunub>\n`onlinefix` <https://is.gd/gadeki>**");
    }

    if(message.content.startsWith(`Zelda Breath Of The Wild`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }

    if(message.content.startsWith(`zelda breath of the wild`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }

    if(message.content.startsWith(`Zelda breath of the wild`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }

    if(message.content.startsWith(`Zelda Breath of the Wild`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }

    if(message.content.startsWith(`Zelda BOTW`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }

    if(message.content.startsWith(`Zelda botw`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }

    if(message.content.startsWith(`zelda botw`)){
        message.reply(" \n**Zelda Breath Of The Wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }


    

});

bot.login(config.token);