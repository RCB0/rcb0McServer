const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'rcb0', // Minecraft server IP
  port: 25565,       // Minecraft server port
  username: 'player'    // Minecraft account username
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(message);
});

bot.on('error', (err) => console.log(err));
bot.on('end', () => console.log('Bot has ended'));
