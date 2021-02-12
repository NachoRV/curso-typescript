"use strict";
(function () {
    function saludo(name, ciudad, msg) {
        if (msg === void 0) { msg = 'Que tengas un buen día'; }
        if (ciudad) {
            console.log("Hola " + name + " te saludo desde " + ciudad + ", " + msg);
            return;
        }
        console.log("Hola " + name + ", " + msg);
    }
    /*  saludo('Nacho', '' ,'que tengas un buen curso'); */
    // arrow function -> funciones de flecha 
    var saludarUno = function () {
        return 'hola';
    };
    var saludoDos = function () { return 'Hola desde arrow function'; };
    var saludoTres = function (name) { return "Hola " + name + " desde arrow function"; };
    var sumar = function (a, b) { return a + b; };
    // console.log(saludarUno());
    // console.log(saludoDos());
    // console.log(saludoTres('Pepe'));
    // console.log(sumar(5,6));
    var hero = {
        name: 'Superman',
        saludo: function () {
            var _this = this;
            setTimeout(function () {
                console.log(_this.name + " te saluda");
            }, 1000);
        }
    };
    hero.saludo();
})();
