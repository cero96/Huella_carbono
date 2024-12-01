// Función para obtener los datos de la URL
function obtenerDatosURL() {
    const urlInput = document.getElementById('url-input').value;
    if (urlInput) {
      alert(`Datos obtenidos de la URL: ${urlInput}`);
      // Aquí podrías agregar lógica para analizar la URL
    } else {
      alert('Por favor ingresa una URL válida.');
    }
  }
  
  // Función para calcular la huella de carbono
  function calcularHuella() {
    const tamanioPagina = parseFloat(document.getElementById('tamanio-pagina').value);
    const traficoWeb = parseInt(document.getElementById('trafico-web').value);
    const factorEmision = parseFloat(document.getElementById('hostResponsabilidad').value);
  
    if (isNaN(tamanioPagina) || isNaN(traficoWeb) || tamanioPagina <= 0 || traficoWeb <= 0 || !factorEmision) {
      document.getElementById('resultado-texto').textContent = 'Por favor, ingresa valores válidos en todos los campos.';
      return;
    }
  
    const huellaCarbono = tamanioPagina * traficoWeb * factorEmision;
    document.getElementById('resultado-texto').textContent = `La huella de carbono estimada es: ${huellaCarbono.toFixed(2)} g de CO₂ por mes.`;
  }
  

  

  