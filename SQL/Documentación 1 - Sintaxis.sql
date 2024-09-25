'''
mysql -u usuario -p
Iniciar sesión.

SHOW DATABASES;
Mostrar las bases de datos.

CREATE DATABASE nombre;
Crear base de datos.

USE nombre;
Entrar a la base de datos.

SHOW TABLES;
Ver las tablas.

CREATE TABLE servicios (
    -> id INT(11) NOT NULL AUTO_INCREMENT,
    -> nombre VARCHAR (60) NOT NULL,
    -> precio DECIMAL(6,2) NOT NULL,
    -> PRIMARY KEY(id);
    -> (;
Crear una tabla. 
El id es una columna, que es un entero con una extensión de 11 
dígitos y es un INT (puede ser TINYINT, FLOAT, DECIMAL (no redondea), 
DOUBLE (muchas coordenadas), VARCHAR (texto corto), CHAR (corto con extensión fija,
es decir, por más que no agregue texto, guarda espacios en blanco. Para contraseñas)).
NOT NULL es que no puede estar vacío.
AUTO_INCREMENT aumenta el id en 1 en 1.
En DECIMAL, la extensión del número es de 6 y los que vienen después de la coma, 2.
PRIMARY KEY especifica cual es el identificador del servicio.

DESCRIBE tabla;
Ver la estructura de una tabla.

CRUD.
Tiene 4 operaciones.

INSERT INTO servicios (nombre, precio) VALUES 
-> ("Corte de cabello", 80),
-> ("Corte de cabello de mujer", 70);
Insertar un registro en la tabla.

SELECT * FROM servicios;
Mostrar la base de datos entera.

SELECT nombre FROM servicios;
Muestra solo la columna que quiero.

SELECT id, nombre, precio FROM servicios ORDER BY precio ASC;
Ordenar en base a columna.

SELECT id FROM servicios LIMIT 2;
Limita a 2 resultados lo que muestra.

SELECT id FROM servicios WHERE id = 3;
Muestra solo el registro con id = 3.

UPDATE servicios SET precio = 70 WHERE id = 2;
Cambia el precio del registro con id = 2.

DELETE FROM servicios WHERE id = 1;
Eliminar el registro con id = 1.

ALTER TABLE servicios ADD description VARCHAR(100) NOT NULL;
Se modifica la tabla y se agrega una columna.

ALTER TABLE servicios CHANGE description nuevonombre VARCHAR(50) NOT NULL;
Se modifica el nombre de una columna y su extensión. No se puede cambiar 
el tipo de dato.

DROP TABLE servicios;
Eliminar tabla.

SELECTORES.
Filtran resultados.
SELECT * FROM servicios WHERE precio <= 80;
SELECT * FROM servicios WHERE precio BETWEEN 100 AND 200;

SELECT * FROM servicios WHERE precio IN (100,200);
Selecciona solo los que tienen 100 y 200.

SELECT * FROM servicios WHERE precio IN (100,200) and id = 1;
Selecciona varias condiciones.

AGRUPADORES.
Agrupan datos de un mismo tipo. Por ejemplo, una tabla con reservaciones con una
columna de fechas. 

SELECT COUNT (id), fecha
FROM reservaciones
GROUP BY fecha
ORDER BY COUNT(id) DESC;
Crea una columna nueva (id), donde agrupa los registros de fecha (GROUP BY) y los 
ordena por la cantidad que hay.

SELECT SUM(precio) AS totalServicios FROM servicios;
Suma toda la columna.


BUSCAR.
SELECT * FROM servicios WHERE nombre LIKE 'Cabello%';
Busca los que empiezan con "Cabello", por el signo de porcentaje al final. Si el
signo está al principio, lo busca al final. Si lo busco en algún lugar, van dos %%.

SELECT CONCAT(nombre,'',apellido) AS nombreCompleto FROM reservaciones;
Unir dos columnas.

5 Reglas:
1NF. Las columnas deben tener 1 solo valor y no debe haber columnas repetidas.
2NF. 

Relacionar tablas a través de una columna.
CREATE TABLE citas (
    id INT(11) NOT NULL AUTO_INCREMENT,
    fecha DATE NOT NULL,
    hora TIME NOT NULL,
    clienteId INT(11) NOT NULL,
    PRIMARY KEY (id),
    KEY clienteId (clienteId),
    CONSTRAINT cliente_FK
    FOREIGN KEY (clienteId)
    REFERENCES clientes (id)
    );

Con un JOIN, especificamos que el dato de clienteId de la tabla citas es el mismo que
el id de la tabla clientes, y consultamos todos los datos:
SELECT * FROM citas
INNER JOIN clientes ON clientes.id = citas.clienteId;

TABLA PIVOTE.
Se pueden crear tablas pivote, con datos de otras tablas. Tiene el nombre surgido
de la mezcla de esas tablas.

VER INFORMACIÓN DE TABLA PIVOTE.
SELECT * FROM tablaPivote
LEFT JOIN citas ON citas.id = ciitasSevicios.citaId
LEFT JOIN servicios ON servicios.id = citasServicios.servicioId

