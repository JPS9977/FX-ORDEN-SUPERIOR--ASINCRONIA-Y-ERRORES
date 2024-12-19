const titulo = document.createElement('h1')
const container = document.querySelector('.container')

titulo.textContent = 'Async'
titulo.style.textAlign = 'center'
document.body.before(titulo)

//ejemplo para usar try catch

const valor = 9
try {
    console.log(5/valo);
} catch (error) {
    console.error(error.message);
}

container.innerText = 'Cargando...'

setTimeout(()=>{
    container.innerHTML = '<h2>Contenido Cargado</h2>'
},3000) 

function randomOperation(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const numRandom = Math.floor(Math.random() *10)
            console.log(numRandom);

            if (numRandom > 5){
                reject(new Error(`El numero es ${numRandom} es mayor a 5`))
            }else{
                resolve(`El numero es: ${numRandom}`)
            }
        },3000)
    })
}

// console.log(Math.ceil(0.5));
// console.log(Math.floor(0.5));


//then catch

randomOperation()
    .then(result => console.log(result))
    .catch(error=>console.log(error.message))


//async / await

async function ejecutarFnRandom() {
    try {
        const result = await randomOperation()
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
    
}
ejecutarFnRandom()
