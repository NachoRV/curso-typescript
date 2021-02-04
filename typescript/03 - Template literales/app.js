"use strict";
(function () {
    var saludo = 'Hola';
    var mensaje = 'estamos en un curso de angular';
    var mensajeDos = 'desde 0';
    var msg = saludo + " " + mensaje + " " + mensajeDos;
    function getVersion() {
        return 11;
    }
    // template literals 
    var msgDos = saludo + " " + mensaje + " v-" + getVersion() + " " + mensajeDos;
    console.log(msg);
    console.log(msgDos);
})();
