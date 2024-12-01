async function obtenerDatosURL() {
  const url = document.getElementById('url-input').value;

  if (!url) {
    alert("Por favor, ingresa una URL.");
    return;
  }

  const encodedURL = encodeURIComponent(url);

  try {
    const proxyUrl = 'https://api.allorigins.win/get?url=';
    const apiUrl = `https://api.websitecarbon.com/site?url=${encodedURL}`;

    // Utiliza el proxy para evitar el error CORS
    const response = await axios.get(proxyUrl + encodeURIComponent(apiUrl));
    
    const data = JSON.parse(response.data.contents);  // Se debe parsear la respuesta de All Origins.
    
    // Verificar la respuesta de la API
    console.log('Respuesta de la API:', data);

    mostrarResultado(data);
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.response ? error.response.data : error.message);
    document.getElementById('resultado-texto').innerHTML = 'Hubo un error al obtener los datos. Intenta nuevamente.';
  }
}

function mostrarResultado(data) {
  const resultado = document.getElementById('result-text');  // Asegúrate de que el ID es el correcto.

  if (data) {
    // Extraer los valores necesarios del objeto `data`
    const url = data.url || 'No disponible';
    const rating = data.rating || 'No disponible';
    const carbonEmissionGrid = data.statistics.co2.grid.grams.toFixed(2) || 'No disponible';
    const carbonEmissionRenewable = data.statistics.co2.renewable.grams.toFixed(2) || 'No disponible';
    const pageSize = (data.bytes / (1024 * 1024)).toFixed(2) || 'No disponible'; // Convertir bytes a MB

    // Mostrar los resultados en el contenedor `result-text`
    resultado.innerHTML = `
      <strong>URL Analizada:</strong> <a href="${url}" target="_blank">${url}</a><br>
      <strong>Calificación (Rating):</strong> ${rating}<br>
      <strong>Huella de Carbono (Fuente de la Red):</strong> ${carbonEmissionGrid} g CO₂<br>
      <strong>Huella de Carbono (Energía Renovable):</strong> ${carbonEmissionRenewable} g CO₂<br>
      <strong>Tamaño de la Página:</strong> ${pageSize} MB
    `;

    // Llamar a la función para mostrar las imágenes basadas en el rango de emisiones
    mostrarImagenes(carbonEmissionGrid);
  } else {
    resultado.innerHTML = 'No se pudieron obtener los datos de la página.';
  }
}

function mostrarImagenes(emitido) {
  const imagenesContenedor = document.getElementById('imagenes-container');
  imagenesContenedor.innerHTML = ''; // Limpiar cualquier imagen anterior

  // Convertir la huella de carbono a un número
  const huellaCarbono = parseFloat(emitido);

  let cantidadImagenes = 0;
  
  // Determinar el número de imágenes a mostrar en función del valor de las emisiones
  if (huellaCarbono <= 100) {
    cantidadImagenes = 1; // Un rango bajo
  } else if (huellaCarbono > 100 && huellaCarbono <= 200) {
    cantidadImagenes = 5; // Un rango medio
  } else if (huellaCarbono > 200) {
    cantidadImagenes = 10; // Un rango alto
  }

  // Crear y agregar las imágenes al contenedor
  for (let i = 0; i < cantidadImagenes; i++) {
    const img = document.createElement('img');
    img.src = '/images/1.png'; // Cambia esto por la URL real de las imágenes
    img.alt = 'Árbol'; // Cambia la descripción según corresponda
    img.classList.add('tree-icon');
    imagenesContenedor.appendChild(img);
  }
}

// Ejemplo de código HTML para agregar el contenedor de imágenes en el documento
