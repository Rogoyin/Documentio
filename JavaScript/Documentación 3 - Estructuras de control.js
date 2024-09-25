//If.
a = sumar(1,3)

if(a == 10){
    console.log('La suma da 10');
}
else{
    console.log('La suma no da 10')
}

// Switch. Para cuando hay muchos else.
metodoPago = 'Tarjeta'
switch(metodoPago){
    case 'Tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    case 'Cheque':
        console.log('Pagaste con cheque');
        break;
    case 'Efectivo':
        console.log('Pagaste con efectivo');
        break;
    default:
        console.log('Aun no pagaste');
        break;
}

//Dos condiciones o más: "y".
const usuario = true;
const puedePagar = true;
if(usuario && puedePagar){
    console.log("Si puede pagar.")
}

//Una de las dos condiciones: "or".
const usuario = true;
const puedePagar = false;
if(usuario || puedePagar){
    console.log("Si puede pagar.")
}


//for.
//Misma estructura que el for de Python.
for(let i = 0; i<10; i++){
    console.log(i);
}

const a = [1,2,3,4,5];
for(let i = 0; a.lenght; i++){
    console.log(a[i]);
}

// Ternario
const autenticado = true;
autenticado > console.log('Usuario autenticado') : console.log('No autenticado');

//Continue. Rompe el ciclo en ese punto, pero después sigue.
const numeros = [1,2,3,4,5];
//Lo que hago es imprimir todos los números salvo el tres, que sale "Tres".
for (i = 0; i = numeros.length; i++){
    if (i==3){
        console.log("Tres");
        continue;
    }
    console.log(numeros[i]);
}

//Ejercicio del Fizz Buzz.
//Múltiplos de 3 imprimen Fizz.
//Múltiplos de 5 imprimen Buzz.
//Múltiplos de ambos imprimen Fizzbuzz.

for(let i=1; i = 100; i++){
    if (i%3 === 0 && i%5 ===0){
        console.log("Fizzbuzz");
    };
    if(i%3 === 0){
        console.log("Fizz");
    };
    if(i%5 === 0){
        console.log("Buzz");
    }
}


//while. Evalúa una condición y ejecuta si es cierta.
//Lo mismo que el for pero escrito distinto.
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

//do while.
//Lo mismo que el while, pero ejecuta el código por lo menos una vez.
let i = 0;
do{
    console.log(i);
    i++;
}
while(i < 10);

//forEach.
//Para mostrar los elementos en pantalla de determinado arreglo. No sirve para crear
//nuevos arreglos con esos elementos.
const a = [1,2,3,4,5];
a.forEach(function(elemento){
    console.log(elemento)
})

a.forEach(elemento => console.log(elemento));

//map.
//Lo mismo que forEach, pero sirve para crear nuevo arreglo.
const a2 = a.map(elemento => elemento);

//for of.
//Recorre los elementos de un arreglo.
for(let i of a){
    console.log(i);
}


//TryCatch.
//Se utiliza para errores que detienen todo el programa que sigue al error.
const numero1 = 10;
const numero3 = 20;

try{
    console.log(numero2)
}
catch (error){
    console.log(error)
}


//Promises.
//Refleja un valor que podrá estar disponible ahora, en algún momento o nunca.
//Se pasan dos parámetros en la función por default: resolve y reject.
//Resolve se ejecuta (es una función) cuando el promise se cumple. Reject al revés.
const usuarioAutenticado = new Promise( () => {
    const auth = true;

    if(auth){
        resolve('El usuario está autenticado.');
    }
    else{
        reject('No se pudo iniciar sesión.');
    }
});
//Promise tiene 3 valores:
//Pending: el promise no se rechazó ni se cumplió, está en espera.
//Fullfilled: el promise se cumplió.
//Rejected: se ha rechazado o no se pudo cumplir.

//Acceder a valores del promise en la consola.
usuarioAutenticado
    .then (function(resultado){
        console.log(resultado)
    })
    .catch(function(error){
        console.log(error)
    });

console.log(usuarioAutenticado);