let lista=["prod1","prod2","prod3"]

const mostrarValor=(evento)=>{
    evento.preventDefault()//le indicamos que no actue por defecto -> al ser un formulario le estamos indicando que no envie la informacion
    console.dir(evento)
    let input=document.querySelector("#nombre");
    console.log(input.value)//valor ingresado por el usuario

    for(item of lista){
        if(item === input.value){
            alert("Esta en la lista!!")
        }
    }

    evento.target.reset()
    //formularios tienen un metodo llamado reset() que permite resetear el formulario
    
};

function cancelarRedireccion(event) {
    event.preventDefault()
    alert("no se redirige!")
}

// prompt() -> funcion nativa de JS que nos permitia desde el browser que el usuario ingrese info...

//objeto event -> preventDefault() : metodo que se encuentra dentro del objeto event que nos permite indicar le que no accione de manera por defecto

//eventos con addEventListener()

let botonMostrar=document.querySelector("#boton-mostrar");

botonMostrar.addEventListener("click",(event)=>{
    event.preventDefault();
    let password=document.querySelector("#password");
    console.dir(password)
    password.type="text";
    botonMostrar.textContent="ocultar"
  
});

//mas funciones nativas|metodos propios de JS ....



//setInterval() -> reproduce cada una cierta cantidad de segundos una funcion
//clearInterval() -> pausa esa reproduccion establecida en el setInterval()

// setInterval(funcionAejecutar,cadaCuantosMiliSegundos)
let funcionIntervalo;

function iniciar(){
    funcionIntervalo=setInterval(()=>{
            console.log("cada 3seg se emite este mensaje")
        },3000)
};
const pausar=()=>{
    clearInterval(funcionIntervalo)// pausar la accion del setInterval 
};

// //setTimeout() -> delay a la ejecucion de una funcion 
// //setTimeout(funcionAEjecutar,tiempoEnMilisegundos)

// //setTimeout(()=>{alert("Bienvenido!!")},3000)

// //Math -> objeto propio de JS que contiene funciones|metodos|estructuras matematicas complejas 

// // calculos simples ->  / * + -
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.random())
// //Math.cos()


//Hoisting



function promedio(numeroA,numeroB,numeroC) {
    let suma=numeroA+numeroB+numeroC;
    console.log(suma/3)
    return 
};

promedio(8,7,5);


//Destructing

const [al1,al2,al3]=["alumno1","alumno2","alumno4","alumno5"];


let {edad,apellido}={nombre:"Julia",apellido:"Perez",edad:33};
//genero 3 variables que contienen a c/u items del array

console.log(al1,al2,al3);
console.log(edad);

//spread operator -> tomar todo el contenido de una lista|objeto

let lista2=[2,3,11,5,6,7,8];
let lista3=[...lista2,...lista];

console.log(...lista3,44,22)

console.log(lista3);
console.log(lista2);


let auto={
    marca:"fiat",
    modelo:"duna",
    color:"rojo"
}

let propiedades={
    anio:2010,
    motor:1.3,
    puertas:3
}
console.log({...auto,...propiedades})