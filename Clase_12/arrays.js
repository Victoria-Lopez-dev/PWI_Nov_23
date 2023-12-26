//variables

//creamos y asignamos un nombre
//utilizarlas | modificarlas

let alumno="Juan Perez";
let alumno1="Marta Ortiz";


console.log(alumno);//funcion propia de JS que nos permite ver por consola lo que le coloquemos entre los parentesis


//Arrays - Arreglos - Listas
//agrupar datos en forma de lista 
//utilizan [] y separa a cada item de la lista con una coma (,); menos el ultimo item de la lista

//indice|index          0               1           2               3            4
const listaAlumnos=["Juan Perez","Marta Ortiz","Martin Lopez","Daiana Gomez","Julia Gutierrez"];
let lista1=[alumno,true,1234,"blablabla",listaAlumnos,false];
const listaNueva=[];


console.log(lista1)


lista1="HOLA!";
lista1=["otra lista.."]//reasignando la variable "lista1" a otro array

console.log(lista1)
//largo de una lista (cuantos items tiene)-> length metodo de JS -> lista.length


console.log(listaAlumnos.length)

//obtener un item de la lista -> lista[indice]
listaAlumnos[3]

console.log(listaAlumnos[3])

//el largo de la lista siempre es un numero mas que el indice mas grande que tiene 



//-----------------------
//Metodos del array -> generalmente array.metodo() // modifico la lista existente


//**********

//agregar items a la lista

//push()-> agregar al final de la lista | array.push(item)

//listaAlumnos.push("Francisco Perez")
listaAlumnos.push("Juanito Juarez","Alejandro Fernandez")



//unshift() -> agrega items al inicio de la lista | array.unshift(item)
listaAlumnos.unshift("Francisco Perez")



listaNueva.push(true)

//**********
console.log(listaAlumnos)


//sacar items de la lista

// shift() -> sacar el primer item del inicio de lista | array.shift()

listaAlumnos.shift()//saco a Francisco
let alumnoFueraLista;

alumnoFueraLista=listaAlumnos.shift()//puedo sacar el item y hacer incluso cosas con este

console.log(alumnoFueraLista)

//pop() -> sacar el ultimo item al final de la lista | array.pop()


listaAlumnos.pop()

let alumnosX=listaAlumnos.pop();


console.log(listaAlumnos)
//********


//modificaciones en el medio de la lista 

//splice()-> sacar, agregar y modificar items en cualquier posicion de la lista| array.splice(indice,cantidad-items-modificar,nuevoValor)
//nuevoValor es opcional
//cantidad-items-modificar (cantidad partiendo de ese indice hacia la derecha)

listaAlumnos.splice(2,1,"Diana Ayelen Gomez");

listaAlumnos.splice(2,1,"Francisco Perez",alumnoFueraLista)

listaAlumnos.splice(2,2)


//**********

//metodo -> indexOf()-> que nos permite saber el indice de algun item | array.indexOf(item)

// me devuelve el indice del item o -1 si no lo encuentra 

console.log(listaAlumnos.indexOf("Julia Gutierrez"))

let alumnoEncontradx=listaAlumnos.indexOf("Julia Gutierrez")//buscamos el indice en donde se encuentra dicho item
console.log(listaAlumnos[alumnoEncontradx])//lo utilizamos para traerlo

console.log(listaAlumnos)

//**********

listaNueva.push(false,alumno1,alumnosX,alumnoEncontradx,"bla","otro item..")

//slice() -> porcion de un array | array.slice(indice-inicial,indice-final)
//toma a partir del indice inical que coloco hasta el indice final que coloco (este ultimo no se incluye)

console.log(listaNueva)
let porcionLista=listaNueva.slice(0,4)

console.log(porcionLista)


