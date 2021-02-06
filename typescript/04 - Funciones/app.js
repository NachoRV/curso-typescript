"use strict";
(function () {
    function saludo(name, ciudad, msg = 'Que tengas un buen día') {
        if (ciudad) {
            console.log(`Hola ${name} te saludo desde ${ciudad}, ${msg}`);
            return;
        }
        console.log(`Hola ${name}, ${msg}`);
    }
    /*  saludo('Nacho', '' ,'que tengas un buen curso'); */
    // arrow function -> funciones de flecha 
    const saludarUno = function () {
        return 'hola';
    };
    const saludoDos = () => 'Hola desde arrow function';
    const saludoTres = (name) => `Hola ${name} desde arrow function`;
    const sumar = (a, b) => a + b;
    // console.log(saludarUno());
    // console.log(saludoDos());
    // console.log(saludoTres('Pepe'));
    // console.log(sumar(5,6));
    const hero = {
        name: 'Superman',
        saludo() {
            setTimeout(() => {
                console.log(`${this.name} te saluda`);
            }, 1000);
        }
    };
    hero.saludo();
})();
