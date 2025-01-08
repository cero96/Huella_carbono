function calcularHuella() {
    let huellaTotal = 0;
  
    // Refrigerador
    const horasRefrigerador = parseFloat(document.getElementById('refrigerador').value);
    if (!isNaN(horasRefrigerador) && horasRefrigerador > 0) {
      const huellaRefrigerador = horasRefrigerador * 2.5;
      document.getElementById('resultado-refrigerador').innerText = `Huella: ${huellaRefrigerador.toFixed(2)} kg CO2/día`;
      huellaTotal += huellaRefrigerador;
    } else {
      document.getElementById('resultado-refrigerador').innerText = '';
    }
  
    // Aire Acondicionado
    const horasAireAcondicionado = parseFloat(document.getElementById('aire-acondicionado').value);
    if (!isNaN(horasAireAcondicionado) && horasAireAcondicionado > 0) {
      const huellaAireAcondicionado = horasAireAcondicionado * 1.5;
      document.getElementById('resultado-aire-acondicionado').innerText = `Huella: ${huellaAireAcondicionado.toFixed(2)} kg CO2/día`;
      huellaTotal += huellaAireAcondicionado;
    } else {
      document.getElementById('resultado-aire-acondicionado').innerText = '';
    }
  
    // Lavadora
    const horasLavadora = parseFloat(document.getElementById('lavadora').value);
    if (!isNaN(horasLavadora) && horasLavadora > 0) {
      const huellaLavadora = horasLavadora * 0.8;
      document.getElementById('resultado-lavadora').innerText = `Huella: ${huellaLavadora.toFixed(2)} kg CO2/día`;
      huellaTotal += huellaLavadora;
    } else {
      document.getElementById('resultado-lavadora').innerText = '';
    }
  
    // Microondas
    const horasMicroondas = parseFloat(document.getElementById('microondas').value);
    if (!isNaN(horasMicroondas) && horasMicroondas > 0) {
      const huellaMicroondas = horasMicroondas * 1.0;
      document.getElementById('resultado-microondas').inner
  