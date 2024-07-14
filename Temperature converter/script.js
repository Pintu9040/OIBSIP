const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const convertBtn = document.getElementById('convert-btn');

function convertToFahrenheit(celsius) {return (celsius * (9/5)) +  32; }
function convertToCelsius(fahrenheit) {return (fahrenheit - 32) *  (5/9);}

function convertTemperature() {
    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = parseFloat(fahrenheitInput.value)

    if (celsiusValue) {
        fahrenheitInput.value = convertToFahrenheit(celsiusValue).toFixed(2);}
     else if (fahrenheitValue) {
        celsiusInput.value = convertTocelsius(fahrenheitValue).toFixed(2);}
     }
    convertBtn.addEventListener('click',convertTemperature);

