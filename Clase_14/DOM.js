//DOM -> Document Object Model

//interfaz entre JS y HTML
//desde JS poder manipular el HTML al cual se encuentra vinculado

//objetos -> toma al HTML (todo el documento) como un gran objeto; y con las propiedades de objeto poder manipular al documento HTML 

//palabra  document -> hace referencia al HTML al que este vinculado

console.log(document);

console.dir(document)

//elementos del HTML -> nodos(son los elementos HTML en "formato" objetos)


//como puedo obtener algun elemento(nodo) del body del HTML???


//metodos del DOM 
//------

/* nodos del HTML por su etiqueta -> getElementsByTagName("etiqueta") -> metodo que nos trae un array */

//let segundoH2=document.getElementsByTagName("h2")
//segundoH2[1]

let segundoH2=document.getElementsByTagName("h2")[1];//metodo que nos trae un array con todos los nodos del HTML que tienen dicha etiqueta 


//------

/*nodos del HTML por medio de la clase ->getElementsByClassName("clase");*/

//me trae un array con todos los nodos del HTML que tengan esa clase;

let claseTexto=document.getElementsByClassName("texto");//trae un array

console.log(claseTexto)


//------

/* nodos del HTML por medio de su id -> getElementById("id")
nos trae el primer nodo que cumple con ese id ( se supone que deberia ser el unico )
*/

const textoB=document.getElementById("textoB");

console.log(textoB)


//------

/* nodos del HTMl por medio de su selector -> 
    selector : .(clase), #(id),sin simbolo (etiqueta)

    document.querySelector("selector") -> trae al primer elemento(nodo) que cumple con ese selector

    document.querySelectorAll("selector")-> trae un array con todos los elementos (nodos) que complen con ese selector
*/

let h2=document.querySelector("h2");
let todosH2=document.querySelectorAll("h2");

let claseTextoBis=document.querySelector(".texto");
let textoB2=document.querySelector("#textoB")

console.dir(h2)
console.dir(todosH2)
// console.dir(segundoH2)

// console.dir(segundoH2.textContent)

// //modificar el contenido de texto del nodo? a "Nuevo nombre Subtitulo"

// segundoH2.textContent="Nuevo nombre Subtitulo"


//resumen:

//metodos para obtener los nodos del HTML:
/*
getElementsByTagName("etiqueta"),getElementsByClassName("clase"),querySelectorAll("selector") -> nos trae un array con los nodos

getElementById("id"), querySelector("selector") -> nos trae el primer nodo 
*/

//siempre para acceder o modificar una propiedad del HTML por medio del DOM :
//1ero obtener el nodo 
//2do obtener/modificar su/s propiedad/es

//-------------------------------------------------


//propiedades generales

//las que inician con "aria" -> accesibilidad 

//si agrego una clase a un elemento , modifico de manera indirecta su estilo (en caso de que dicha clase este definida en el CSS)

//classList -> lista de clases 
//metodos classList :
//add()-> agregar a la lista la/s clases que quiera

h2.classList.add("clase3")
//remove()-> elimina de la lista dicha clase

h2.classList.remove("clase2")
//toggle() -> alterna entre agregar y sacar una clase (si nota que tiene la clase que colocamos entre parentesis ,la saca de la lista, caso contrario la agrega)

h2.classList.toggle("clase3")
h2.classList.toggle("clase3")
console.log(h2)


//otra manera de cambiar estilos 


textoB.style.backgroundColor="pink";

let boton=document.querySelectorAll("button");//trae un array 

//modificar la propiedad style.display del boton

boton[0].style.display="none";


//textContent | innerText -> obtener el texto del elemento

textoB.textContent;


claseTexto[0].innerText;


//innerHTML -> al estructura HTML interna de ese elemento

let seccion=document.querySelector("section");


console.log(seccion.innerHTML)

console.log(seccion.innerText)


seccion.innerHTML=`
    <h2 class="clase3">subtitulo!!</h2>
    <div class="contenedor">
        <p>pequeño texto...</p>
        <button>HOLA!</button>
    </div>

`


//crear elementos y agregarlos al HTML
//crear elementos -> document.createElement("etiqueta")

let ancla=document.createElement("a");
ancla.href="https://www.google.com";
ancla.textContent="Ir a google...."
console.dir(ancla)

//agregar al HTML -> nodoPadre.appendChild(nodo) -> agrega al final del elemento

//seccion.appendChild(ancla)

//document.body.appendChild(ancla);-> agrega al final del body

//agregar al HTML luego de un elemento en particular -> nodoPadre.insertBefore(nodoNuevo,nodoRef);

document.body.insertBefore(ancla,textoB)

let titulo2=document.querySelector(".clase3")

seccion.insertBefore(ancla,titulo2);


//ejercitacion

//agregar en todos los li, la clase a "contenedor" y cambiar su contenido de texto a "nueva info item.."

//1ro llamo a todos los nodos, y luego lo modifico

let itemsLista=document.getElementsByTagName("li");//array
//array con todos los <li> del HTML


console.log(itemsLista)
//para agregar la clase "contenedor" -> nodo.classList.add("contenedor")

//itemsLista.classList.add("contenedor") ->me da error porque estoy queriendo modificar la propiedad del array en vez de el objeto,,

//para modificar su texto -> nodo.textContent="nueva info item.."
//hicimos un bucle que recorra la lista de todos los <li> que traimos y les aplicamos a cada uno los cambios solicitados

for(item of itemsLista){
    item.classList.add("contenedor")
    item.textContent="nueva info item.."
}



