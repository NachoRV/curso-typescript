"use strict";
(function () {
    var Hero = /** @class */ (function () {
        function Hero(nombre, equipo, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.peleasGanadas = peleasGanadas;
            this.puedePelear = puedePelear;
        }
        return Hero;
    }());
    var Hero2 = /** @class */ (function () {
        function Hero2(nombre, equipo, puedePelear, peleasGanadas) {
            if (puedePelear === void 0) { puedePelear = true; }
            if (peleasGanadas === void 0) { peleasGanadas = 0; }
            this.nombre = nombre;
            this.equipo = equipo;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
        Hero2.prototype.getPeleasGanadas = function () {
            return this.peleasGanadas;
        };
        return Hero2;
    }());
    var ironman = new Hero('Ironman', 'Avengers', true, 0);
    var thor = new Hero2('thor', 'Avengers');
    console.log(ironman);
    console.log(thor);
    ironman.peleasGanadas = 3;
    thor.peleasGanadas = 5;
    console.log("peleas ganadas " + thor.getPeleasGanadas());
    console.log(ironman);
})();
