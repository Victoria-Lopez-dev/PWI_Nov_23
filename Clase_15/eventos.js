//Eventos
//interacciones con el usuario que comienzan y finalizan, como cuando el usuario hace click o tipea.

//partes de un evento:

//- el elemento en donde se va a estar escuchando este evento (nodo)
//- evento 
//- accion/es a realizar ante ese evento (respuesta al evento)


//tipos de eventos : click - change - blur - mouseover
//ver mas : https://developer.mozilla.org/es/docs/Web/Events


//2 maneras:

//1) metodo addEventListener() -> lo tienen todos los nodos del HTML y lo hacemos completamente desde el archivo JS

/* sintaxis:
    nodo.addEventListener("evento",()=>{accion/es a realizar ante ese evento})

    */

let botones=document.getElementsByTagName("button");//array
let lista=[]

botones[0].addEventListener("click",(event)=>{

    console.dir(event)//objeto del evento

    event.target.style.backgroundColor="yellow"//llamar al nodo en donde ocurrio el evento(event.target)

    let titulo=document.querySelector("h2");
    titulo.textContent="Se Clickeo el boton!!!";

    lista.push("sumando items...")
    console.log("Se Clickeo el boton!!!")
});

botones[0].addEventListener("mouseover",()=>{
    botones[0].style.backgroundColor="pink";

});

let cambioColor=()=>{
    botones[0].style.backgroundColor="green";
}

botones[1].addEventListener("mouseover",cambioColor)

//si quiero que una misma accion la ejecute en una lista de nodos

// for(boton of botones){
//     boton.addEventListener("mouseover",()=>{
//         boton.style.backgroundColor="pink";
    
//     });
// }

//2) atributos en el documento HTML + funciones en el archivo JS 

//eventos los trato como atributos y les paso como valor una funcion 

//eventos -> atributos : on+evento -> onclick - onchange - onblur - onmouseover..

const cambiarColorBoton=(parametro)=>{
    console.dir(parametro.target) //nodo en donde ocurre el evento
    let nodo=parametro.target
    console.log(nodo.textContent)
    //parametro.target.style.backgroundColor="salmon"
    botones[2].style.backgroundColor="salmon";
};

console.dir(botones[2])

// ************************************************ //
//Ejemplo

//cuando se pulse sobre el item 2, desplegar el submenu

//eventos -> click/onclick
//elemento/nodo -> item2 -> <li>
//accion -> mostrar el submenu (funcion)
let cambio=true;

function mostrarSubmenu() {
    let submenu=document.querySelector(".submenu");

    if(cambio){
        submenu.classList.add("mostrar");
        submenu.classList.remove("ocultar");
    }else{
        submenu.classList.remove("mostrar");
        submenu.classList.add("ocultar");
    }

    cambio = !cambio;//cambio = !true (false)
};

// ************************************************ //

//objeto event ->objeto que viene como respuesta del evento ocurrido, donde tenemos la informacion de lo que acaba de ocurrir: el evento, con que lo realizo,cuanto tiempo tardo, el nodo en el que lo ejecuto

//palabra reservada que solo existe una vez ocurrido un evento-> event



//para la proxima clase : this - setInterval() setTimeOut()

