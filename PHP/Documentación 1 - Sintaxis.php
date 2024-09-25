<?php 

$nombre = "Juan";

//Imprimir.
echo $nombre;
print ($nombre);
//Imprimir detallado.
var_dump($nombre);

//Definir variable.
define("Constante","Valor de variable");

//Incluir formato HTML.
include "includes/header.php";

//Conocer extensión de un string.
echo strlen ("Hola");

//Eliminar espacios en blanco.
trim("Hola   ");

//Convertir a mayúsculas y minúsculas.
echo strtoupper("Hola");
echo strtolower("HOLA");

//Concatenar.
echo "El cliente ".$nombre." es un puto";
echo "El cliente {$nombre} es un puto";

//Arreglos.
$carrito = ["Compu","Tele","PC"];

//Ver componentes de arreglos.
echo "<pre>";
var_dump($carrito);
echo "</pre>";

//Añadir elemento al final y al principio.
array_push($carrito, "Audífonos");
array_unshift($carrito, "Tele 2");








?>
