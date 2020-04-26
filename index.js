const Discord  = require(`discord.js`);
const bot      = new Discord.Client();
const links    = require(`./links.json`);
const jimp     = require(`jimp`)
const config   = require(`./config.json`);


// aviso de pronto
bot.on(`ready`, () => {
    let counting = 0;
	setInterval(function() {
		bot.user.cache.setActivity('Feliz 2020 ', {type: 'WATCHING'});
		console.log('Contando ' + counting);
		counting++;
	}, 60 * 1000);
     console.log(`O bot ${bot.user.username} foi iniciado com sucesso! com ${bot.users.cache.size} usuarios, ${bot.channels.cache.size} canais e ${bot.guilds.cache.size} Servidores.`);
});
 
const express = require(`express`);
const path    = require(`path`);
const PORT    = process.env.PORT ||  5000;

express()
  .use(express.static(path.join(__dirname, `public`)))
  .set(`views`, path.join(__dirname, `views`))
  .set(`view engine`, `ejs`)
  .get(`/`, (req, res) => res.render(`pages/index`))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

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
bot.on("GuildCreator", guild => {
    console.log(`O bot entrou nos servidor: ${Guild.name.cache} (id: ${guild.id.cache}). População: ${guild.memberCount.cache} membros`);
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

    if(message.content.startsWith(`zelda breath of the wild`)){
        message.reply(" \n**zelda breath of the wild\n`Versão (Eur) google drive` <https://bit.ly/2UH7yex>\n`Versão (Usa) google drive` <https://bit.ly/2UFxDKV>**");
    }
    

});

bot.login(config.token);