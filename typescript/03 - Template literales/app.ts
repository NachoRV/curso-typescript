(function(){

const saludo = 'Hola';
const mensaje = 'estamos en un curso de angular'
const mensajeDos= 'desde 0';


const msg = saludo + " " + mensaje + " " + mensajeDos;

// template literals 

const msgDos = `${saludo} ${mensaje} ${mensajeDos}`

console.log(msg)
console.log(msgDos)

})();