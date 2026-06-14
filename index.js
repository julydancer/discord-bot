require("dotenv").config(); 
console.log(`Token length: ${process.env.TOKEN.length}`);
console.log(`Token: '${process.env.TOKEN}'`);
const { Client, GatewayIntentBits } = require("discord.js");
//Teste

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const ID_GLAUBER = "413368679313440769";
const ID_TAKESHI = "334331130927120386";
const ID_ELVI = "824693504306577438";
const ID_NETO = "1163232722538483812";
const ID_ANA = "127792441238487040";
const ID_RUBAO = "1355243350869020873";
const ID_SORROW = '806241214302781466'


client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.author.id === ID_RUBAO) {
    try {
      const ate = new Date(Date.now() + 60_000);
      await message.member.timeout(ate - Date.now(), "Falou");
    } catch (err) {
      console.error(err);
    }
  }
}); 

const frasesElvi = [
  "branco",
  "preto",
  "amarelo",
  "rosa",
  "roxo",
  "não gosto de",
  "acho",
  "nada contra",
  "cara",
  "mano",
  "negro",
  "noir",
  "black",
  "pink"
];
const sleeperAgent = [
  "twst",
  "twisted wonderland",
  "chuuya",
  "malleus",
  "dbd",
  "power rangers",
  "orv",
  "omniscient reader's viewpoint",
  "omniscient",
  "star wars",
  "persona",
  "p5r",
  "p3r",
  "royal guard",
  "dmc",
  "jojo",
  "sonic"
];


client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const texto = message.content.toLowerCase().trim();

  if (
    message.author.id === ID_GLAUBER &&
    texto.includes("bom dia")
  ) {
    message.reply("sucumba glauber");
  }
  else if(message.author.id !== ID_GLAUBER && texto.includes("bom dia"))
  {
    message.reply("Tenha um ótimo dia! Você é incrivel!")
  } 
  else if(message.author.id === ID_GLAUBER && texto.includes("respeita"))
  {
    message.reply("Não glauber, ninguem te respeita")
  }
  else if (
    message.author.id === ID_ELVI &&
    texto.includes("bom dia")
  ) {
    message.reply("vai se fuder mlk");
  }
  if (message.author_id === ID_NETO && texto.includes("`<@${ID_SORROW}>`")){
    message.reply("https://tenor.com/pt-BR/view/hot-guy-kissing-gif-19715425")
  }
  if (texto.includes("`<@${ID_TAKESHI}>`"){
    message.reply("https://tenor.com/view/takeshi-takeshi-moment-thumbs-up-ta-takesh-gif-24206951")
  }
    
  else if(
    message.author.id === ID_TAKESHI &&
    texto.includes("saas")
  ) {
    message.reply("https://tenor.com/view/eddie-zato-zato-guilty-gear-eddie-clap-rde-gif-13918902029952866835")
  }
  else if(
    message.author.id === ID_ELVI && frasesElvi.some(frase => texto.includes(frase))
  ){
    if(texto )message.reply("caralho elvi para de ser racista")
  }
   else if(
    message.author.id === ID_ANA &&
    texto.includes("teste")
  ){
    message.reply("GET 200")
  }
  else if(
    message.author.id === ID_ANA &&
    texto.includes("push")
  ){
    message.reply("PUSH 200")
  }
  else if(
    texto.includes("cola hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-hunt-hunt-meme-get-on-hunt-showdown-gif-24553870")
  }
  else if(
    texto.includes("bo hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-cowboy-cyber-punk-bayou-katana-gif-14008885467956326906")
  }
  else if(
    texto.includes("sem hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-hunt-meme-hunt-showdown-meme-hunt-showdown-get-on-hunt-get-on-hunt-gif-16078836551526038956")
  }
  else if(
    texto.includes("zero hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-cant-get-on-hunt-when-bro-cant-get-on-hunt-hunt-meme-hunt-showdown-meme-gif-14538438963849915163")
  }
  if(
    texto.includes("pix")
  ){
    message.reply("https://livepix.gg/julydancer")
  }
  if (sleeperAgent.some(frase => texto.includes(frase))
  ){
    if(texto )message.reply(`vai lá autista <@${ID_ANA}>`)
  }
  if (texto.includes("mamdo") || texto.includes("mambo")) {
    message.reply("https://tenor.com/view/mambo-uma-musume-gif-4231814947166331056")
  }
});
  
client.login(process.env.TOKEN);
