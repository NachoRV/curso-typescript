"use strict";
(function () {
    class Hero {
        constructor(nombre, equipo, puedePelear, peleasGanadas) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.peleasGanadas = peleasGanadas;
            this.puedePelear = puedePelear;
        }
    }
    class Hero2 {
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
    const ironman = new Hero('Ironman', 'Avengers', true, 0);
    const thor = new Hero2('thor', 'Avengers');
    console.log(ironman);
    console.log(thor);
    ironman.peleasGanadas = 3;
    thor.peleasGanadas = 5;
    console.log(`peleas ganadas ${thor.getPeleasGanadas()}`);
    console.log(ironman);
})();
