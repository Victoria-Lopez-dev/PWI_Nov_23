//objetos -> estructura que nos permite describir una entidad, asociando sus propiedades y valores.
//utilizan llaves {}
//podemos colocar cualquier cantidad de propiedades/claves
//no podemos dejar las propiedades sin un valor asignado
//tipo de datos como valores: todos , incluso funciones, variables,arrays y hasta otros objetos
//nombre de las propiedades/clave que tenga mas de una palabra utilizar camelCase o snakeCase para escribirlo

//no importa el orden en el que escriba las propiedades del objeto, por que para acceder a los valores lo hago refiriendome a la propiedad


/* sintaxis:
    {
        propiedad/key/clave:valor,
        propiedad/key/clave:valor,
        propiedad/key/clave:valor,
        propiedad/key/clave:valor
    }
*/

const productoLista=["Pepito",2222,10,true,[]]; //array con datos "sueltos" donde no me especifica  a que corresponde cada dato
const producto={
    marca:"Papito",
    stock:10,
    descuento:true,
    precio:2222,
    talles:[]
};

let alumno1={
    nombre:'Ana Maria',
    apellido:"Perez",
    edad:33,
    alumnoRegular:true,
    correo:"anaMaria@ejemplo.com"
};

console.log(alumno1);
let listaAlumnos = [alumno1,{nombre:"pepe"},"Juanito"];
//console.log(listaAlumnos)

//si lo que necesito es acceder al valor de una propiedad de un objeto

//sintaxis: objeto.propiedad

console.log(producto.precio);
console.log(alumno1.correo);


//modificar una propiedad de un valor

//sintaxis : objeto.propiedad=nuevoValor

alumno1.apellido="Ruiz";


//agregar propiedades
//sintaxis: objeto.propiedad=valor

alumno1.cursos=["HTML y CSS","Programacion web Inicial"];
alumno1.descuento=()=>{console.log("Descuento!!")};


//eliminar una propiedad

//sintaxis:  delete objeto.propiedad

delete alumno1.alumnoRegular;

console.log(alumno1);

//-------- 
//antes se llamaban asi a las propiedades de objetos

//llamar/modificar/crear/eliminar a propiedades -> objeto["propiedad"]

console.log(alumno1.edad)//manera actual
console.log(alumno1["edad"])//anterior manera


//ejercicio 

//A)crear un objeto de una cursada que tenga como propiedades : nombreCurso, cantidadDeAlumnos, nombreDocente,fechaDeInicio
//B) agregar dicho objeto a una lista de cursos disponibles.

//A)

const curso={
    nombreCurso:"PWI",
    cantidadDeAlumnos:34,
    nombreDocente:'Juan Perez',
    fechaDeIniico:"01/01/24"
};

//B) 

let listaDeCursos=[
    {   
        nombreCurso:"PWA",
        cantidadDeAlumnos:44,
        nombreDocente:'Marta Ruiz',
        fechaDeInicio:"01/02/24"
    }
];

listaDeCursos.push(curso)//agregamos el objeto creado en la parte A)

console.log(listaDeCursos)

//C) obtener del primer objeto de la listDeCursos, la fecha de inicio 


let curso1=listaDeCursos[0];

curso1.fechaDeInicio;

console.log(curso1.fechaDeInicio);

//si quiero hacer todo junto

console.log(listaDeCursos[0].fechaDeInicio);

//filter? -> bucle (funciones nativas JS) que nos devuelve un array con los items que cumplen con una condicion 

//D) obtener los cursos en que el docente es "Juan Perez";


//buscar de la lista aquellos items que tengan como valor del docente a 'Juan Perez"


let resultado = listaDeCursos.filter((curso)=>{return curso.nombreDocente =="Juan Perez" });

console.log(resultado);

//E) Cambiar del segundo item de la listaDeCursos, la cantidad de alumnos por 110.


//acceder al item de la lista (a donde ir)

//acceder a su propiedad para modificarla

listaDeCursos[1].cantidadDeAlumnos =110;

console.log(listaDeCursos)


//-------------------------
const listaRecaudacionDetallada=[3000,"pantalon",444,"media",555,"remera",2222,"remera",3333,444];

const listaRecaudacion2=[
    {
        producto:"pantalon",
        precio:3000
    },
    {
        producto:"media",
        precio:444
    },
    {
        producto:"remera",
        precio:2222
    },
    3333,444
]


console.log(alumno1)//objeto

//aceder al segundo item de los cursos en que esta el alumno1
//accedemos a la propiedad "cursos" del objeto , que como es un array, accedo a su indice para obtener el valor de su segundo item

console.log(alumno1.cursos[1])

