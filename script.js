
async function obtenerDatosURL() {
  const url = document.getElementById('url-input').value;

  if (!url) {
    alert("Por favor, ingresa una URL.");
    return;
  }

  const encodedURL = encodeURIComponent(url);  // Aseguramos la codificación de la URL

  try {
    const proxyUrl = 'https://api.allorigins.win/get?url=';  // Proxy para evitar problemas de CORS
    const apiUrl = `https://api.websitecarbon.com/site?url=${encodedURL}`; // API original que queremos consultar

    // Usamos el proxy para realizar la solicitud, añadiendo la URL codificada
    const response = await axios.get(proxyUrl + encodeURIComponent(apiUrl), {
      timeout: 20000 // Establecemos el tiempo de espera a 20 segundos
    });

    const data = JSON.parse(response.data.contents);  // Parseamos la respuesta obtenida del proxy
    
    // Verificar la respuesta de la API
    console.log('Respuesta de la API:', data);

    mostrarResultado(data);
  } catch (error) {
    if (error.response) {
      // Error relacionado con la respuesta de la API
      console.error('Error al obtener los datos de la API:', error.response.data);
    } else if (error.request) {
      // Error de solicitud, la respuesta no fue recibida
      console.error('No se recibió respuesta de la API:', error.request);
    } else {
      // Otro tipo de error
      console.error('Error en la configuración de la solicitud:', error.message);
    }

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
  if (huellaCarbono <= 50) {
    cantidadImagenes = 1; // Un rango bajo
  } else if (huellaCarbono > 50 && huellaCarbono <= 100) {
    cantidadImagenes = 5; // Un rango medio
  } else if (huellaCarbono > 100) {
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
