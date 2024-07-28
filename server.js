const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'localhost', // Change if the Minecraft server is on a different host
  port: 25565,       // Ensure this matches your Minecraft server port
  username: 'bot'    // Update with your bot's username
});

bot.on('login', () => {
  console.log('Bot has logged in');
});

bot.on('error', (err) => {
  console.error('Bot encountered an error:', err);
});

bot.on('end', () => {
  console.log('Bot has ended');
});
