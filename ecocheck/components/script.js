function calcularHuella() {
    // Obtener los valores de los campos de entrada
    const tamanioPagina = parseFloat(document.getElementById('tamanio-pagina').value);
    const traficoWeb = parseInt(document.getElementById('trafico-web').value);
    const factorEmision = parseFloat(document.getElementById('factor-emision').value);

    // Validar que los campos tengan valores correctos
    if (isNaN(tamanioPagina) || isNaN(traficoWeb) || isNaN(factorEmision) || tamanioPagina <= 0 || traficoWeb <= 0 || factorEmision <= 0) {
        document.getElementById('resultado-texto').textContent = 'Por favor, ingresa valores válidos en todos los campos.';
        return;
    }

    // Calcular la huella de carbono
    const huellaCarbonoGramos = tamanioPagina * traficoWeb * factorEmision;
    const huellaCarbonoKg = huellaCarbonoGramos / 1000; // Convertir de gramos a kilogramos

    // Mostrar el resultado
    document.getElementById('resultado-texto').textContent = `La huella de carbono mensual es de: ${huellaCarbonoKg.toFixed(2)} kg CO₂`;
}





