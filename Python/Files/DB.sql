-- Crear base de datos en la ubicación por defecto
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'DB')
BEGIN
    CREATE DATABASE DB;
END
GO

-- Usar la base de datos
USE DB;
GO

-- Verificar y crear tabla de usuarios
IF OBJECT_ID('usuarios', 'U') IS NULL
BEGIN
    CREATE TABLE usuarios (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre VARCHAR(50),
        correo VARCHAR(100),
        edad INT,
        fecha_registro DATE
    );
END

-- Verificar y crear tabla de productos
IF OBJECT_ID('productos', 'U') IS NULL
BEGIN
    CREATE TABLE productos (
        id INT IDENTITY(1,1) PRIMARY KEY,
        nombre VARCHAR(100),
        descripcion TEXT,
        precio DECIMAL(10, 2),
        stock INT
    );
END

-- Verificar y crear tabla de ventas
IF OBJECT_ID('ventas', 'U') IS NULL
BEGIN
    CREATE TABLE ventas (
        id INT IDENTITY(1,1) PRIMARY KEY,
        usuario_id INT,
        producto_id INT,
        cantidad INT,
        fecha_venta DATE,
        FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
        FOREIGN KEY (producto_id) REFERENCES productos(id)
    );
END

-- Insertar datos en usuarios
INSERT INTO usuarios (nombre, correo, edad, fecha_registro) VALUES
('Juan Pérez', 'juan.perez@example.com', 30, '2023-01-15'),
('María López', 'maria.lopez@example.com', 25, '2023-02-20'),
('Carlos García', 'carlos.garcia@example.com', 35, '2023-03-10'),
('Ana Fernández', 'ana.fernandez@example.com', 28, '2023-04-05');

-- Insertar datos en productos
INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
('Producto A', 'Descripción del producto A', 10.50, 100),
('Producto B', 'Descripción del producto B', 20.00, 50),
('Producto C', 'Descripción del producto C', 15.75, 75),
('Producto D', 'Descripción del producto D', 5.99, 200);

-- Insertar datos en ventas
INSERT INTO ventas (usuario_id, producto_id, cantidad, fecha_venta) VALUES
(1, 1, 2, '2023-05-10'),
(2, 3, 1, '2023-05-11'),
(3, 2, 4, '2023-05-12'),
(4, 4, 3, '2023-05-13');

-- Consultar datos
SELECT * FROM usuarios;

USE DB;
GO

EXEC sp_helpfile;