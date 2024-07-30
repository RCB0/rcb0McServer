const net = require('net');

const serverAddress = '192.168.100.60'; // Update with your server address
const serverPort = 19132; // Default MCPE port
const port = process.env.PORT || 19132;

const client = new net.Socket();
client.connect(serverPort, serverAddress, () => {
    console.log('Connected to Minecraft server');
});

client.on('error', (err) => {
    console.error('Connection error:', err);
});

client.on('close', () => {
    console.log('Connection closed');
});
