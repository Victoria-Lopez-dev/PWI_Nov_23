//JSON -> sigla para JS Object Notation -> formato para enviar informacion, lo hace en forma de un gran "string"(formato texto)
//liviano, interpretado por muchos lenguajes

let listaProd=[{
    nombre:"remera",
    precio:3333,
    stock:222
},{
    nombre:"pantalon",
    precio:4444,
    stock:222
},{
    nombre:"zapatilla",
    precio:555,
    stock:222
}];

// let listaJSON=`[{
// "nombre":"remera",
//     "precio":3333,
//     "stock":222
// },{
// "nombre":"pantalon",
//     "precio":4444,
//     "stock":222
// },{
// "nombre":"zapatilla",
//     "precio":555,
//     "stock":222
// }]`

console.log(listaProd)
//console.log(listaJSON)

//metodos JS para transformar informacion de JSON a array|objetos  ; y de array|objeto a JSON 


//metodo para pasar a JSON 
let listaJSON=JSON.stringify(listaProd)
console.log(listaJSON)


//metodo para pasar de JSON a array|objeto

let listaParseada=JSON.parse(listaJSON)
console.log(listaParseada)


//API -> Aplication Programing Interface -> Formspree

//Asincronia -> esperar a que termine una accion para continuar con las siguientes.Le generamos una espera a una funcion para que la haga luego de otra .

//callback

//promedio : suma dividido la cantidad de items que se sumaron.Entonces hacemos que espere a tener la suma total para continuar con el promedio.
//si ejecuto las funciones por separado,en funciones que requieren de un poquito mas de tiempo no funciona,por que va a quere hacerlas en simultaneo.

let listaNum=[3,4,5,6,7,8]
function promedio(total,lista) {
    const cantidadNum=lista.length
    return "el promedio es :"+ total/cantidadNum
}

function suma(lista,funcionCallback) {
    let total=0;
    for(item of lista){
        total=total+item
    }
    funcionCallback(total,lista)//promedio(total,listaNum)
}

suma(listaNum,promedio)

/* 
reeemplaza el parametro "lista" por "listaNum" y el parametro "funcionCallback" por "promedio" :


    let total=0;
    for(item of listaNum){
        total=total+item
    }
    promedio(total,listaNum)

*/

//ejemplo de uso de callback -> addEventListener -> por que espera a que termine toda la accion del evento (click,change,etc...) para luego ejecutar la funcion como respuesta
