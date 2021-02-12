"use strict";
(function () {
    var mensaje = 'hola'; // const mensaje = 'hola'
    var numero = 123;
    var booleano = true;
    var b = true;
    var hoy = new Date();
    var miArray = [];
    var numberOrString;
    numberOrString = 'hola';
    numberOrString = 1;
    numberOrString = true;
    var persona = {
        nombre: 'Pepe',
        edad: 30
    };
    persona = {};
    persona = {
        nombre: 'Pepe',
        edad: '30'
    };
    persona = {
        nombre: 'Pepe',
        apellidos: 'Garcia',
        edad: 30
    };
    // template literals 
    var ciudad = 'Madrid';
    var name = 'Nacho';
    var msg = 'usando template literals';
    console.log("Hola " + name + " te saludo desde " + ciudad + ", " + msg);
})();
