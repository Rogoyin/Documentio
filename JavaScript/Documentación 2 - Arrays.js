//Arreglos o Arrays.
//Agrupan datos relacionados (no hay restricciones).


const numeros = [1,2,3];
const meses = ['Enero', 'Febrero', 'Marzo'];

//Ver en la consola en forma de tabla.
console.table(numeros);

//Acceder a un índice del arreglo.
numeros[1];

//Extensión de arreglos.
numeros.lenght;

//Iteradores. Código que se ejecuta mientras haya elementos en el arreglo.
numeros.forEach(function(numeros) {
    console.log(numeros);
})
//Lo que hace es imprimir todos los elementos del arreglo numeros.


//Modificar Arrays. Esta es la forma imperativa, porque modifica el arreglo.
//Hoy en día, igualmente, no se recomienda modificar arreglos originales.

//Agregar un elemento al final de un arreglo.
//En el caso de que sepamos su extensión, se puede agregar así.
numeros[3] = 5; 
//Esta forma, con push, es más práctica.
numeros.push(5,6);

//Agregar un elemento al principio de un arreglo.
numeros.unshift(5,6);

//Modificar un elemento en un arreglo.
numeros[0] = 5;

//Eliminar último elemento en un arreglo.
numeros.pop();

//Eliminar primer elemento en un arreglo.
numeros.shift();

//Eliminar elementos.
numeros.splice(2,1);
//Elimino el elemento de indice 2, y el segundo número es para indicar cuantos
//elementos elimino (en este caso, solo 1, que sería el de índice 2).


//Rest Operator o Spread Operator.
//Esta es una forma de modificación de arreglos declarativa: no modifica el
//original.

//Agrego uno al final.
const nuevosNumeros = [...numeros, 3]

//Agrego uno al inicio.
const nuevosNumeros = [3, ...numeros]

//Destructuring con arreglos: extraer elemento y crear variable en un solo paso.
const numeros = [1,2,3,4,5]
//Como quiero el tercer valor, pongo comas ",".
const [ , ,tres] = numeros;
//Con esta sintaxis creo un arreglo con el 2, 3, 4, 5.
const [uno, ...tres] = numeros;


//Array Methods.
//Includes.
//Ver si está incluido un elemento en el arreglo.
numeros.includes(4);

//Some.
//Ver si determinado elemento está dentro de un arreglo de objetos.
//Itera sobre los objetos, como el forEach, y se fija si existe.
const meses = ['Enero', 'Febrero', 'Marzo'];

const carrito = [
    {nombre: 'Monitor', precio:500   },
    {nombre: 'Cámara', precio:400   }, 
    {nombre: 'Sillón', precio:300   }, 
    {nombre: 'Equipo', precio:200   }, 
    {nombre: 'PC', precio:100   },  
];

resultado = carrito.some(function(producto) {
    return producto.nombre == 'Monitor'
});

//Reduce.
//Une todos los elementos en un solo resultado.
//Esto suma todos los elementos del carrito. El 0 del final es el número inicial.
resultado = carrito.reduce(function(total,producto){
    return total + producto.precio
}, 0);
//Si no hubiera objetos, sería así.
resultado = carrito.reduce((total,producto) => total + producto.precio, 0);

//Filter.
//Filtra elementos y devuelve los que sean de tal condición.
resultado = carrito.filter(function(producto){
    return producto.precio < 400
});
//Los que no son de tal forma con el !==.
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Sillón'
});

//findIndex.
//Encontrar el índice de un elemento. Si no lo encuentra, da -1.
const indice = meses.findIndex( mes => mes === "Abril");
//Encontrar índice en arreglo de objeto.
const indice2 = carrito.findIndex( producto => producto.precio === 100);

//find.
//Encuentra el primer resultado en un arreglo de objetos que cumple la condición
//y lo extrae en una variable.
const resultado = carrito.find (producto => producto.nombre ==="Tablet");

//every.
//Todos los elementos de un arreglo debe cumplir una condición para dar true.
const resultado = carrito.every(producto => producto.precio < 800);

//Concat.
//Unir dos arreglos. Los une en ese orden.
const meses = ["Junio", "Agosto"]
const meses2 = ["Septiembre"]
const resultado = meses.concat(meses2, "Otro mes")