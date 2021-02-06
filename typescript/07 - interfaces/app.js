"use strict";
(function () {
    const personaUno = {
        nombre: 'Nacho',
        apellidos: 'Royo-Villanova',
    };
    const personaDos = {
        nombre: 'Patricia',
        apellidos: 'García',
        edad: 20
    };
    const saludar = (persona) => console.log(`Hola ${persona.nombre}`);
    saludar(personaUno);
    saludar(personaDos);
})();
