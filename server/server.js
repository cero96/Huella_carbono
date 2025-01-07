const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');  
require('dotenv').config();  // Cargar las variables de entorno desde el archivo .env

const loginRoute = require('./routes/loginRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());  // Para parsear JSON en las peticiones
app.use(cors());  // Para permitir solicitudes desde diferentes dominios

// Ruta de autenticación
app.use('/api/auth', loginRoute);

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Base de datos conectada'))
  .catch((error) => console.error('Error de conexión:', error));

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
