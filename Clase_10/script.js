/* comentarios en varias lineas */
//comentarios en una sola linea

//JavaScript -> lenguaje de comportamiento poco tipado y permisivo


/* todo el comportamiento del sitio(acciones que podemos hacer con el sitio) 
manejamos datos - informacion

tipo de datos|valores interpreta JS
*/

//- string(caracteres) -> comillas "", '', ``

"Juan"//string
'Admin123' //string
//console.log(`Hola como estamos hoy?,....`)// -> string


//- numbers(numeros) 

123
123.234 //numero decimal 
// console.log(12.4)//numero decimal 12.4
// console.log(12,4)//dos numeros distintos 12 y 4

//- booleans(booleanos) 

//verdadero y falso -> palabras asignadas por JS 
true 
false


"123" //string 
"true"//string


//almacenar informacion -> variables (espacio de memoria donde guardar info que utilizamos a lo largo de todo mi documento JS)

//crear variable -> palabras reservadas (let - const -var)

//variables globales 

//pal nombre= valor;

var persona="Jose";//no muy recomendable por que es poco estricta, muy permisiva y da lugar al error humano

let otraPersona="Marta";//evitar que creemos mas de un espacio de memoria con el mismo nombre | permite cambiar el contenido si queremos

let dato=true;
// let otraPersona="Josefina"; -> tira error ya que let no me permite crear mas de una variable con el mismo nombre

const numero=234234;//evita crear mas de un espacio de memoria con el mismo nombre | impedir cambiar su contenido una vez creado 

//utilizar variable
//"llamar" a la variable, nombrarla
//console.log(otraPersona)
persona
otraPersona

//modificar variable
//nombre=nuevo valor

otraPersona="Maria Marta";
dato=12344
//numero=222//nos tira error ya que const no nos deja modificar el contenido una vez creada la variable

//mostrar por consola -> browser(navegador) o terminal(nodejs -> vemos mas adelante)

//JS -> funcionalidad -> console.table() console.log() console.dir()
// console.log(persona)
// console.log(otraPersona)
// console.log(dato)

//operaciones con operadores -> aritmeticas - logicas - de comparacion 


//-------------


//Aritmeticos -> calculos matematicos y una concatenacion(solo con la suma +): suma, resta,multriplacion,,,
//simbolos|signos -> + - * / 

console.log(10+33)// devuelve 43
let resultado=300-11;//calculo matematico de la resta entre dos numeros y guardar dicho resultado en la variable

console.log(resultado)
//      true->1   1+22 ->23
//      false->0   0+22 ->22
console.log(false+22)

//simbolo + -> dos usos: suma matematica ; concatenacion:unir(string)
"hola"+2
"hola"+"pepe"
"hola"-"pepe"// me devuelve NaN(not a number) -> number

"22"-"2"//calculo matematico resta
"22"+"2"


222 / 2//interpreta multiplicacion y division

//Math // contiene acciones matematicas mas complejas entre otras 
Math.PI



//-------------
//De comparacion -> comparar datos|valores -> devolver booleano(true false)

//simbolos :
//> (mayor a),< (menor a),
//>= (mayor o igual a),<= (menor o igual a),
//=== ,== ,
//!= ,!==

200>10//true
200<10//false

"hola">"uno"//false ??? por que estoy comparando strings,no la cantidad de caracteres

// metodo -> accion creada por JS para que la utilicemos 
//length -> largo | largo de un string (cantidad de caracteres tiene)| cantidad de items de una lista
//dato.length -> me devuelve un numero

let cantLetra="hola".length;//4
cantLetra>5 //false

200>200//false -> ya que mayor y menor (>,<) no contempla el mismo valor (no contempla igualdad)

console.log(200 >= 200)//true por que  contempla ese mismo valor

//doble igual (==) compara los datos (no se fija en el tipo)

//persona ="Juan" -> asignando a la variable "persona" el valor "Juan"

//         "Jose"   == "jose"
persona == "jose"// false por que en persona "Jose" esta con la J mayuscula, y lo comparo con "jose" en minuscula
//comparar el valor de la variable "persona" con el valor del strin "jose"

123123 == "123123"//true


//triple igual (===) comparar tanto el dato como su tipo

123123 === "123123"//false -> el valor es el mismo pero tenemos distintos tipos de datos que comparamos (number y un string)


//distinto a... != (compara valores|datos); !==(compara valor|dato y su tipo)
// no -> (!)

console.log(persona != "jose")//true -> por que "Jose" no es igual "jose"
console.log("1111" != 2)//true 
console.log(123123 != "123123")//false
console.log(123123 !== "123123")//true -> tiene mismo valor pero distinto tipo de dato
//-------------------------------------------------------------------
//palabras reservadas de JS

//let - const
//true - false
//NaN