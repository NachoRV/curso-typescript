"use strict";
(function () {
    const hero = {
        nombre: 'Clark kent',
        apodo: 'Superman',
        poder: 'Super fuerza'
    };
    /*  console.log(hero.nombre);
     console.log(hero.apodo);
     console.log(hero.poder); */
    /* const { nombre, poder, apodo } = hero; */
    const { apodo } = hero;
    /*    console.log(nombre);
       console.log(poder);   */
    console.log(apodo);
    // const poderesHero = (hero: any ) => console.log(`Mi poder es: ${hero.poder}`);
    const poderesHero = ({ poder }) => console.log(`Mi poder es: ${poder}`);
    poderesHero(hero);
    const heros = ['Superman', 'Spider-man', 'Ironman'];
    // const [ heroOne, heroTwo, heroTree ] = heros
    const [, , heroTree] = heros;
    /*   console.log(heros[0]);
      console.log(heros[1]);
      console.log(heros[2]); */
    //  console.log(heroOne);
    //  console.log(heroTwo);
    console.log(heroTree);
    const whoIam = ([, hero]) => console.log(`Hola, Soy ${hero}`);
    whoIam(heros);
})();
