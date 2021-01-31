"use strict";
(function () {
    function saludar(name) {
        console.table('Hola, ' + name); // Hola Logan
    }
    var wolverine = {
        name: 'Nacho'
    };
    saludar(wolverine.name);
})();
