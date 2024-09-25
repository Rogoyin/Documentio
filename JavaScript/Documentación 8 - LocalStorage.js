//Local Storage o Session Storage.
//Primero ponemos la "key", que es el tipo de dato, y después el valor.
localStorage.setItem('nombre','Juan');
sessionStorage.setItem('nombre','Juan');


//Convertir objetos o arreglos en strings.
//En el Local o Session Strorage no se pueden pasar arreglos ni objetos.
const objeto = {
    atr1 : 1,
    atr2 : 2
}

const objetoString = JSON.stringify(objeto);
localStorage.setItem('objeto',objetoString);


//Obtener datos almacenados en LocalStorage.
const nombre = localStorage.getItem("nombre");

//Obtener objetos.
const objetoJSON = localStorage.getItem("objeto");
//Convertir nuevamente a objeto (o arreglo).
JSON.parse(objetoJSON);


//Eliminar datos de LocalStorage.
localStorage.removeItem("nombre");

//Limpiar todo.
localStorage.clear();


