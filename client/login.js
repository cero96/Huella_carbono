document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario

    // Obtener los datos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar si los campos no están vacíos
    if (!email || !password) {
        document.getElementById('error-message').textContent = 'Por favor, complete todos los campos';
        return;
    }

    // Configurar el objeto de datos para enviar al backend
    const data = {
        email: email,
        password: password,
    };

    // Hacer la solicitud POST al servidor
    try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        // Si el login es exitoso
        if (response.ok) {
            document.getElementById('error-message').textContent = ''; // Limpiar mensajes de error
            localStorage.setItem('token', result.token); // Guardar el token en localStorage
            alert('Login exitoso!'); // Notificar al usuario

            // Redirigir al usuario a la página principal
            window.location.href = 'index.html'; // Redirige a la página de inicio
        } else {
            throw new Error(result.error || 'Error desconocido');
        }
    } catch (error) {
        document.getElementById('error-message').textContent = error.message;
    }
});
