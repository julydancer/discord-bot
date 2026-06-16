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
const ID_SORROW = "806241214302781466";
const ID_CLARY = "923638823123030016";

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
  "pink",
  "nordeste",
  "sul",
  "nordestino",
  "sulista",
  "sp",
  "judeu"
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
  "sonic",
  "dbd",
  "Tengen Toppa Gurren Lagann",
  "TTGL",
  "Gurren Lagann"
];


client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  const texto = message.content.toLowerCase().trim();
const nomeCanal = message.channel.name?.toLowerCase() || "";

  if (
    message.author.id === ID_GLAUBER &&
    texto.includes("bom dia")
  ) {
    message.reply("sucumba glauber");
  }
  else if (
    message.author.id === ID_ELVI &&
    texto.includes("bom dia")
  ) {
    message.reply("vai se fuder mlk");
  }
  else if(message.author.id !== ID_GLAUBER && texto.includes("bom dia"))
  {
    message.reply("Tenha um ótimo dia! Você é incrivel!")
  } 
  else if(message.author.id === ID_GLAUBER && texto.includes("respeita"))
  {
    message.reply("Não glauber, ninguem te respeita")
  }
  
  if (message.author.id === ID_NETO && texto.includes(`<@${ID_SORROW}>`)){
    message.reply("https://tenor.com/view/hot-guy-kissing-gif-19715425")
  }
  if (texto.includes(`<@${ID_TAKESHI}>`)){
    message.reply("https://tenor.com/view/takeshi-takeshi-moment-thumbs-up-ta-takesh-gif-24206951")
  }
    
  if(
    message.author.id === ID_TAKESHI &&
    texto.includes("saas")
  ) {
    message.reply("https://tenor.com/view/eddie-zato-zato-guilty-gear-eddie-clap-rde-gif-13918902029952866835")
  }
  if(
    message.author.id === ID_TAKESHI && 
    (texto.includes("filipinos") 
    ||texto.includes("filipina"))){
    message.reply("ainda bem que o takeshi ama filipinos")
    message.reply("https://tenor.com/view/proud-to-be-filipino-jhon-mark-perez-kapitaaannn-pinoy-masaya-gif-17020131")
  }
  if(
    message.author.id === ID_ELVI && frasesElvi.some(frase => texto.includes(frase)) // adiciona a elvi nas frases
  ){
    if(texto)message.reply("caralho elvi para de ser racista")
  }
  if(
    message.author.id === ID_SORROW && frasesElvi.some(frase => texto.includes(frase)) // adiciona o sorrow nas frases
  ){
    if(texto)message.reply("pqp sorrow para de ser racista porra")
  }
  else if(
    message.author.id === ID_SORROW && texto.includes("judeu")){
      message.reply("https://cdn.discordapp.com/attachments/1051599284342116362/1516140812008689674/Screenshot_20260615_150035_Discord2.jpg?ex=6a32386a&is=6a30e6ea&hm=504251b8296397643ceee2285e82ee6d4888d2ec3b3e3f21123a66c0f52d6b83&")
    }
  if(
    message.author.id === ID_ANA &&
    texto.includes("teste")
  ){
    message.reply("GET 200")
  }
  if(
    message.author.id === ID_ANA &&
    texto.includes("push")
  ){
    message.reply("PUSH 200")
  }
  if(
    texto.includes("cola hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-hunt-hunt-meme-get-on-hunt-showdown-gif-24553870")
  }
  if(
    texto.includes("bo hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-cowboy-cyber-punk-bayou-katana-gif-14008885467956326906")
  }
  if(
    texto.includes("sem hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-hunt-meme-hunt-showdown-meme-hunt-showdown-get-on-hunt-get-on-hunt-gif-16078836551526038956")
  }
  if(
    texto.includes("zero hunt")
  ){
    message.reply("https://tenor.com/view/hunt-showdown-cant-get-on-hunt-when-bro-cant-get-on-hunt-hunt-meme-hunt-showdown-meme-gif-14538438963849915163")
  }
  if(
    texto.includes("pix")
  ){
    message.reply("https://livepix.gg/julydancer")
  }
  /*if (texto.includes(`<@${ID_CLARY}>`)){
    message.reply("https://media.discordapp.net/attachments/1515169300145639470/1516134338427748392/Screenshot_20260615-1436152.jpg?ex=6a3189a2&is=6a303822&hm=4cba158c8fa8a51c91804d6a92ce0d52040bafd54e8fc12f35a6e711f3074fa8&=&format=webp")
  }*/
  if (
    !nomeCanal.includes("mudae") &&
    sleeperAgent.some(frase => texto.includes(frase.toLowerCase()))
  ) {
    message.reply(`vai lá autista <@${ID_ANA}>, brilha`);
  }
  if (texto.includes("mamdo") || texto.includes("mambo")) {
    message.reply("https://tenor.com/view/mambo-uma-musume-gif-4231814947166331056")
  }
  if (texto.includes(`<@${ID_NETO}>`)){
    message.reply("https://tenor.com/view/rem-deadlock-belly-meme-gif-6285562892747082921")
  }
    
});
  
client.login(process.env.TOKEN);
