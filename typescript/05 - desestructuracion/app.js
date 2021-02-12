"use strict";
(function () {
    var hero = {
        nombre: 'Clark kent',
        apodo: 'Superman',
        poder: 'Super fuerza'
    };
    /*  console.log(hero.nombre);
     console.log(hero.apodo);
     console.log(hero.poder); */
    /* const { nombre, poder, apodo } = hero; */
    var apodo = hero.apodo;
    /*    console.log(nombre);
       console.log(poder);   */
    console.log(apodo);
    // const poderesHero = (hero: any ) => console.log(`Mi poder es: ${hero.poder}`);
    var poderesHero = function (_a) {
        var poder = _a.poder;
        return console.log("Mi poder es: " + poder);
    };
    poderesHero(hero);
    var heros = ['Superman', 'Spider-man', 'Ironman'];
    // const [ heroOne, heroTwo, heroTree ] = heros
    var heroTree = heros[2];
    /*   console.log(heros[0]);
      console.log(heros[1]);
      console.log(heros[2]); */
    //  console.log(heroOne);
    //  console.log(heroTwo);
    console.log(heroTree);
    var whoIam = function (_a) {
        var hero = _a[1];
        return console.log("Hola, Soy " + hero);
    };
    whoIam(heros);
})();
