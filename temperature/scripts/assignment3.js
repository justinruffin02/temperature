
function convertTemperature(temperature, scale) {
    if (scale === "C") {

        return (temperature * 9 / 5) + 32;
    } else if (scale === "F") {

        return (temperature - 32) * 5 / 9;
    } else {

        return "Invalid scale. Please use 'C' or 'F'.";
    }
}


function convertAndDisplay() {

    const temperature = parseFloat(document.getElementById("temperature").value);
    const scale = document.getElementById("scale").value;


    if (isNaN(temperature)) {
        document.getElementById("result").innerText = "Please enter a valid temperature.";
        return;
    }


    const convertedTemperature = convertTemperature(temperature, scale);

    if (scale === "C") {
        document.getElementById("result").innerText = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else if (scale === "F") {
        document.getElementById("result").innerText = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
    }
}