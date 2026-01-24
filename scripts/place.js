const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = today.getFullYear();

document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;


function calculateWindChill(airTemp, windSpeed) {
    const chill = 13.127 + (0.6215 * airTemp) - (11.362 * (windSpeed ** 0.16)) + (0.396 * airTemp * (windSpeed ** 0.16));
    return chill;
}

const airTemp = Number(document.getElementById("temp").textContent);
const windSpeed = Number(document.getElementById("wind").textContent);
const windChill = document.querySelector("#wChill");

let windChillValue = "N/A"

if (airTemp <= 10 && windSpeed > 4.8) {
    windChillValue = calculateWindChill(airTemp, windSpeed).toFixed(1);
}

windChill.textContent = windChillValue;