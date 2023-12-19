/* comentarios en varias lineas */
//comentarios en una sola linea


/* todo el comportamiento del sitio(acciones que podemos hacer con el sitio) 
manejamos datos - informacion

tipo de datos|valores interpreta JS
*/

//- string(caracteres) -> comillas "", '', ``

"Juan"//string
'Admin123' //string
//`Hola como estamos hoy?,....` -> string


//- numbers(numeros) 

123
123.234 //numero decimal 


//- booleans(booleanos) 

//verdadero y falso -> palabras asignadas por JS 
true 
false


"123" //string 
"true"//string


//almacenar informacion -> variables (espacio de memoria donde guardar info que utilizamos a lo largo de todo mi documento JS)

//crear variable -> palabras reservadas (let - const -var)

//pal nombre= valor;

var persona="Jose";//no muy recomendable por que es poco estricta, muy permisiva y da lugar al error humano

let otraPersona="Marta";//evitar que creemos mas de un espacio de memoria con el mismo nombre | permite cambiar el contenido si queremos

// let otraPersona="Josefina"; -> tira error ya que let no me permite crear mas de una variable con el mismo nombre

const numero=234234;//evita crear mas de un espacio de memoria con el mismo nombre | impedir cambiar su contenido una vez creado 

//utilizar variable
//"llamar" a la variable, nombrarla
console.log(otraPersona)
persona
otraPersona

//modificar variable
//nombre=nuevo valor
otraPersona="Maria Marta";
//numero=222//nos tira error ya que const no nos deja modificar el contenido una vez creada la variable

//mostrar por consola -> browser(navegador) o terminal(nodejs -> vemos mas adelante)

//JS -> funcionalidad -> console.table() console.log() console.dir()
// console.log(persona)
console.log(otraPersona)
console.log(numero)