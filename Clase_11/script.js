/* comentarios en varias lineas */
// comentarios en un alinea

/* JS -> lenguaje del comportamiento */
//Operadores 
//aritmeticos(calculos)-> + - * /
//+ -> suma | concatenacion (string)
//NaN -> Not a Number ( tipo de dato numerico ) palabra reservada
let numero1=333;
let numero2=4444;

numero1+numero2; //4777 suma matematica
let resultado="hola"+numero1; //"hola333" concatenacion

//funciones|metodos JS -> console.log(cosas)

console.log(resultado);//nos permite ver en consola lo que le coloquemos dentro de los parentesis 

console.log("perro"*2);

//Math -> contiene calculos mas complejos par realizar.


//de comparacion -> comparar datos -> devuelve un booleano(true | false)

//simbolos : igual a ( == | === )

numero1 == numero2; //comparando
//numero1=numero2 //variable numero1 tenga como valor el valor de la variable numero2

//doble igual -> compara solo el dato(valor)
//triple igual -> compara valor y el tipo de dato(estrictamente igual)

//          333   
console.log(numero1 == "333") ;// true
console.log(numero1 === "333");//false

resultado == 200
// > < | <= >=

200 > 200 ;// false
200 >= 200; //true

//!= (valor) | !== (valor y tipo)
resultado != "hola" // true


//logicos -> utiliza varias operaciones | devuelve booleanos (true | false)
//simbolos && (AND)- !(NOT) - ||(OR) 

//and -> && "y" -> necesita que todas sus partes true para que el resultado final me de true

numero1 == "333" && 100+150 >300 && "hola" ==resultado
//  true               true
  numero1 == "333" && 100+150 >200  //true

//or -> || "o" -> con que una de las operaciones me de true , el resultado final me da true

const edad =15
const vengaConUnAdulto=false

100+150 >30 || numero1>1000 || "hola" == resultado

//             false ||     true
console.log(edad>=16 || vengaConUnAdulto === true) //con que alguna de las dos de true, el resultado final da true 



//not -> ! "no" -> niega la aperacion ( si no se cumple me devuelve verdadero )

!(numero1+111>numero2)

//palabras reservadas 

//true -false
//NaN
//undefined -> indefinido 
!undefined 

let info;
! (resultado >1000)
resultado<1000
!true // -> false


//operador ternario -> condicion indicarle si queremos que haga una accion u otra (condicional )

//sintaxis -> condicion ? accion-si-condicion-true : accion-si-condicion-false

// permitir comprar una entreda si es mayor o si viene con un adulto; sino no

//      false
edad>=16 || vengaConUnAdulto === true ? console.log("puede comprar la entrada") : console.log("no cumple con las condiciones para venderle la entrada ")


numero1 == "333"? numero1+200 >330 ? console.log("ok"): console.log("valor menor a 330"):console.log("la variable numero1 no es igual al strin 333")

//Condicionales if/else -> switch