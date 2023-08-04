<img src="public/images/boldoMedio.png" align="right" />
 <h1 align= left ><b>Individual 2 M7 /EquipoBoldo</b> <img src = "https://media.giphy.com/media/gF2m2JOyGReppog8hU/giphy.gif" width = 80px></h1>

<br>

## No lo olvides Revisar

<h2><b>Descripción del Proyecto</b> <img src ="https://media.giphy.com/media/GjhqaB166nKR4BoEnh/giphy.gif" width = 50px></h2>

📝 Crea en tu base de datos la siguiente tabla de nombre usuarios

CREATE TABLE usuarios(
id SERIAL PRIMARY KEY,
nombre varchar(50) NOT NULL,);
Ingresa por medio de la clase Pool un nuevo registro imprimiendo por consola el resultado de la inserción de la
consulta, entrega los valores al query mediante un array a la función para que sea una consulta parametrizada
Respuesta Esperada:
const { Pool } = require("mysql o pg u Oracle o la base de datos que Ud. use");
const config = {<tu configuración>};
const pool = new Pool(config);
const agregar = async(valores)=>{
const consulta = {
text: "insert into usuarios (id, nombre) values ($1, $2) RETURNING *",
values: valores
}
const response = await pool.query(consulta)
return response.rows
}

hay dos opciones el 

index.js necesita solo el con el node index.js

la otra opcion index-2.js, aqui debiera ir con sentencia luego, por ejemplo: node index-2.js 3 'felipe'


<br>

<h2><b>Instrucciones de Instalación</b> <img src = "https://media.giphy.com/media/3WZJkScSyfYVl7mGLd/giphy.gif" width = 60px></h2> 

⚙️ Para instalar las dependencias necesarias, sigue los siguientes pasos:

1. Clona el repositorio en tu máquina local.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   npm install

4. Abrir el archivo html ingresando al https://localhost:3000
5. Para Insertar colocar en la consola: node index.js nuevo 3 'pipe'


<br>

<details> <img src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTFtdWgyMmFrcHd4NjhuZWJ4aDJpcTlkbWlyNGQ4dDJwa2ZwZmptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/B4AgroOi1LkdPxMllY/giphy.gif" width = 50px> <summary><b>Ver las instrucciones</b></summary> 


1. Instalar las dependencias:

   ```sh
   npm install
   ```

2. En el caso de no poder instalar las dependencias:

   ```sh
   npm install --force
   ```

3. Las librerias que estamos ocupando `package.json`:

    ````sh
    ... 
    "name": "helpers",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    + "type": "module",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    "author": "",
    "license": "ISC",
    "dependencies": {
    "express": "^4.18.2",
    "pg": "^8.11.2"
    }
    ````

 
</details>

## Funcionalidades :sparkles:

✨ Con nuestra aplicacion puedes:

1. Muestra por consola el nuevo usuario con su id y nombre agregado, ademas lo agrega a la base de datos.


<!-- ![Foto de grupo](public/images/grupoVerde.jpg) -->

## Participantes del Grupo :busts_in_silhouette:

1. Loreto Godoy : https://github.com/loreGodoyUp

2. Daniel Mendez : https://github.com/danimen81

3. Zimram Blanco : https://github.com/Zimram

4. Jose Fuentealba : https://github.com/JoseFelipeGeo

5. Boris Guiñez : https://github.com/boanguibe

6. Felipe Andres Parra : https://github.com/33fparra


### Este proyecto está bajo la licencia ADALID.
<img src="public/images/boldoMedio.png" align="right" />

