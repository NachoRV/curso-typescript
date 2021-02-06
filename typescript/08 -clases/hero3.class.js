"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero3 = void 0;
class Hero3 {
    constructor(nombre, equipo, puedePelear = true, peleasGanadas = 0) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.puedePelear = puedePelear;
        this.peleasGanadas = peleasGanadas;
    }
    getPeleasGanadas() {
        return this.peleasGanadas;
    }
}
exports.Hero3 = Hero3;
