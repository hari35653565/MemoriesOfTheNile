
function esCorreoElectronicoValido(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  }

function esPar(num) {
    return num % 2 === 0;
}


function esPalindromo(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}


function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

function invertirCadena(str) {
    return str.split('').reverse().join('');
}

function obtenerPromedio(nums) {
    const sum = nums.reduce((acc, curr) => acc + curr, 0);
    return sum / nums.length;
}

function esTextoValido(texto) {
    return /^[A-Za-z\s]+$/.test(texto);
}

function esEdadValida(edad) {
    return /^\d+$/.test(edad) && edad >= 0 && edad <= 120;
  }

module.exports = { obtenerDatosHTTP, esCorreoElectronicoValido, esPar, esPalindromo, factorial, invertirCadena, obtenerPromedio, esTextoValido, esEdadValida };

