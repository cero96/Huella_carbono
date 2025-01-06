const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      // Almacenar el token JWT en el localStorage
      localStorage.setItem('token', result.token);
      window.location.href = '/home';  // Redirigir al contenido protegido
    } else {
      errorMessage.textContent = result.error || 'Error desconocido';
    }
  } catch (error) {
    errorMessage.textContent = 'Hubo un error al realizar la petición';
  }
});
