( /* async */ function(){
   
    // ES6 modificar tsconfig para es5 hay que instalar polyfills ya vienen por defecto con angular.

    /* 
    * Ejemplo 1
    */
/*     console.log('Inicio');
    
    const prom1 = new Promise((resolve, reject) => {

      setTimeout(()=>{
        resolve('😀 todo ok !!!!')
        // reject('🔥 error!!!')
      },1000)

    })

    prom1
      .then((mensaje => console.log(mensaje)))
      .catch(error => console.warn(error))

    console.log('Fin') */
   /* 
    * Ejemplo 2
    */

/*     const cajero = (dinero: number): Promise<string> => {
      let saldo = 1000;
      return new Promise((resolve, reject)=> {
        if(dinero > saldo){
          reject('No tienes suficiente saldo');
        } else {
          saldo -= dinero;
          resolve(`Has retirado ${dinero}, te quedan ${saldo}`);
        }
      })
    }

    cajero(100)
      .then((mensaje: string) => console.log(mensaje))
      .catch(console.log) */

    /* 
    * Ejemplo 3
    */

   const cajeroDos = async (dinero: number): Promise<string> => {
    let saldo = 1000;
      if(dinero > saldo){
        return 'No tienes suficiente saldo';
      } else {
        saldo -= dinero;
        return`Has retirado ${dinero}, te quedan ${saldo}`;
      }

  }

/*   cajeroDos(1400)
    .then(console.log)
    .catch(console.log) */



    /* 
    * Ejemplo 4
    */

  const sacarDinero = async (dinero: number) => {

    const resultado = await cajeroDos(dinero);
    console.log(resultado);
    console.log('Fin promesa')
  }
  console.log('Inicio');

  sacarDinero(500);
  /* await sacarDinero(500); */
  

  console.log('Fin');

})();