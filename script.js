document.getElementById('carbonForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const urlInput = document.getElementById('urlInput').value;
    const carbonOutput = document.getElementById('carbonOutput');
  
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
      const simulatedResult = Math.random().toFixed(2) * 100;
      carbonOutput.textContent = `Tu huella de carbono estimada es de ${simulatedResult} kg CO₂e.`;
      carbonOutput.style.color = 'green';
    }, 2000);
  });
  