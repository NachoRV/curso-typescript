(function(){

const mensaje: string = 'hola'; // const mensaje = 'hola'
const numero: number = 123;
let booleano: boolean = true;
let b = true;
let hoy: Date = new Date();

let miArray: Array<string> = [];

let numberOrString: string | number;
    numberOrString = 'hola';
    numberOrString = 1;
    numberOrString = true;

let persona = {
    nombre: 'Pepe',
    edad: 30
  }
  persona = {}
  persona = {
    nombre: 'Pepe',
    edad: '30'
  }
  persona = {
    nombre: 'Pepe',
    apellidos: 'Garcia',
    edad: 30
  }
// template literals 
let ciudad = 'Madrid'
let name = 'Nacho'
let msg = 'usando template literals'
console.log(`Hola ${name} te saludo desde ${ciudad}, ${msg}`);
})();