const User = require('../models/loginModel');
const jwt = require('jsonwebtoken');  // Para generar el token

// Registrar un nuevo usuario
const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El correo electrónico ya está registrado' });
    }

    // Crear un nuevo usuario
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: 'Error al registrar el usuario' });
  }
};

// Iniciar sesión (login)
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ error: 'Contraseña incorrecta' });

    // Crear el token de JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token,  // Enviar el token al cliente
    });
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' });
  }
};

module.exports = { register, login };
