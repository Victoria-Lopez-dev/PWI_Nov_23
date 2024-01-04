let titulo=document.querySelector("h1")

console.log(titulo)
console.dir(titulo);

//crear etiquetas y sumarla al HTML

//A)
//document.createElement(etiqueta)
//padre.appendChild(hijo)-> agregar al final de un elemento 
//padre.insertBefore(nuevo,ref) -> agregar un nodo "adelante" de otro
  let section=document.querySelector("section");
    // let contenedor=document.createElement("div");

    // contenedor.classList.add("contenedor")
    // contenedor.innerHTML="<h2>titulo</h2> <p>descripcion....</p>";
    // section.appendChild(contenedor)





//B)
//innerHTML

// section.innerHTML=`
//     <div class='contenedor'>
//         <h2>titulo</h2> 
//         <p>descripcion....</p>
//     </div>
//     <div class='contenedor'>
//         <h2>titulo</h2> 
//         <p>descripcion....</p>
//     </div>
//     <div class='contenedor'>
//         <h2>titulo</h2> 
//         <p>descripcion....</p>
//     </div>`;

//EJEMPLO

// lista de productos y quiero que por cada producto se genere una tarjeta donde muestr el nombre y el precio del producto;

let productos=[
    {
        nombre:"remera",
        precio:222,
    },{
        nombre:"pantalon",
        precio:3333,
    },{
        nombre:"zapatilla",
        precio:4444,
    },{
        nombre:"buzo",
        precio:5555,
    },
    {
        nombre:"otro producto",
        precio:"blabl"
    }
]

let resultado=productos.map((prod)=>{
    let contenedor=document.createElement("div");
    contenedor.classList.add("tarjeta");
    contenedor.innerHTML=`
        <h3>${prod.nombre}</h3>
        <p> ${prod.precio}</p>
        
    `
    return section.appendChild(contenedor)
})
 console.log(resultado);


let subtitulos=document.getElementsByTagName("h2");//array

for (let i = 0; i < subtitulos.length; i++) {
    subtitulos[i].textContent="Nuevo subtitulo..."
    
}


// let prod={nombre:"titulo"}


// console.log("<h3>"+prod.nombre+"</h3>")

// console.log(`<h3>${prod.nombre}</h3>`)
// console.log(`<h3>prod.nombre</h3>`)