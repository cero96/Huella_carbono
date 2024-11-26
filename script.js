document.getElementById('carbonForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el envío del formulario y el recargo de la página
  
    const urlInput = document.getElementById('urlInput').value; // Captura la URL ingresada
    const carbonOutput = document.getElementById('carbonOutput'); // Selecciona el área de resultados
  
    // Validar formato de URL
    const urlRegex = /^(https?:\/\/)?([\w.-]+)+\.[a-z]{2,}(\/\S*)?$/i;
    if (!urlRegex.test(urlInput)) {
      carbonOutput.textContent = 'Por favor, ingresa una URL válida.';
      carbonOutput.style.color = 'red';
      return;
    }
  
    // Simulación de cálculo de huella (reemplazar con llamada real a la API)
    carbonOutput.textContent = 'Calculando...';
    carbonOutput.style.color = 'black';
  
    setTimeout(() => {
      const simulatedResult = (Math.random() * 100).toFixed(2); // Genera un resultado simulado
      carbonOutput.textContent = `Tu huella de carbono estimada es de ${simulatedResult} kg CO₂e.`;
      carbonOutput.style.color = 'green';
    }, 2000);
  });
  