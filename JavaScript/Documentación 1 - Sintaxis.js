/*
Para que aparezca en HTML:
<script></script>

Se pone un ; siempre al final, aunque no es tan estricto en JS.
Es un lenguaje de tipo dinámico, no hay que declarar el tipo de variable.

En los cálculos combinados, se separa en término aun no poniendo paréntesis.

Las listas o arreglos empiezan de la posición 0.

Hosting: JavaScript se ejecuta en 2 vueltas; primero, lee funciones, 
después ejecuta. Por eso si ponés un llamado a función antes de declararla, 
no hay error.
*/



//Correr JavaScript en modo estricto, es decir, si hay un error, que lo tire.
"use strict";



//Constructor.
//Construye una nueva variable. Se usa con el new y el tipo de dato.
const meses = new Array('Enero', 'Febrero', 'Marzo');



//Variables.
//var asigna valores a las variables, pero ya no se usa.
var producto = 'Audífonos';
//Se puede asignar sin valor.
var disponible;
//Reasignar valor.
producto = 'Gamer';

//Consola.
//Ver el valor de una variable (print).
console.log(producto);
//Error.
console.error('Error');
//Advertencia.
console.warm('Advertencia');
//Calcular tiempo de ejecución.
console.time('Inicio');
console.timeEnd('Final');

//Tipo de dato del valor.
typeof nombre;

//let: para asignar variables sin valores o que se van a cambiar después.
let disponible;
//const: para asignar variables con valores y no se pueden reasignar después.
const producto = 'Audífono';



//Operaciones con Strings.
//Transformar a variable String.
const variable1 = String('Hola');
//Cantidad de carácteres.
variable1.length;
//Saber posición de string en cadena más grande. Aparece -1 si no fue encontrada.
variable1.indexOf('Hola');
//Saber si string aparece en cadena de string más grande. Aparece True o False.
variable1.includes('Hola');
//Eliminar espacios antes del primer y último caracter.
variable1.trimStart();
variable1.trimEnd();
variable1.trimStart().trimEnd();
//Esto es lo mismo, de los dos lados:
variable1.trim();
//Reemplazar.
variable1.replace('Hola', 'Chau');
//Extraer o cortar una cadena de texto. 
//Los números indican desde qué posición se extraen los caracteres.
variable1.slice(1,10);
//Alternativa a slice, pero más inteligente (si le pasás un número mayor de inicio,
//lo cambia de posición. Ejemplo: (2,1), cambia a (1,2)).
variable1.substring(1,10);
//Cortar una letra.
variable1.charAt(1);
//Repeat: repetir cadena de texto varias veces.
variable1.repeat(3); 
//Split: divide un string según lo que le pasás, en nuestro caso, espacios.
variable1.split(" ");
//Pasar a mayúsculas y minúsculas.
variable1.toUpperCase();
variable1.toLowerCase();


//Comparadores.
console.log(20 === "20") //False. Se fija los tipos de variables.
console.log(20=="20") //True. No se fija el tipo.

//Variables undefined. No están definidas.
let numero1;
console.log(numero1);

//Variables null. No existen.
let numero2 = null;

//Booleans. Operador ternario. Si es true, lo primero, si no, lo segundo.
const autenticado = true;
console.log(autenticado ? "Si, está autenticado" : "No, no está");

//Operaciones con Números (int o float).
//Variables tipo número aparecen en azul en el navegador, las tipo string, en negro.
const numero1 = 100;
const numero2 = "200";

//Objeto Math.
//Elemento aleatorio, casi siempre más bajo de uno si no se pone nada.
Math.random();
//Redondear.
Math.round(2.2);
//Redondear para arriba.
Math.ceil(2.2);
//Redondear para abajo.
Math.floor(2.9);
//Elemento aleatorio, pero más bajo que tal número.
Math.floor(Math.random(30));
//Potencia. En este caso es 2 a la cuarta.
Math.pow(2,4)
//abs, min, sqrt, max, todo es igual.


//Convertir string a número entero o float.
Number.parseInt("20");
Number.parseFloat("20.2");

//Verificar si un número es un entero.
Number.isInteger(20);


//Incrementos.
let numero3 = 10;
//Suma 1 al final, por lo que, si imprimimos "numero3" da 10.
numero3++;
//Suma 1 al principio, por lo que, si imprimimos "numero3" da 11.
++numero3;
//Lo mismo con la resta.
numero3--;
--numero3;
//Incrementar en otro número.
numero3+= 10;


//Concatenación.
const nombre = "Juan";
const email = "correo@correo.com";
console.log("Nombre del cliente: " + nombre + " Email: " + email);

//Template Strings.
console.log(`Nombre Cliente: ${nombre} Email: ${email}`);
//Reemplaza a la concatenación. Guarda con la comilla invertida.











































