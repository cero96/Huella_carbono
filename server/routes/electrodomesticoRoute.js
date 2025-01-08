const express = require('express');
const { obtenerElectrodomesticos } = require('../controllers/electrodomesticoController');

const router = express.Router();

// Ruta para obtener todos los electrodomésticos
router.get('/', obtenerElectrodomesticos);

module.exports = router;
