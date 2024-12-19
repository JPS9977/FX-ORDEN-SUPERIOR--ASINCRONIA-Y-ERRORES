//ejemplo de callback

function mayus(palabra, funcionCallback) {
    let palabraRetornada = funcionCallback(palabra)
    console.log(palabraRetornada)
}

function manipularPalabra(palabra){
    return palabra.toUpperCase()
}

//mayus('hola', manipularPalabra)

const numeros = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

console.log(numeros)

//for each

//const sumarDos = num => console.log(num * 2)

const sumarDos = num => + 2

const arrayForEach = numeros.forEach(sumarDos)

const arrayMap = numeros.map(sumarDos)

numeros.forEach(sumarDos)

console.log(numeros);
console.log(arrayForEach);
console.log(arrayMap);

//filter

const pares = numeros.filter(num => num % 2 === 0)
console.log(pares);

const suma = numeros.reduce((acumulador, valorActual) => acumulador+valorActual, 0)

console.log(suma)

const numeritos = [1, 2, 3, 4, 5, 6]

const suma2 = numeritos.reduce((acumulador, valorActual) => acumulador + valorActual, 1)
console.log(suma2);

let acumuladora = 0

numeritos.forEach(num =>{
    acumuladora = num + acumuladora
})

console.log(acumuladora);


const buscar = numeros.find(num => num===25)
console.log(buscar);


const persona ={
    nombre:'JUAN',
    apellido: 'SOLIS',
    edad: 27
}
const clavesPersona = Object.keys(persona)
console.log(clavesPersona);

const valoresPersona = Object.values(persona)
console.log(valoresPersona);


const persona2 ={
    nombre: 'Carlos',
    nacionalidad: 'Argentina'
}

const newObj = Object.assign(persona, persona2)
console.log(newObj);