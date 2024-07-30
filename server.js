const net = require('net');

const serverAddress = '136.158.3.108'; // Your public IP address
const serverPort = 19132; // Default MCPE port
const port = process.env.PORT || 1913;

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
