const {io} = require ('../server');

io.on('connection',(client)=>{

    //Detecta una conexión el el front
    console.log('Usuario conectado');

    //Enviar mensaje al front cuando se está conectado
    client.emit('enviarMensaje',{
        usuario: 'Servidor',
        mensaje: '>SERVIDOR: Ud. se ha conectado al servidor'
    })

    //Detecta una desconexión en el front
    client.on('disconnect',()=>{
        console.log('Usuario desconectado'); 
    })

    //Escuchar al cliente desde donde se está emitiendo un mensaje
    client.on('enviarMensaje', (data, callback) =>{
        console.log(data); 

        client.broadcast.emit('enviarMensaje', data); //broadcast envía a todos los usuarios conectados / Sin el broadcast solo se enterearía el que ha emitido 
        // if(data.usuario){
        //     callback({
        //         resp: 'OK :)'
        //     });
        // }else{
        //     callback({
        //         resp: 'KO :('
        //     });
        // }      
        
    });
});