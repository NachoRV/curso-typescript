
 export class Hero3 {

  constructor(
    public nombre: string,
    public equipo: string,
    public puedePelear: boolean = true,
    public peleasGanadas: number = 0) {}

    getPeleasGanadas() {
      return this.peleasGanadas;
    }

}

