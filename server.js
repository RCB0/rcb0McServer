const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', // Replace with your Minecraft server IP or hostname
  port: 25565,       // Minecraft server port
  username: 'bot'    // Minecraft account username
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(message);
});

bot.on('error', (err) => console.log(err));
bot.on('end', () => console.log('Bot has ended'));
