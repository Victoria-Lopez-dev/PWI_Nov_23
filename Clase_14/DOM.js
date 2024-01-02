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

//por su etiqueta -> getElementsByTagName("etiqueta") -> metodo que nos trae un array

//let primerH2=document.getElementsByTagName("h2")
//primerH2[0]

let primerH2=document.getElementsByTagName("h2")[0];//metodo que nos trae un array con todos los nodos del HTML que tienen dicha etiqueta 

console.dir(primerH2)

console.dir(primerH2.textContent)

//modificar el contenido de texto del nodo? a "Nuevo nombre Subtitulo"

primerH2.textContent="Nuevo nombre Subtitulo"





