const WebSocket = require('ws'); // Importa el paquete ws

// Crea un servidor WebSocket que escucha en el puerto 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Cliente conectado');

    // Enviar un mensaje al cliente cuando se conecta
    ws.send('Hola desde el servidor WebSocket');

    // Recibir mensajes del cliente
    ws.on('message', (message) => {
        console.log(`Recibido: ${message}`);
    });

    // Cuando el cliente se desconecta
    ws.on('close', () => {
        console.log('Cliente desconectado');
    });
});

console.log('Servidor WebSocket escuchando en ws://localhost:8080');