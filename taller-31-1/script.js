/*
  Pedir al usuario que ingrese el año de su nacimiento(puede ser por medio
de un prompt o por medio de un input) y devolver un mensaje por
consola, que indique la edad que tiene.
*/

//obtener la edad de una persona a partir de un año de nacimiento

//input -DOM
//variables
//eventos ->clickee el boton "enviar"
//prompt -> informacion string

//console.log()

//armar el programa para resolver el enunciado

const obtenerEdad=(e)=>{
    e.preventDefault();
    //1- obtener lo que se coloco en el input
    
    let input=document.querySelector("#nac"); //obtener info sobre el input en JS - DOM

  //input.value -> obtengo el valor(año de nacimieto) que ingreso en el input

    //2-calcular teniendo en cuenta el año actual la edad que tiene 
    //puedo agregarle para que me sirva no solo para este año.
    const year= new Date();
    let actualAño=year.getFullYear();

    let edad=actualAño-input.value;
    //let edad=2024-input.value;

    //3- mostrar la edad por consola
    console.log("tiene "+edad+ " años")
};
//event -> palabra recervada que representa al objeto que contiene la info del evento.Dentro de esta se encuentra el metodo preventDefault().

//metodos - querySelector()-1ro | querySelectorAll()- array
//envio un formulario,por defecto se reinicia - para evitarlo:
//objeto event -> resultado del evento 
//metodo de event preventDefault() -> evita acciones por defecto 


const noir=(e)=>{
    e.preventDefault();
}
//alternativa
// let form=document.querySelector("form");

// form.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     let input=document.querySelector("#nac");

//   console.log( input.value )
//   ...
// });

//Date.now() -> tiempo actual 



//ejercicio 2 

//escriba|pegue el enunaciado 
//identificamos que nos pide.
//pensar como resolverlo sin codigo 
//ver que herramientas de JS usar (las que conozco)
//inicio el codigo
//ejecuto para ver que resuelva la problematica

//poner puesta en comun 11:40hs

/*
Solicitar por medio de un prompt que elija entre entre dos opciones “1- comenzar”
o “2- Salir”.
• Si elige la opción 1 que elija por medio de un prompt entre “1- Abrir la puerta A” o
“2-Abrir la puerta B”, Sí elige la opción 2 mostrarle con un alert “Adiós!”
• Si elige la puerta A se va a encontrar con un tigre, por lo que va a tener que elegir
entre “1-Darle un pedazo de carne” o “2- Cerrar la puerta e irse corriendo”
• Si elige la opción 1 mostrarle un alert que diga “Felicitaciones!! El león se corre y
encontramos el tesoro”.Si eligió la opción 2 devolverle un alert de “Adiós!!”
• Si eligió la puerta B devolverle un alert que diga “OH! Camino sin salida =(“
*/

//sintaxis

// if(condicion){
// accion true
// }else{
// accion false
// }

function elijeAventura() {
    let inicio=prompt('“1- comenzar” o “2- Salir”');

    if(inicio ===1){
        //pedir abrir puerta A o B

        //si elije A
        //si elije B
    }else{
        //si elijo 2 
    }

}

//elijeAventura()




//Ejercicio 3 
/*
Teniendo en cuenta esta lista de películas, armar un programa que genere
una tarjeta por cada película ,donde se muestre el titulo, la duración ,el
genero y la cantidad de tickets de la película.
*/
//tarjeta? -> contenedor (<div>) donde adentro colocemos el titulo,y para la demas info que pide una lista (<ul>| <ol>) o texto (<p>)
//programa -> funcion 
//array de objetos
let peliculas=[{
    "titulo":"Guardianes de la Galaxia",
    "duracion":"149 minutos",
    "genero":"Accion",
    "tickets":200
    },{
    "titulo":"MISANTHROPE",
    "duracion":"119 minutos",
    "genero":"Drama",
    "tickets":150
    },{
    "titulo":"Evil Dead Rise",
    "duracion":"96 minutos",
    "genero":"Terror",
    "tickets":100
    },{
    "titulo":"Super Mario Bros",
    "duracion":"93 minutos",
    "genero":"Animacion",
    "tickets":300
    },{
    "titulo":"John Wick",
    "duracion":"170 minutos",
    "genero":"Accion",
    "tickets":170
    }];

//leemos el enunciado, entenemos que tenemos que resolver: generar una funcion que tome a cada info de pelicula y genere una tarjeta en el HTML por cada una de ellas .

//como lo resolveria sin codigo
//que herramientas de JS usar:

//funcion
//repetir el crear la tarjeta x cada objeto (pelicula) - bucle 
//array -> recorrerlo
//crear una tarjeta -> DOM 

//escribir la sintaxis de esa herramienta
//pensar con que datos|info lo completamos

function armarTarjetas() {
    //recorrer la lista para que por cada pelicula crear una tarjeta en el HTML con la info.

    for(let peli of peliculas){
       // console.log(peli)-> cada item de la lista:objeto info de la pelicula
         //crear Tarjeta:
            //a-crear el contenedor de la tarjeta
        let contendor=document.createElement("div");

            //b-completar con el contenido;
        contendor.innerHTML=`
            <h2>${peli.titulo}</h2>
            <ul>
                <li>duracion: ${peli.duracion}</li>
                <li>genero: ${peli.genero}</li>
                <li>tickets disponibles: ${peli.tickets}</li>
            </ul>
        `
            //c- agregar al HTML
            let seccionTarjetas=document.querySelector("section");
            seccionTarjetas.appendChild(contendor)

    }
  
    
}
//armarTarjetas()
//crear una etiqueta -> document.createElement()
//innerHTML -> escribir el contenido HTML de un elemento
// nodopadre.appendChild(nodoHijo) -> agregar un hijo a un nodo padre
//for - for of - while - do while - map - foreach 
/*
    for(ref of array){
            accion a repetir por cada item
        }


    array.foreach((ref)=>{
        acciones a realizar por cada item..
    })
*/

// "hola"+ variable//para concatenar a un string una variable o codigo JS

// `hola ${variable}`//agrego a un string codigo JS

//alternativa
function generarTarjeta(pelicula) {
    const tarjeta = `
        <div class="tarjeta">
            <h2 >${pelicula.titulo}</h2>
            <p >${pelicula.duracion}</p>
            <p >${pelicula.genero}</p>
            <p >${pelicula.tickets}</p>
        </div>
    `;
    document.write(tarjeta);
}
    // Generar las tarjetas para cada película
peliculas.forEach((pelicula) => {
    generarTarjeta(pelicula);
});

