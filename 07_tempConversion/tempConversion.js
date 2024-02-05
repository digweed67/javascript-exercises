const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) / 1.8;
  let roundedNumberC = Math.round(celsius*10)/10;
  return roundedNumberC;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (temperature*1.8) +32;
  let roundedNumberF = Math.round(fahrenheit*10)/10; 
  return roundedNumberF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
