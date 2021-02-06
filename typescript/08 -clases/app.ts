(function(){

 class Hero {
   nombre: string;
   equipo: string;
   puedePelear: boolean;
   peleasGanadas: number;

   constructor(nombre: string, equipo: string, puedePelear: boolean, peleasGanadas: number ) {
     this.nombre = nombre;
     this.equipo = equipo;
     this.peleasGanadas = peleasGanadas;
     this.puedePelear = puedePelear;

   }
 }


 class Hero2 {

  constructor(
    public nombre: string,
    public equipo: string,
    public puedePelear: boolean = true,
    public peleasGanadas: number = 0) {}

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