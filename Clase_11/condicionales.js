
//operador ternario -> condicion indicarle si queremos que haga una accion u otra (condicional )

//sintaxis -> condicion ? accion-si-condicion-true : accion-si-condicion-false

// permitir comprar una entreda si es mayor o si viene con un adulto; sino no
const edad =20
const vengaConUnAdulto=false
let numero1=333;
let numero2=4444;
//      false
edad>=16 || vengaConUnAdulto === true ? console.log("puede comprar la entrada") : console.log("no cumple con las condiciones para venderle la entrada ")


numero1 == "333"? numero1+200 >330 ? console.log("ok"): console.log("valor menor a 330"):console.log("la variable numero1 no es igual al strin 333")



//algunas funciones nativas de JS
//alert("hola!!!") -> alerta en el browser con un mensaje

//prompt() -> obtener informacion desde el browser (por ahora) | nos devuelve lo que ingreso el usuario pero en forma string 

//parseInt() | parseFloat() -> transformar lo que coloquemos entre los parentesis en numeros.
//parseInt -> numero entero
//parseFloat -> con decimales

console.log("333")//valor string
console.log(parseInt("333"))//number


//Condicionales if/else -> switch


//if/else -> si/sino

//sintaxis :
/*
if(condicion){
    accion/es a realizar si se cumple la condicion (condicion me dio true)
}else{
    accion/es a realizar si NO se cumple la condicion (condicion me dio false)
}

*/
//variables definidas antes 

// const edad =15
// const vengaConUnAdulto=false

// if(edad>=16 || vengaConUnAdulto == true){
//     alert("puede comprar entradas")
//     console.log("..acciones para la compra de la entrada")
// }else{
//     alert("no cumple con los requisitos para comprar una entrada")
// };


numero1 == "333"? numero1+200 >330 ? console.log("ok"): console.log("valor menor a 330"):console.log("la variable numero1 no es igual al strin 333");

if(numero1 == "333"){
    if(numero1+200 >330){
        console.log("ok")
    }else{
        console.log("valor menor a 330")
    }
}else{
    console.log("la variable numero1 no es igual al strin 333")
};

//if-> "desmontable" , puedo no agregarle el else y solo ocuparme de un camino unicamente 

//quiero que si el producto es un lacteo tenga un 10% de descuento


//variables globales
let producto="carne";
let precioProducto=100;

if(producto === "lacteo"){
    //variable local
    let descuento=precioProducto*0.10
    precioProducto= precioProducto - descuento //modificando el valor de la variable
   // console.log(descuento)//existe la variable local porque se encuentra en su entorno donde se creo
  
}
console.log(precioProducto)
//console.log(descuento) -> por que solo existe esa variable dentro del if (variable local)



//switch

/* sintaxis:

switch (key) {
    case value:
        acciones a realizar si ese ese valor
        break;

    default:
        break;
}
*/

//segun el cargo que tiene un usuario ,le doy distintos accesos 
let tipoUsuario="cliente";

switch(tipoUsuario){
    case "administrador":
        console.log("puede acceder a todo");
        alert("bienvenido administrador");
    break;

    case "colaborador":
        console.log("acceso limitado, para algunas cosas pedir permiso");
    break;

    case "cliente":
        console.log("solo puede acceder a la parte de compras..")
    break;
    default:
        console.log("no tiene acceso a nada...")
    break;
}
//-----------------
//alternativas con otros condicionales 


if(tipoUsuario === "administrador"){
    console.log("puede acceder a todo");
    alert("bienvenido administrador");
}
if(tipoUsuario === "colaborador"){
    console.log("acceso limitado, para algunas cosas pedir permiso");
}
if(tipoUsuario === "cliente"){
    console.log("solo puede acceder a la parte de compras..")
}
if(tipoUsuario !== "administrador" && tipoUsuario !== "colaborador" && tipoUsuario !== "cliente"){
    console.log("no tiene acceso a nada...")
}


//-----------------
if(tipoUsuario !== "administrador" && tipoUsuario !== "colaborador" && tipoUsuario !== "cliente"){
    console.log("no tiene acceso a nada...")
}else{
    if(tipoUsuario === "administrador"){
        console.log("puede acceder a todo");
        alert("bienvenido administrador");
    }
    if(tipoUsuario === "colaborador"){
        console.log("acceso limitado, para algunas cosas pedir permiso");
    }
    if(tipoUsuario === "cliente"){
        console.log("solo puede acceder a la parte de compras..")
    }
}
//...
// Repaso:

/*
variables :
-> espacio de memoria para guardar informacion
-> pueden ser globales ( las puedo usar en todo el archivo JS )
-> pueden ser locales (solo existen dentro de una estructura, despues no existen mas.No puedo usarlas por fuera de la estructura)

-> siempre primero las defino (crear) y luego las puedo utilizar y modificar

operadores:

-> nos permiten hacer acciones aritmenticas de comparacion o logicas

condiconales:
-> ante una condicion, evaluan si se cumple o no la misma para ver si hace alguna accion u otra.
-> operador ternario (que si o si tengo que definirle que acciones hacer tanto para cuando se cumple como para cuando no se cumple la operacion;solo permite una accion para cada una)

-> if (evalua si se cumple una condicion para realizar lo que tiene entre las llaves, puedo pedirle que haga varias cosas)

-> if/else (evalua si se cumple una condicion para ver si ejecuta lo que esta dentro de las llaves del if: si la condicion se cumple ; o si debe hacer las acciones que definimos dentro de las llaves del else : si la condicoin no se cumple)

*/