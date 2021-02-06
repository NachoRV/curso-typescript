"use strict";
(function () {
    function saludar(name) {
        console.table('Hola, ' + name); // Hola Logan
    }
    const wolverine = {
        name: 'Nacho'
    };
    saludar(wolverine.name);
})();
