const { Pool } = require('pg');

// Configuración de la conexión a la base de datos PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Función para obtener todos los electrodomésticos
const getElectrodomesticos = async () => {
  try {
    const result = await pool.query('SELECT * FROM electrodomesticos');
    return result.rows; // Devuelve los electrodomésticos
  } catch (err) {
    console.error('Error obteniendo los electrodomésticos:', err);
    throw err;
  }
};

module.exports = { getElectrodomesticos };
