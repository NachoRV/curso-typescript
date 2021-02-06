"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
( /* async */function () {
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
    const cajeroDos = (dinero) => __awaiter(this, void 0, void 0, function* () {
        let saldo = 1000;
        if (dinero > saldo) {
            return 'No tienes suficiente saldo';
        }
        else {
            saldo -= dinero;
            return `Has retirado ${dinero}, te quedan ${saldo}`;
        }
    });
    /*   cajeroDos(1400)
        .then(console.log)
        .catch(console.log) */
    /*
    * Ejemplo 4
    */
    const sacarDinero = (dinero) => __awaiter(this, void 0, void 0, function* () {
        const resultado = yield cajeroDos(dinero);
        console.log(resultado);
        console.log('Fin promesa');
    });
    console.log('Inicio');
    sacarDinero(500);
    /* await sacarDinero(500); */
    console.log('Fin');
})();
