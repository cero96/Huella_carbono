//get IP Address

async function getIpAddress() {
    const url = document.getElementById("getName").value.trim();
    if (!url) {
        document.getElementById("resultado-texto2").innerText = 
            "Por favor, ingresa una URL válida.";
        return;
    }

    const urlApi = `https://apip.cc/api-json/${url}`;
    try {
        const response = await fetch(urlApi);
        if (!response.ok) {
            throw new Error(`Error en API de IP: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data.query;
    } catch (error) {
        document.getElementById("resultado-texto2").innerText = 
            `Error al consultar la API de IP: ${error.message}`;
    }
}



//Get CO2
async function getCo2ByIp() {
    try {
        const ip = await getIpAddress();
        if (!ip) {
            document.getElementById("resultado-texto2").innerText = 
                "No se pudo obtener la dirección IP.";
            return;
        }

        const urlApi = `https://api.thegreenwebfoundation.org/api/v3/ip-to-co2intensity/${ip}`;
        const response = await fetch(urlApi);

        if (!response.ok) {
            throw new Error(`Error en API de CO2: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        document.getElementById("resultado-texto2").innerHTML = `
            <p><strong>Intensidad de CO2:</strong> ${data.generation_from_fossil || "No disponible"} gCO₂/kWh</p>
        `;
    } catch (error) {
        document.getElementById("resultado-texto2").innerText = 
            `Error al consultar el API de CO2: ${error.message}`;
    }
}


