# Proyecto de Manejo de Estudiantes

Este proyecto es una API REST que permite el manejo de estudiantes en una base de datos PostgreSQL. La API es construida con Node.js y Express, y utiliza el paquete `pg` para la conexión a la base de datos.

## Funcionalidades

La API proporciona las siguientes funcionalidades:

- Agregar un nuevo estudiante con su nombre, RUT, curso y nivel.
- Consultar un estudiante por su RUT.
- Consultar todos los estudiantes registrados.
- Actualizar la información de un estudiante por su RUT.
- Eliminar un estudiante por su RUT.

## Prerrequisitos

Para poder ejecutar la API, se deben cumplir los siguientes prerrequisitos:

- Tener instalado Node.js 
- Tener instalado PostgreSQL .
- Tener instalado un cliente de PostgreSQL, como por ejemplo pgAdmin.

## Instalación

Para instalar la API, se deben seguir los siguientes pasos:

1. Clonar el repositorio de GitHub en la computadora.
```bash
git clone https://github.com/danilojpalma/always_music_2.git

2. Acceder al directorio del repositorio.
```bash
cd always-music 2>
```
3. Instalar las dependencias del proyecto.
```bash
npm install
```
4. Crear la base de datos en PostgreSQL.

Para crear la base de datos, se debe ejecutar el siguiente comando en el cliente de PostgreSQL:
```sql
CREATE DATABASE estudiantes;
```
5. Configurar la conexión a la base de datos.

En el archivo `config/db.js`, se deben configurar los parámetros de conexión a la base de datos creada en el paso anterior.
```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: '<tu_usuario_de_postgresql>',
  host: '<tu_host_de_postgresql>',
  database: 'estudiantes',
  password: '<tu_contraseña_de_postgresql>',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
```
6. Ejecutar la API.
```bash
npm start
```
La API se ejecutará en el puerto 3000 de la computadora (`http://localhost:3000`).

## Cómo usarlo

Para utilizar la API, se debe realizar una solicitud HTTP a la ruta correspondiente a la funcionalidad deseada. A continuación, se detallan las rutas y los métodos HTTP que se deben utilizar:

- `GET /`: Muestra un mensaje de bienvenida.
- `GET /agregar?nombre=<nombre>&rut=<rut>&curso=<curso>&nivel=<nivel>`: Agrega un nuevo estudiante con la información proporcionada en la consulta.
- `GET /consultarRut?rut=<rut>`: Consulta un estudiante por su RUT y devuelve su información en formato JSON.
- `GET /consultarTodos`: Consulta todos los estudiantes registrados y devuelve su información en formato JSON.
- `GET /actualizar?rutActual=<rut_actual>&nuevoNombre=<nombre_nuevo>&nuevoRut=<rut_nuevo>&nuevoCurso=<curso_nuevo>&nuevoNivel=<nivel_nuevo>`: Actualiza la información de un estudiante por su RUT.
- `GET /eliminar?rut=<rut>`: Elimina un estudiante por su RUT.

Se recomienda utilizar una herramienta como [Thunder Client](https://www.thunderclient.com/) o [Postman](https://www.postman.com/) para realizar las solicitudes HTTP de manera más sencilla y visualizar los resultados.

## Código fuente

El código fuente de la API se encuentra en el siguiente repositorio de GitHub:

[https://github.com/<tu_usuario_de_github>/<nombre_del_repositorio>](https://github.com/<tu_usuario_de_github>/<nombre_del_repositorio>)

En el repositorio, se pueden encontrar los archivos de configuración de la base de datos (`db.js`), las consultas a la base de datos (`queries.js`) y las rutas de la API (`index.js`).

## Licencia

Este proyecto se encuentra bajo la licencia MIT. Para más información, consultar el archivo `LICENSE.md`.