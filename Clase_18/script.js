//JSON -> JS Object Notation -> formato tipo "string" | muy util para el envio de info 

//transformacion de JSON - array|objeto : JSON.parse()
//transformacion array|objeto - JSON :  JSON.stringify()
"" ,'',``

let infoAlumnos=[
    {
      nombre:"Juan",
      apellido:"Perez"
    },
    {
      nombre:"Pepe",
      apellido:"Ruiz"
    },
    {
      nombre:"Ana",
      apellido:"Gomez"
    }
]

let infoAlumnosJSON=JSON.stringify(infoAlumnos);

JSON.parse(infoAlumnosJSON)

console.log(infoAlumnosJSON);
console.log(JSON.parse(infoAlumnosJSON));

infoAlumnos[0].apellido //"Perez";
infoAlumnos[0].edad=33;



//API -> Aplication Programing Interfase 
//API -> formspree -giphy - rick y morty - pokeapi -mokeapi
// API -> nos permite hacer acciones complejas de una manera simple
//API -> intermediarios entre el Front y la DB


let nombre="Jose";
// Web Storage -> API incorporada al HTML5
//info almacenada en localStorage|sessionStorage -> string 

//guardar info -> webStorage.setItem(key,value)


localStorage.setItem("nombrePersona","Jose");
localStorage.setItem("nombre persona",nombre);

localStorage.setItem("alumnos",infoAlumnos)//infoAlumnos es un array de objetos (guarda: [object Object],[object Object],[object Object])


localStorage.setItem("alumnos",infoAlumnosJSON)//infoAlumnosJSON es el JSON del array infoAlumnos .Lo guarda correctamente y es posible acceder a ella
sessionStorage.setItem("nombre",nombre);



//obtener info  -> webStorage.getItem(key)

let nombreObtenido=localStorage.getItem("nombrePersona")
console.log(nombreObtenido)

console.log(localStorage.getItem("alumnos"))
//eliminar info -> WebStorage.removeItem(key)

localStorage.removeItem("nombrePersona")//eliminamos nombrePersona
