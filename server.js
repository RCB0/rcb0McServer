const net = require('net');

// Your public IP address of the Minecraft server
const serverAddress = '136.158.3.108'; // Update with your public IP address
const serverPort = 19132; // Default MCPE port

const client = new net.Socket();

// Connect to the Minecraft server
client.connect(serverPort, serverAddress, () => {
    console.log('Connected to Minecraft server');
});

// Handle connection errors
client.on('error', (err) => {
    console.error('Connection error:', err);
});

// Handle connection closure
client.on('close', () => {
    console.log('Connection closed');
});
