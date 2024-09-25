//Seleccionar contenido de HTML.
//Nombro el id del contenido que quiero enlazar.
const boton = document.querySelector('#Boton');

//addEventListener: registra eventos en la variable "boton".
//Cuando se da tal evento, se produce una función que pregunta si se pueden mostrar
//notificaciones (es una API). Las APIs usan promises porque necesitan el permiso
//del usuario.
boton.addEventListener('click', function(){
    Notification.requestPermission()
        .then(resultado => console.log('El resultado es ${resultado}'))
});

//Notificaciones.
//'Si los permisos son aceptados por el usuario, la notificación'.
if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación',{
        icon: 'img/ccj.png',
        body: 'Codigo con Juan'
    })
}   


//Async / Await.
//Esto hace que carguen más rápido algunas cosas y otras que no.

function descargarNuevosClientes(){
    return new Promise (resolve => {
        console.log('Descargando clientes... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app(){
    try {
        const resultado = await descargarNuevosClientes();
        //Este código espera el await.
        console.log(resultado);
    }
    catch(error){
        console.log(error);
    }
}


//setTimeout: la función se ejecuta después de un tiempo. Los valores son en 
//milisegundos, es decir, 1000 son 1 segundo.
setTimeout(function(){
    console.log('Set TimeOut.')
}, 1000);

//setInterval: lo mismo que setTimeout, pero en intervalos.
setTimeout(function(){
    console.log('Set TimeOut.')
}, 1000);

//Dos awaits al mismo tiempo.
async function app(){
    try {
        const resultado = await Promise.all([descargarNuevosClientes(),
        descargarUltimosPedidos()]);
        //Este código espera el await.
        console.log(resultado[0]);
        console.log(resultado[1]);
    }
    catch(error){
        console.log(error);
    }
}


//Fecth API.
//Como Ajax: obtiene y envía información a un servidor.
//Se obtiene una respuesta de un servidor en formato JSON (lenguaje de transporte de
//datos). Se crea en cualquier lenguaje de backend y se "consume" en frontend en JS.

function obtenerEmpleados(){
    //Fetch permite acceder a una API: se pone un archivo JSON o un link a una API.
    const archivo = 'General database.jsonc';
    fetch(archivo)
        .then(resultado => {
            return resultado.json();
        })
        .then(datos => {
            const {empleados} = datos;
            empleados.forEach(empleado => {
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

                //Mostrar en HTML.
                document.querySelector('.contenido').textContent += empleado.nombre;
            });
        })
}