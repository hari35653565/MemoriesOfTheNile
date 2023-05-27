// import 'resize-observer-polyfill/dist/ResizeObserver.global';

// import React from 'react';
// import { render } from '@testing-library/react';
// import { Experience } from './../Experience';
// import { Canvas } from '@react-three/fiber';
// import '@testing-library/jest-dom/extend-expect';

// //asegurarse de que el componente se haya renderizado correctamente y esté presente en el DOM.
// test('renders without crashing', () => {
//   const { container } = render(
//     <Canvas>
//       <Experience />
//     </Canvas>
//   );
//   expect(container).toBeInTheDocument();
// });


const { esCorreoElectronicoValido, esPar, esPalindromo, factorial, invertirCadena, obtenerPromedio, esTextoValido, esEdadValida } =
    require("../Probando");


test('esPar retorna true para número par', () => {
    expect(esPar(4)).toBe(true);
});

test('esPar retorna false para número impar', () => {
    expect(esPar(7)).toBe(false);
});


test('esPalindromo retorna true para palabra palíndroma', () => {
    expect(esPalindromo('reconocer')).toBe(true);
});

test('esPalindromo retorna false para palabra no palíndroma', () => {
    expect(esPalindromo('hola')).toBe(false);
});

test('factorial de 5 es igual a 120', () => {
    expect(factorial(5)).toBe(120);
});

test('factorial de 0 es igual a 1', () => {
    expect(factorial(0)).toBe(1);
});

test('invertirCadena invierte correctamente la cadena', () => {
    expect(invertirCadena('hola')).toBe('aloh');
});

test('invertirCadena con cadena vacía devuelve cadena vacía', () => {
    expect(invertirCadena('')).toBe('');
});


test('obtenerPromedio calcula correctamente el promedio', () => {
    expect(obtenerPromedio([1, 2, 3, 4, 5])).toBe(3);
});

test('obtenerPromedio con arreglo vacío devuelve NaN', () => {
    expect(obtenerPromedio([])).toBeNaN();
});

test('esTextoValido retorna true para texto válido', () => {
    expect(esTextoValido('Hola Mundo')).toBe(true);
});

test('esTextoValido retorna false para texto inválido', () => {
    expect(esTextoValido('Hola 123')).toBe(false);
});

test('esEdadValida retorna true para edad válida', () => {
    expect(esEdadValida('25')).toBe(true);
});

test('esEdadValida retorna false para edad inválida', () => {
    expect(esEdadValida('-10')).toBe(false);
});

test('esCorreoElectronicoValido retorna true para correo válido', () => {
    expect(esCorreoElectronicoValido('ejemplo@dominio.com')).toBe(true);
});

test('esCorreoElectronicoValido retorna false para correo inválido', () => {
    expect(esCorreoElectronicoValido('correo_invalido.com')).toBe(false);
});