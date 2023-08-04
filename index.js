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

const agregar = async (valores) => {
  const consulta = {
    text: 'INSERT INTO usuarios (id, nombre) VALUES ($1, $2) RETURNING *',
    values: valores,
  };
  const response = await pool.query(consulta);
  return response.rows;
};

// Ejecutar la función
const valores = [4, 'Juan'];
agregar(valores)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
