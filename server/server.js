const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');  // Cargar las variables de entorno desde el archivo .env
const { Pool } = require('pg');  // Paquete para conectarse a PostgreSQL
const loginRoute = require('./routes/loginRoute');
const electrodomesticoRoutes = require('./routes/electrodomesticoRoute');  // Rutas para electrodomésticos

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // Para parsear JSON en las peticiones
app.use(cors());  // Para permitir solicitudes desde diferentes dominios

// Ruta de autenticación
app.use('/api/auth', loginRoute);

// Ruta para obtener electrodomésticos
app.use('/api/electrodomesticos', electrodomesticoRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Base de datos MongoDB conectada'))
  .catch((error) => console.error('Error de conexión a MongoDB:', error));

console.log('Conectando con PostgreSQL...');
console.log('User:', process.env.PG_USER);
console.log('Host:', process.env.PG_HOST);
console.log('Database:', process.env.PG_DATABASE);
console.log('Password:', process.env.PG_PASSWORD);  // Imprimir para verificar que la contraseña esté correcta


// Conexión a PostgreSQL
const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

pool.connect()
  .then(() => console.log('Conectado a PostgreSQL'))
  .catch(err => console.error('Error al conectar a PostgreSQL', err));

// Middleware para verificar el JWT en rutas protegidas
const protectRoute = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];  // Obtener el token del encabezado

  if (!token) {
    return res.status(401).json({ error: 'Acceso denegado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Almacenar el usuario decodificado en la petición
    next();  // Continuar con la siguiente función de middleware
  } catch (error) {
    res.status(401).json({ error: 'Token inválido o expirado' });
  }
};

// Rutas protegidas (Ejemplo)
app.use('/contenido', protectRoute, (req, res) => {
  res.send('Contenido protegido para usuarios autenticados');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
