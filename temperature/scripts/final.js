// Function to convert and display a range of temperatures
function convertTemperatureRange(startValue, endValue, scale) {
    // Validate 
    if (scale !== "C" && scale !== "F") {
        console.log("Invalid scale. Please enter 'C' for Celsius or 'F' for Fahrenheit.");
        return;
    }

    // Loop
    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;

        // Convert based on the scale
        if (scale === "C") {
            // Convert Celsius to Fahrenheit
            convertedTemp = (temp * 9/5) + 32;
            console.log(`${temp}°C is ${convertedTemp.toFixed(2)}°F`);
        } else if (scale === "F") {
            // Convert Fahrenheit to Celsius
            convertedTemp = (temp - 32) * 5/9;
            console.log(`${temp}°F is ${convertedTemp.toFixed(2)}°C`);
        }
    }
}


let startValue = parseFloat(prompt("Enter the starting temperature:"));
let endValue = parseFloat(prompt("Enter the ending temperature:"));
let scale = prompt("Enter the scale ('C' for Celsius or 'F' for Fahrenheit):").toUpperCase();


convertTemperatureRange(startValue, endValue, scale);