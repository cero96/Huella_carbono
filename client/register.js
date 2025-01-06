const registerForm = document.getElementById('registerForm');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(registerForm);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      window.location.href = '/login';  // Redirigir a la página de login
    } else {
      errorMessage.textContent = result.error || 'Error desconocido';
    }
  } catch (error) {
    errorMessage.textContent = 'Hubo un error al realizar la petición';
  }
});
