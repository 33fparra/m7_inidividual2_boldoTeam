//Individual2

import pkg from 'pg';  //no me funciono cono el { Pool } decia que era de la version CommonJs 
const { Pool } = pkg;

// 1. Realizar la conexión con Base de Datos
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'pipe1234',
  database: 'individual2',
  port: 5432,
});

// Función para realizar consultas / querText toma la consulta de SQL a ejecuar / queryParams es un array con los valores que se van a insertar
async function queryDatabase(queryText, queryParams) {  
  const client = await pool.connect(); // creamos la conexion

  try {
    // 2. Hacer todas las consultas con un JSON como argumento // tiene tres propiedades
    const name = 'query-name';
    const query = {
      name,
      text: queryText,
      values: queryParams,
      rowMode: "array"
    };

    // 3. Hacer las consultas con texto parametrizado
    const res = await client.query(query);

    //res ya tiene la query, y el res.rows es prue la respuesta sea mas corta colo un segmento(lo q ue necesito)

    // 7. Obtener el registro de los estudiantes registrados en formato de arreglos
    return res.rows;
  } catch (err) {
    // 5. Capturar los posibles errores en todas las consultas
    console.error(err);   // si hay un error se registraen la consola
  } finally {
    // 4. Liberar a un cliente al concluir su consulta
    client.release(); //este no entiendo mucho que monos pinta, lo repsare, l oestoy colocando solo de forma automatica
  }
}

// Función para agregar un nuevo usuario
async function agregarUsuarios(id, nombre ) {
  const queryText = `
    INSERT INTO usuarios (id, nombre)
    VALUES ($1, $2) RETURNING *
  `;
  const queryParams = [id, nombre];
  await queryDatabase(queryText, queryParams);
  console.log('Usuario', nombre, 'Agregado con éxito');
  console.log(queryParams);
}

async function main() {
  const command = process.argv[2];

  const commands = {
    nuevo: async () => {
      const nuevoArgs = process.argv.slice(3);
      await agregarUsuarios(...nuevoArgs);
    },
  };

  const executeCommand = commands[command];

  if (executeCommand) {
    await executeCommand();
  } else {
    console.log('Comando no reconocido');
  }

  await pool.end();
}

//no me tinco el switch con un solo casocomo que nada que ver
  // switch (command) {
  //   case 'nuevo':
  //     const nuevoArgs = process.argv.slice(3);
  //     await agregarUsuarios(...nuevoArgs);
  //     break;

  //   default:
  //     console.log('Comando no reconocido');
  //     break;
  // }

//   await pool.end();
// }

// Ejecutar la aplicación
main().catch((error) => {
  // 6. Retornar por consola un mensaje de error en caso de haber problemas de conexión
  console.error('Error en la aplicación', error);
});

