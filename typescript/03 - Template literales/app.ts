(function(){

const saludo = 'Hola';
const mensaje = 'estamos en un curso de angular'
const mensajeDos= 'desde 0';


const msg = saludo + " " + mensaje + " " + mensajeDos;

function getVersion() {
  return 11;
}

// template literals 

const msgDos = `${saludo} ${mensaje} v-${getVersion()} ${mensajeDos}`

console.log(msg)
console.log(msgDos)

})();