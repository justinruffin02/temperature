// Prompt the user to enter a temperature in Celsius
let temperature = prompt("Enter a temperature in Celsius:");


let fahrenheit = (temperature * 9/5) + 32;

console.log(`The temperature in Fahrenheit is: ${fahrenheit}`);


document.getElementById("result").textContent = `The temperature in Fahrenheit is: ${fahrenheit}`;