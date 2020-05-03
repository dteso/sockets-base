const express = require('express');
const socketIO = require ('socket.io');
const http = require ('http'); // Módulo que trae Node por defecto

const path = require('path');

const app = express(); //Express por debajo está llamando a las funciones del http que trae node por defecto
let server = http.createServer(app); //Estamos pasando la app de express a http

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//Iniciaización del socket io -> IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});