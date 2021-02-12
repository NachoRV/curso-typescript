"use strict";
(function () {
    var personaUno = {
        nombre: 'Nacho',
        apellidos: 'Royo-Villanova',
    };
    var personaDos = {
        nombre: 'Patricia',
        apellidos: 'García',
        edad: 20
    };
    var saludar = function (persona) { return console.log("Hola " + persona.nombre); };
    saludar(personaUno);
    saludar(personaDos);
})();
