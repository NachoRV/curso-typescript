"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero3 = void 0;
var Hero3 = /** @class */ (function () {
    function Hero3(nombre, equipo, puedePelear, peleasGanadas) {
        if (puedePelear === void 0) { puedePelear = true; }
        if (peleasGanadas === void 0) { peleasGanadas = 0; }
        this.nombre = nombre;
        this.equipo = equipo;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    Hero3.prototype.getPeleasGanadas = function () {
        return this.peleasGanadas;
    };
    return Hero3;
}());
exports.Hero3 = Hero3;
