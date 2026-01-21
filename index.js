require("dotenv").config(); 
console.log(`Token length: ${process.env.TOKEN.length}`);
console.log(`Token: '${process.env.TOKEN}'`);
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const ID_GLAUBER = "413368679313440769";
const ID_TAKESHI = "334331130927120386";
const ID_ELVI = "824693504306577438";
const ID_NETO = "1163232722538483812";
const ID_ANA = "127792441238487040";

client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  const texto = message.content.toLowerCase().trim();

  if (
    message.author.id === ID_GLAUBER &&
    texto === "bom dia"
  ) {
    message.reply("sucumba glauber");
  }
  else if(
    message.author.id === ID_TAKESHI &&
    texto === "saas"
  ) {
    message.reply("https://tenor.com/view/eddie-zato-zato-guilty-gear-eddie-clap-rde-gif-13918902029952866835")
  }
  else if(
    message.author.id === ID_ELVI
  ){
    message.reply("VAI SE FUDER ELVI VIRA GENTE")
  }
});
  

client.login(process.env.TOKEN);
