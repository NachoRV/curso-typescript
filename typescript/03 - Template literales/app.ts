(function(){

function saludo(name: string, ciudad?: string, msg: string = 'Que tengas un buen día' ) {

  if (ciudad){
    console.log(`Hola ${name} te saludo desde ${ciudad}, ${msg}`);
    return;
  }

  console.log(`Hola ${name}, ${msg}`);
}

 /*  saludo('Nacho', '' ,'que tengas un buen curso'); */


  // arrow function -> funciones de flecha 

  const saludarUno = function () {
    return 'hola';
  }
  const saludoDos = () => 'Hola desde arrow function';

  const saludoTres = (name: string) => `Hola ${name} desde arrow function`;

  const sumar = (a: number, b: number) => a + b;

  // console.log(saludarUno());
  // console.log(saludoDos());
  // console.log(saludoTres('Pepe'));
  // console.log(sumar(5,6));

  const hero = {
    name: 'Superman',
    saludo() {
      setTimeout(() => {
        console.log(`${this.name} te saluda`);
      }, 1000)
    }
  }
  hero.saludo()
  
})();