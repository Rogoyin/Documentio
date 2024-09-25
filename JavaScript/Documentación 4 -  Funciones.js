//Funciones.


//Declaración de función.
//Puede llamarse antes de declararse y no da error.
function sumar() {
    console.log(10*10);
}
//Expresión de la función (lo mismo, pero escrito distinto).
//La detecta como variable, entonces no puedo llamar antes a esa función, da error.
const sumar2 = function(){
   return 3*3;
}
//IIFE. Función que se llama a sí misma.
//Sirven para proteger variables y no "dejarlas salir" del archivo js que estás 
//utilizando para así no se "mezclan", pero no para reutilizarse.
(function(){
    const cliente = 'Juan';
})()

//Llamada a función.
sumar();

//Parámetros por default.
function sumar(numero1 = 0, numero2 = 0){
    return numero1 + numero2
}


//Funciones ya creadas.
//Alerta en el navegador.
alert("Error");
//Alerta con campo para escribir.
prompt("¿Cuál es tu edad?");


//Diferencia entre method y función.
const numero1 = '20';

//Convertir string en número. Primero función, luego method.
parseInt(numero1);
numero1.toString();


//Métodos de propiedad.
//Son objetos con propiedades que son funciones.
const reproductor = {
    reproducir: function(id){
        console.log('Reproducir canción con el ID: ${id}');
    },
    pausar: function(){
        console.log('Pausando...');
    }

}

reproductor.reproducir(3840);
reproductor.pausar();


//Arrow functions. Son cortas y tienen una sola línea.
//Cuando tiene una línea sola, puedo ahorrarme las llaves y el return. 
//Y cuando tiene un solo parámetro, puedo ahorrarme el paréntesis.
const sumar = function(n1,n2) {
    return console.log(n1+n2);
}

const sumar = (n1,n2) => console.log(n1+n2);