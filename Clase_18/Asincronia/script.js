const verData=(nodo)=>{
    console.log("ocurrio el evento click en un boton");
    console.dir(nodo);
    //nodo.textContent="HOLAA"
    
};

//con addEventListener

const botonEvent=document.querySelector("#boton-this");

botonEvent.addEventListener("click",(event)=>{
    console.log("evento Click en el boton event");
    console.dir(event.target)//obtenemos en este caso el nodo en el que ocurrio el evento gracias al objeto event.
});

//info sobre el evento ocurrrido -> objeto event
//info sobre el nodo en el que ocurrio ese evento -> objeto this

//obtener info de una API externa -> peticiones(pedidos)

// peticion info para leer - metodo GET
//peticion enviar informacion - metodo POST
//peticion modificar informacion - metodo PUT | PATCH
//peticion eliminar informacion - metodo DELETE

//protocolo HTTP(Hypertext transfer protocol) -> reglas para los distintos tipos de peticiones 


// 2 tipos de acciones
//Sincronas -> acciones que ocurren en simultaneo | que no requieren de un tiempo entre cada una de ellas .

//Asincrona -> acciones que ocurran una vez finalizada una anterior

//A) Callback

const myDisplayer=(info)=>{
    let texto=document.querySelector("p");
    texto.textContent=info
}
 

const myCalculator=(num1,num2,callback)=>{
    let sum=num1+num2;
    callback(sum);
}

myCalculator(44,22,myDisplayer)

// myCalculator(44,22,(sum)=>{
//     let texto=document.querySelector("p");
//     texto.textContent=sum
// })

/*
    let sum=44+22; ->66
    myDisplayer(sum); ->let texto=document.querySelector("p") ; texto.textContent=sum


*/


//B) promesas -> accion a futuro que puede cumplirse como no, entonces utilizamos 2 metodos (then -catch) que nos permiten accionar ante el resultado de esa promesa (si se logro realizar o no ).Siempre la promesa me devuelve algo 


//fetch() -> funcion propia de JS que permite realizar peticiones .
//fetch es un tipo de promesa que devuelve un objeto ya sea con lo que solicitamos o informando un error
//fetch tiene como parametro la "direccion" en la cual tiene que hacer la peticion
//por defecto hace peticiones de tipo GET (peticiones para pedir informacion )

// fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
//         .then((resp)=>{console.log("HOla") ;return resp.json()})//accionar si logra obtener la info
//         .then((data)=>{ return data.results})
//             //siguiente accion que hacemos si todo salio bien.En este caso aprovechamos que sabemos que esta API en particular devuelve la lista de personajes dentro de la propiedad "results" y la mostramos
//         .catch((error)=>{console.log(error)})

const guardarInfo=async (callback)=>{

 let  info= await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
        .then((resp)=>{return resp.json()})//accionar si logra obtener la info
        .then((data)=>{ console.log(data.results);return data.results})
            //siguiente accion que hacemos si todo salio bien.En este caso aprovechamos que sabemos que esta API en particular devuelve la lista de personajes dentro de la propiedad "results" y la mostramos
        .catch((error)=>{console.log(error)})//accionar si no logra obtenerla

    //json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo tranasforma a una array|objeto
    //....
    callback(info)

}

const mostrarNombre=(dataPersonajes)=>{
    let lista=document.querySelector("ul");

    dataPersonajes.forEach((personaje)=>{
  
        let item= document.createElement("li");
        item.innerHTML=`<p>${personaje.name}</p>`;
        lista.appendChild(item)
    
    })
}

const armarTarjeta=(dataPersonajes)=>{
    let section=document.querySelector("section");

    dataPersonajes.forEach((personaje)=>{
  
        let imagen= document.createElement("img");
            imagen.src=personaje.image;
            section.appendChild(imagen)
    
    })
    //return dataPersonajes
}

//guardarInfo(mostrarNombre)

//guardarInfo(armarTarjeta)