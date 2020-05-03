        // Aquí vamos a definir lass funciones que queremos que se disparen cuando interactuemos con el servidor
        let socket = io(); //io aparece gracias a la importación que se hace en el <script> de arriba ---> Es el mismo objeto que se ha definido en el server.js
            
            /**
             * on ---> son para escuchar del servidor
             * emit ---> son para enviar al servidor
             */


            //Detectar CONEXIÓN EN EL BACK
            socket.on('connect', function(){
                console.log('Conectado al servidor'); //Detecta una conexión el el back
            });

            //Detectar DESCONEXIÓN EN EL BACK        
            socket.on('disconnect', function(){
                console.log('Conexión perdida con servidor'); //Detecta una conexión en el back
            });

            //ENVIAR MENSAJE AL BACK ---> Debe ser escuchada por el servidor
            socket.emit('enviarMensaje',{
                usuario: 'David',
                mensaje: 'Hola David'
            },function( resp ){
                console.log('Respuesta del servidor: ', resp);
            });

            //ESCUCHAR MENSAJE DEL BACK
            socket.on('enviarMensaje',function(mensaje){
                console.log('Servidor dijo: ', mensaje);
            });
