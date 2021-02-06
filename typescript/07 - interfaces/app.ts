(function(){

  interface Persona {
    nombre: String,
    apellidos: string,
    readonly edad?: number | string,
  }
   
    const personaUno: Persona = {
      nombre: 'Nacho',
      apellidos: 'Royo-Villanova',
    }
      const personaDos: Persona = {
      nombre: 'Patricia',
      apellidos: 'García',
      edad: 20
    }

    const saludar = (persona: Persona): void => console.log(`Hola ${persona.nombre}`);

    saludar(personaUno)
    saludar(personaDos)


})();