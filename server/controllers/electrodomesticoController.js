const { Pool } = require('pg');
require('dotenv').config();

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// Controlador para obtener los electrodomésticos
const obtenerElectrodomesticos = async (req, res) => {
  try {
    // Intentamos realizar la consulta
    const result = await pool.query('SELECT * FROM electrodomesticos');
    
    // Si la consulta es exitosa, devolvemos los resultados
    if (result.rows.length > 0) {
      return res.status(200).json(result.rows);  // Devuelve los resultados
    } else {
      return res.status(404).json({ message: 'No se encontraron electrodomésticos' });
    }

  } catch (error) {
    // Si ocurre un error, lo mostramos en los logs y devolvemos un error al cliente
    console.error('Error al obtener los electrodomésticos:', error);
    res.status(500).json({ message: 'Error al obtener los electrodomésticos', error: error.message });
  }
};

module.exports = {
  obtenerElectrodomesticos
};
