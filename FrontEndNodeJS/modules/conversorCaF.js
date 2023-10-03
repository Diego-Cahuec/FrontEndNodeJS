// Función para convertir grados Celsius a Fahrenheit
function centigradosToFahrenheit(gradoscentigrados) {
    const gradosFahrenheit = (gradoscentigrados * 9/5) + 32;
    return gradosFahrenheit;
  }
  
  // Exporta la función 
  module.exports = centigradosToFahrenheit;