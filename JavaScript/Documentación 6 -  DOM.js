//DOM.
//Seleccionar contenido HTML y manipularlo. Es el código HTML a través de 
//JavaScript.


//Selección de elementos.

//querySelector.
//Retorna ninguno o un elemento que seleccionás. 
//Se hace con clases o id (más recomendado).

const heading = document.querySelector('#heading');
console.log(heading)

//Todo el documento, los enlaces o imágenes. Esto ya no se usa.
const body = document.body;
const enlaces = document.links;
const imagenes = document.images;

//querySelectorAll.
//Retorna muchos elementos que cumplen con la condición en una nodeList.
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
//Aceceder al primero de los enlaces.
console.log(enlaces[0]);

//Acceder al texto de un elemento.
const encabezado = document.querySelector(".titulo");
//1° método. Igual al segundo, solo que lo encuentra siempre.
console.log(encabezado.textContent);
//2° método. Si en CSS está en visibilituy:hidden, no lo encuentra.
console.log(encabezado.innerText);
//3° método. Trae el HTML.
console.log(encabezado.innerHTML);
//4° método.
const encabezado = document.querySelector(".titulo").textContent;

//getElementById. Ya no se usa.
//Si tenés dos id con el mismo nombre, retorna solo el primero.
const id = document.getElementById('heading');

//getElementByClassName. Seleccionar elementos por su clase. Ya no se usa.
const clase = document.getElementsByClassName("Clase");


//Modificación de código HTML.

//Modificar enlaces.
enlaces[0].href = 'google.com';

//Modificar texto.
heading.textContent = 'Nuevo Heading';

//Agregar o eliminar clase.
heading.classList.add('Clase');
heading.classList.remove('Clase');

//Cambiar imagen.
const imagen = document.querySelector('.card img');
imagen.src = 'img/imagen.jpg';

//Seleccionar el quinto (o cualquier) elemento de lista de elementos iguales.
const ultimoCard = document.querySelector('enlace:nth-child(4');


//Cambiar CSS y dar estilos.
const encabezado = document.querySelector('h1');
encabezado.style.backgroundColor = 'red';
//Las propiedades son las mismas que en CSS, solo que en vez de un "-", va una
//mayúsculas. 
//No es recomendable usar esta forma igualmente, porque el código queda inmenso.
//Es más recomendable agregar clases, como se especifica más arriba.

//Verificar si elemento tiene una clase.
enlace.classList.contains('negrita');


//Traversing the DOM: recorrer el documento seleccionando elementos de interés.
//Navegar desde el elemento padre hasta los hijos.

const navegacion = document.querySelector('.menu');
//Selecciona todos los elementos hijos del menú en una lista HTML.
console.log(navegacion.children);
//Acceder al primer elemento.
navegacion.children[1]
//Acceder al nombre y al tipo del elemento.
navegacion.children[1].nodeName
navegacion.children[1].nodeType //Devuelve un número: fijarse en documentación.

//Navegar desde el elemento hijo hasta el padre.
const enlace = navegacion.children[1]
const menu = enlace.parentElement;

//Navegar al elemento hermano.
const enlaceSiguiente = enlace.nextElementSibling;
const enlaceAnterior = enlace.previousElementSibling;

//Primer y último elemento hijo.
const primerEnlace = navegacion.firstElementChild;
const ultimoEnlace = navegacion.lastElementChild;


//Eliminar elementos.

//Eliminar elementos del DOM.
primerEnlace.remove();

//Eliminar desde el padre.
navegacion.removeChild(navegacion.children[2]);


//Generar código HTML.

//Crear una etiqueta o elemento.
const nuevoEnlace = document.createElement('A');
//Crear atributos.
nuevoEnlace.href = 'nuevo-enlace.html';
//Crear texto.
nuevoEnlace.textContent = 'Un nuevo enlace';
//Agregar o quitar clase.
nuevoEnlace.classList.add('navegacion__enlace');
nuevoEnlace.classList.remove('navegacion__enlace');
//Agregarlo al documento.
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);
//Agregarlo en el lugar que quiero, después de.
navegacion.insertBefore(nuevoEnlace,navegacion.children[1]);
//Agregar HTML limpio.
variable.innerHTML = `
<a href="#">Hola</a>
`;


//Eventos. Todo lo que el usuario hace.

//Esta función relaciona un evento (se especifica primero) a
//una función que se le especifica después.
window.addEventListener('load', function(){
    console.log(2);
})
//Load quiere decir "cuando cargue la página completamente". Esto es lo mismo:
window.onload = function(){
    console.log(3);
}

//El DOMContentLoaded solo espera la carga del HTML; le chupa un huevo el CSS e img.
//Es más rápido que load.
//Es un evento que se ejecuta cuando se carga todo el documento.
window.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})


//Eventos con el mouse.

//Cuando se scrollea.
window.onscroll = function(){
    console.log("Scrolling....")

    //Saber cuanto scroll diste.
    const scrollPixeles = window.scrollY;
    console.log(scrollPixeles);

    //Evento cuando determinado elemento aparece en pantalla.
    const seccion = document.querySelector('.seccion');
    //Función para saber la ubicación de un elemento en la web.
    const ubicacion = seccion.getBoundingClientRect();
    //If para el evento.
    if(ubicacion > 100){
        console.log("Estás lejos...")
    }
    else{
        console.log("Llegaste, putazo...")
    }
}

//Cuando se entra en un elemento, en este caso, el menú, con el mouse.
navegacion.addEventListener('mouseenter', function(){
    console.log("Entra el mouse");
})

//Cuando se sale de un elemento, en este caso, el menú, con el mouse.
navegacion.addEventListener('mouseout', function(){
    console.log("Entra el mouse");
})

//Doble click.
navegacion.addEventListener('dblclick', function(){
    console.log("Entra el mouse");
})


//Eventos en inputs.
const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('...', function(){
    console.log("Entra el mouse");
})
//Keydown: cuando presiono una tecla en el input, cuando empiezo a escribir.
//Keyup: cuando presiono y suelto esa tecla.
//Blur: cuando entro al input y salgo con el mouse.
//Copy: cuando se copia algo.
//Cut: cuando se corta algo.
//Paste: cuando se pega algo.
//Input: todos los anteriores menos el blur.


//Evento submit para validar formularios.
//Es correcto que use el submit y no el click, que puede estar asociado a cualquiera.
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento){
    //Previene la ejecución del código por default que es enviar los datos al 
    //servidor.
    evento.preventDefault();

    const{nombre,email,mensaje} = datos;
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError('Algún campo está vacío');

        return; 
    }
    console.log('Enviando formulario');
})


//Seleccionar elementos y asociarles eventos.
/*const boton = document.querySelector('.boton--primario');
boton.addEventListener('click', function(evento){
    console.log(evento);
    //Previene que haga por default lo que hacen los submits, que es enviar la info.
    //Sirve para validar formularios.
    evento.preventDefault();
    console.log('Enviando formulario...')
});*/

//Eventos del teclado.
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

//Registra un cambio y ejecuta, pero solo al final, no en tiempo real.
/*nombre.addEventListener('change',function(){
    console.log('Escribiendo...')
})*/

//Registra un cambio y ejecuta en tiempo real.
/*nombre.addEventListener('input',function(){
    console.log('Escribiendo...')
});*/

//Registrar lo que se va escribiendo con sintaxis de evento y target.value.
/* nombre.addEventListener('input',function(e){
    console.log(e.target.value);
});*/

//Llenar objeto con lo que se ingresa en formulario.
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

function leerTexto(e){
    //Le especifico que quiero que se cambie el dato del objeto con lo que se va
    //ingresando.
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

nombre.addEventListener('input',leerTexto)
email.addEventListener('input',leerTexto)
mensaje.addEventListener('input',leerTexto)


//Función para mostrar el error en pantalla.
function mostrarError(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //Hacer que desaparezca el cartel de errordespués de 5 segundos.
    setTimeout(function(){
        error.remove();
    },5000);
}


//Event Bubbling.
//A veces, se propagan los eventos, ya que pasa que ocurren cosas asociadas a
//elementos padre. Se detienen con stopPropagation o delegation.

//stopPropagation.
seccion.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("Click en la sección");
})

//Delegation.
seccion.addEventListener('click', function(e){
    //Esto de abajo identifica a qué se le da click. El target dice el tipo.
    if(e.target.classList.contains('titulo')){
        console.log("Diste click en título...");
    } 
    if(e.target.classList.contains('info'){
        console.log("Diste click en info...")
    }
})


//Deshabilitar botones.
const boton = 10;
boton.disabled = true;


//Expresiones regulares.
//Las buscamos en internet. Por ejemplo, para validar un mail.

if(e.target.type === "email"){
    const expresionRegular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (expresionRegular.test(e.target.value)){
        
    }
    else{
        e.target.style.borderColor = "red";
        mostrarError("El email no es válido");
    }
}

//Animaciones CSS.
//https://tobiasahlin.com/spinkit/