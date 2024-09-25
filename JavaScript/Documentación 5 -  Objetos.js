//Objetos.
//Así sería con variables.
const nombreProducto = "Monitor";
const precio = 300;
const disponible = true;

//Estructura del objeto, que contiene en una variable más información.
//Lo de adentro son las propiedades del objeto.
//Un objeto, por más que sea const o let, se modifica.
const producto = {
    nombreProducto : "Monitor",
    precio : 300,
    disponible: true,
}

//Sintaxis de punto para acceder a propiedades de los objetos.
producto.precio;
//Otra sintaxis para acceder a esa propiedad.
producto["precio"];

//Agregar propiedades del objeto.
producto.imagen = 'imagen.jpg';
//Quitar propiedades del objeto.
delete producto.disponible;

//Extraer propiedad y hacerla variable.
const precioProducto = producto.precio;

//Destructuring. 
//Hace lo mismo que lo de arriba; saca información de una estructura.
const {precio, disponible} = producto;
//Lo que hace en una sola línea es extraer el precio y el disponible y 
//crearme una variable con cada uno de ellos.
//Si hubiera un objeto dentro de un objeto (ejemplo, disponible es objeto),
//y yo quisiera que un atributo dentro de ese objeto sea una variable:
const {precio, disponible: {caracteristica}} = producto;

//Keys. Saber atributos de un objeto (nombreproducto, precio...).
Object.keys(producto);
//Values. Los valores de los atributos (Monitor, 300, ...).
Object.values(producto);
//Entries. Retorna tanto las keys como los values.
Object.entries(producto);


//Object Methods.
//Prohibir que un objeto sea modificado (sellarlo).
Object.freeze(producto);
//Ver si un objeto está sellado o prohibida su modificación.
Object.isFrozen(producto);

//Prohibir eliminación y adición de propiedades, pero sí modificar existentes.
Object.seal(producto);


//Set y Get.
const reproductor = {
    cancion: '',

    //Agrega valores al objeto.
    set nuevaCancion(cancion) {
        this.cancion = cancion,
        console.log("Añadiendo ${cancion}");
    },

    //Obtiene esos valores.
    get obtenerCancion(cancion) {
        console.log("${this.cancion}")
    }
}

//Agrega la canción.
reproductor.nuevaCancion = "Close to the edge";
//Esto recupera esa canción y hace una operación.
reproductor.obtenerCancion;


//Unir dos objetos con Spread Operator.
//La buena práctica dice que no hay que modificar los objetos originales, sino crear
//otro nuevo con los dos que se unen.

const producto = {
    nombre : "Monitor",
    precio: 300,
    disponible: true,
}

const medidas = {
    peso : '1 kg.',
    medida: '1 m.',
}

const nuevoProducto = {...producto, ...medidas};

//Otra forma.
const resultado = Object.assign(producto,medidas)


//for in.
//Recorre los elementos de un objeto. 
const objeto = {
    modelo: "Camaro",
    año: 1989,
    color: "Rojo"
}

//Devuelve "modelo, año, color".
for(let i in objeto){
    console.log(i);
}

//Devuelve "camaro, 1989, rojo".
for(let i in objeto){
    console.log(`${objeto[i]}`);
}
//Otra forma.
for(let [llave,valor] of Object.entries(objeto)){
    console.log(valor);
    console.log(llave);
}


//this.
//Sirve para hacer referencia al mismo objeto (o lo que sea) para usarlo fuera.
const reserva = {
    nombre:'Juan',
    apellido:'Nogueroles',
    total: 5000,
    pagado: false,
    informacion:function(){
        console.log(`Nombre Cliente: ${this.nombre} y su cantidad a pagar es de
         ${this.total}`)
    }
}
//El arrow function no funciona en este caso.
console.log(reservacion.informacion())


//POO.

//Object Literal. Más estátito.
const producto = {
    nombre: 'Tablet',
    precio: 500,
}

//Object Constructor. Más dinámico.
//Construye tipos de objetos: almacena las formas que van a poder tener los objetos en 
//específico. Modela al objeto, es como un plano. Parecidos a clases, pero no son.
//¡Esto ya no se usa!
function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}

//Crea un objeto del tipo Producto.
const producto2 = new Producto('Monitor',400);


//Prototypes. Funciones asociadas a tipos de objetos.
//Crea funciones que solo se utilizan en un objeto en específico.

Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de
    ${this.precio}`;
}

console.log(producto2.formatearProducto)


//Clases. Los nombres van en mayúscula. Es lo mismo que Object constructor.
//Constructor es como si fuera una función.
class Producto {
    constructor(nombre,producto){
        this.nombre = nombre;
        this.producto = producto;
    }

    //Esto sería el prototype.
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de
        ${this.precio}`;
    }

    //Propiedades estáticas. Se llaman con clase.static, no objeto.static.
    static mensaje(){
        return "El producto es buenísimo"
    }
}

//Instancio la clase con un objeto nuevo.
const producto = new Producto('Monitor','200');
console.log(producto.formatearProducto());

//Herencia.
//Hereda todos los elementos de la clase padre.
class Libro extends Producto{
    constructor(nombre,precio,isbn){
        //La función súper traslada los parámetros de la función constructor padre.
        //Pero tienen que ser los mismos, no puedo poner isbn.
        super(nombre,precio);
        this.isbn = isbn;
    }

    //Si pongo una función que se llama igual a una de la clase padre, la
    //reescribe.
}

const libro = new Libro('JavaScript', 120, '95990')

//Propiedades privadas de un objeto.
//Se obtienen desde dentro de la clase, con el this. Desde afuera, con el objeto,
//no se puede conseguir, ejemplo, producto.nombre.
class Producto {
    #nombre;
    constructor(nombre,producto){
        this.#nombre = nombre;
        this.producto = producto;
    }
}