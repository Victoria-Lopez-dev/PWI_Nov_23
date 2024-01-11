//Enunciado

//1 - Agregar utilizando el DOM , la informacion de la segunda tarjeta. Esta misma la encontramos en el segundo objeto de la lista de productos dado a continuacion(es decir el producto "Set cremas dia").

//2 - lograr que al clickear en cada tarjeta, sume 1 producto a la lista de compras y figure en el chango de compra la cantidad de productos agregados a la lista de compra .


const productos=[{
    nombre:"Tonico facial",
    precio:7200,
    descuento:true,
    categoria:"tonicos"
},{
    nombre:"Set cremas dia",
    precio:12300,
    descuento:false,
    categoria:"cuidados"
},{
    nombre:"Set cremas noche",
    precio:14000,
    descuento:false,
    categoria:"cuidados"
}];

//1 - En que nodo tengo que agregar la info y como la agrego? 
/* info de la tarjeta 2:
{
    nombre:"Set cremas dia",
    precio:12300,
    descuento:false,
    categoria:"cuidados"
}

 en el nodo de clase categoria (segungo item con esta clase)
 en el nodo con id tarjeta2_h3
 en el nodo con id precio-prod
*/
//llamo al nodo, modifico/agrego la propiedad

//let categoria_tarj2=document.querySelector(".categoria");//primer nodo que tiene esa clase -> no nos sirve porque tenemos que traer la 2da 
let categoria_tarj2=document.getElementsByClassName("categoria")[1];//<p> que tiene dentro la categoria 

let titulo_tarj2=document.getElementById("tarjeta2_h3");//llamamos al nodo para cambiar su propiedad
let precio_tarj2=document.querySelector("#precio-prod");


//querySelector() | getElementById() |getElementsByTagName() |
//getElementsByClassName() | querySelectorAll() 


//agregar la informacion al <p> de categoria de la tarjeta 2

categoria_tarj2.textContent=productos[1].categoria;

titulo_tarj2.textContent=productos[1].nombre;

precio_tarj2.innerHTML=`<span>$<span> ${productos[1].precio}`;


//2 - Hacer que al clickear cada tarjeta (boton "agregar al carrito"), sume en 1 unidad el numero que figure en el carrito

//eventos -> click sobre los elementos boton

const agregar=()=>{
    //sume en 1 unidad el numero que figure en el carrito;
    //para buscar al nodo que tiene la cantidad de productos ; llamar al nodo de id="cant-productos" 
    let cantidadProd=document.querySelector("#cant-productos");
    console.dir(cantidadProd.textContent)//tipo de dato string

    let cantidadChango=parseInt(cantidadProd.textContent);

    cantidadProd.textContent=cantidadChango+1

};
