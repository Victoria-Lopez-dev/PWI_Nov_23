//operadores

222*444

"hola"+"jose";
let alumno="Juan";//variables globales
let listaNumeros=[1,2,3,4,5,5];
let numero=22

let lista1=[alumno,true,1234,"blablabla",listaNumeros,false];

lista1.length >4



//funcion -> conjunto de instrucciones/tareas 
//1ro creo la funcion(tradicional o arrow funcion|funcion flecha)
//2do invoco


//return -> palabra reservada que indica que es lo que queremos que la funcion nos devuelva 

//creamos

//tradicional
/* sintaxis:

function nombre(parametros){
    accion/es a realizar (las instrucciones )
}


function nombre(parametros){
    accion/es a realizar (las instrucciones )

    return lo que necesito que me devuelva
}
*/

function suma() {
    let numero1=44;//variables locales

   let resultado=numero1+55+numero;
   console.log(resultado)

   resultado >100? console.log("resultqado mayor a 100"):console.log("resultado menor a 100")
};


function suma2(num1,num2) {
    let resultado=num1+num2+numero;
    console.log(resultado)
   resultado >100? console.log("resultqado mayor a 100"):console.log("resultado menor a 100")
};

function agregarNumero(numeroNuevo) {
    listaNumeros.push(numeroNuevo);
}


function promedio(numeroA,numeroB,numeroC) {
    let suma=numeroA+numeroB+numeroC;
    return suma/3
}

//arrow function -> funcion flecha

/* sintaxis:
(parametros)=>{
    accion/es que queremos hacer (instrucciones)

    return lo que queremos devolver (optativo)
}

*/

const funcionPromedio=(numeroA,numeroB,numeroC)=>{
    let suma=numeroA+numeroB+numeroC;
    return suma/3
};
let sumaBis=() =>{
    let numero1=44;//variables locales

   let resultado=numero1+55+numero;
   console.log(resultado)

   resultado >100? console.log("resultqado mayor a 100"):console.log("resultado menor a 100")
};

//invocamos/ejecutamos las veces que sean necesarias

//llamar a la funcion con sus parentesis

suma();
suma();

suma2(22,33) ;
suma2(999,232) ;
console.log(agregarNumero(33))
agregarNumero("asdjas")

funcionPromedio(34,23,53);
sumaBis();



let promedioTotal=promedio(22,444,66);
console.log("el promedio al fin es "+ promedioTotal)


//hoisting

//resumen

//funciones nos permiten agrupar un conjunto de instrucciones , donde podemos darle distintos ingresos (parametros) y pedirle que nos devuelva algo o no (con el return)
//tenemos dos maneras de crear funciones: tradicional y la funcion flecha
//siempre creamos primero la funcion (le "enseñamos" al browser que es lo que tiene que hacer)
//invocamos,ejecutamos la funcion las veces y en el momento que necesitemos.


//orden (recomendacion)

//1ero - crear variables globales 

//2do creamos las funciones 

//3ro ejecutamos las funciones 



//ejemplo 

//crear una funcion/ crear un programa que logre tomar tres nombres de productos , agregarlos a una lista de productos de una tienda; y devolvernos la cantidad de items que tenemos en la lista

let productosTienda=[];


function sumarProductos(producto1,producto2,producto3){
    productosTienda.push(producto1,producto2,producto3)//agrega al final de la lista lo que colocamos entre los parentesis

    return productosTienda.length

}
let largoLista=sumarProductos("pantalon","remera roja","zapatilla azul");

console.log(largoLista);

let resultado=sumarProductos("campera","buzo","medias");


 resultado>3?console.log("tenemos mas de 3 productos en la lista"):console.log("Hay "+ resultado+ " productos en la lista")




