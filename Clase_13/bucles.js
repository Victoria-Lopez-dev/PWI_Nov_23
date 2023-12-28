let listaRecaudacion=[3000,444,555,2222,3333,444];
let listaNombre=["Marta","Julia","Martin","Joaquin","Laura"];

//programa|funcion para saber cuanto es la recaudiacion total
let total=0;

// total=total+listaRecaudacion[0]+listaRecaudacion[1]+listaRecaudacion[2]//...;
// total=total+listaRecaudacion[0]
// total=total+listaRecaudacion[1]
// total=total+listaRecaudacion[2]
// total=total+listaRecaudacion[3]

//estructuras de repeticion - bucles 

//for tradicional | for of | while | do while

//JavaScript -> funciones nativas : estructuras de repticion
//forEach | map | filter | find


//for tradicional

/* sintaxis:

    for(accion-previa;condicion;accion-al-final-de -c/vuelta){
    accion/es que queremos que haga varias veces
    }
    ...
 */

//mensaje por consola 5 veces "Hola Mundo"
//contador++ es lo mismo que contador=contador+1

//           2         1<2(false)
for (let contador=1;contador<3 ;contador++ ) {
   console.log("Hola Mundo")
}

//prompt? ->funcion nativa de JavaScript recibir strings del usuario.

//prompt("Ingrese su nombre ")
//programa que pide un nombre y lo agrega a una lista, hasta que el usuario pone la palabra "fin"

//con funcion flecha (arrow function)
const agregarNombres=()=>{
    for(let nombre=prompt("Ingrese nombre o fin para terminar");nombre !== "fin"; nombre=prompt("Ingrese otro nombre o fin para terminar")){
        listaNombre.push(nombre)
    }
    return listaNombre
}

//con funcion tradicional
function agregarNombres2(){
    for(let nombre=prompt("Ingrese nombre o fin para terminar");nombre !== "fin"; nombre=prompt("Ingrese otro nombre o fin para terminar")){
        listaNombre.push(nombre)
    }
    return listaNombre
}
//   
function iterarLista(){
//               3               6               3+1
    for(let indice=0; indice < listaRecaudacion.length;indice++){

    //    console.log(listaRecaudacion[3])  
        console.log(listaRecaudacion[indice])
        console.log("el indice del item es "+indice)
    }
}

//for of -> recorrer todo un array (no puedo usarlo en acciones a reptir que no tengan que ver con array)

/*
    for(ref of array){
        accion/es a repetir
        ref
    }
*/

//Ejemplo

for(item of listaNombre){
   if(item.length>5){
        console.log('Hola '+item)
   }else{
    console.log('Hola '+item+" como estas?")
   }
}


//console.log(total)


//while -> mientras se cumpla la condicion , ejecuta la/s accion/es que se encuentran entre las llaves, caso contrario continua con el resto de codigo.

/* 
    sintaxis:

    while(condicion){
        accion/es a repetir
    }
*/
let turno=0

function atenderPersonas() {
    while( turno <= 20 ){
        let edad=prompt("ingrese edad");
        let  adultoResponsable=prompt("ingrese si o no, en caso de venir acompañado de un adulto");
    
        if(edad >= 16 || adultoResponsable === "si"){
            console.log("vender entrada");
        }else{
            console.log("no cumple con las condiciones para venderle entrada")
        }
        turno++// turno=turno+1
    
    }
}



//do while -> permite que se ejecute/n la/s accion/es aunque sea una vez antes de ver si cumple con la condicion para repetirse
/*
sintaxis:

    do{
        accion/es a repetir
    }while(condicion)
*/


//ejemplo
let nombrePersona="Marta";

do{
    console.log("Hola "+ nombrePersona + "!")//concatenacion "Hola "+ "Marta"+ "!"
    nombrePersona="Julia"
}while(nombrePersona !== 'Julia')
//ejecuta una vez


while(nombrePersona !== 'Julia'){
    console.log("Accion en while tradicional")
    console.log("Hola Julia!")
}
//no ejecuta nunca porque desde un inicio no cumple con la condicion


//ejemplo de diferencia entre for tradicional |for of|while
for(let indice=0; indice < listaRecaudacion.length;indice++){
    total=total+listaRecaudacion[indice]
}

total=0;

for(recaudacion of listaRecaudacion){
    total=total+recaudacion
}

let indice=0

while(indice< listaRecaudacion.length){
    total=total+listaRecaudacion[indice]
    indice++
}

let numeroA=0
numeroA-- //restamos 1
numeroA++ //sumamos 1

numeroA+=3 //al valor de numeroA le sumamos 3
// variable++ suma 1 -> variable=variable+1
// variable-- resta 1 -> variable=variable-1

//variable+= numero -> a lo ya obtenido le sumo el numero -> variable=variable+numero
console.log(numeroA)