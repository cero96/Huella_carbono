// Función para cargar los electrodomésticos desde el backend
async function loadElectrodomesticos() {
    try {
        const response = await fetch('http://localhost:5000/api/electrodomesticos');
        const data = await response.json();

        if (!response.ok) {
            throw new Error(`Error: ${data.message || 'No se pudo cargar los electrodomésticos'}`);
        }

        const tableBody = document.getElementById('electrodomesticosTable');
        tableBody.innerHTML = '';

        data.forEach(electrodomestico => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${electrodomestico.nombre}</td>
                <td>${electrodomestico.tipo}</td>
                <td>${electrodomestico.categoria}</td>
                <td>${electrodomestico.consumo_estimado}</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al cargar los electrodomésticos:', error);
    }
}

// Cargar los electrodomésticos al cargar la página
window.onload = loadElectrodomesticos;
