
// Configuración inicial del gráfico
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Emisiones de CO2',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color inicial
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        animation: {
            duration: 1500,  // Duración de la animación
            easing: 'easeInOutQuad',  // Tipo de animación
            onComplete: function() {
                console.log('Animación completada');
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Cambiar datos y colores con animación al hacer clic en el botón
document.getElementById('updateDataBtn').addEventListener('click', function() {
    var newData = [25, 15, 8, 12, 6, 9];
    var newBackgroundColor = [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ];
    var newBorderColor = [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ];

    // Actualizar los datos del gráfico y la animación
    myChart.data.datasets[0].data = newData;
    myChart.data.datasets[0].backgroundColor = newBackgroundColor;
    myChart.data.datasets[0].borderColor = newBorderColor;

    // Animar la actualización de los datos
    myChart.update({
        duration: 1500,
        easing: 'easeOutBounce'
    });
});


// Interactividad con el título (aparecer y desaparecer)
const title = document.getElementById('mainTitle');

document.body.addEventListener('mousemove', (e) => {
    const titleRect = title.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    // Calcular la distancia entre el mouse y el título
    const distX = Math.abs(mouseX - (titleRect.left + titleRect.width / 2));
    const distY = Math.abs(mouseY - (titleRect.top + titleRect.height / 2));
    const distance = Math.sqrt(distX * distX + distY * distY);

    // Si la distancia es menor a un cierto umbral, hacemos que el título aparezca
    if (distance < 150) {
        title.style.opacity = 1;
        title.style.transform = 'scale(1.2)';
    } else {
        title.style.opacity = 0.3;
        title.style.transform = 'scale(1)';
    }
});