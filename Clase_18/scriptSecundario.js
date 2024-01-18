let info=localStorage.getItem("alumnos");//info en formato JSON.

console.log(info)

//para poder manipularla hay que transformarla

let infoParseada=JSON.parse(info)

console.log(infoParseada)

//hago las acciones necesarias ...
let lista=document.querySelector("ul");

infoParseada.forEach((al)=>{
  
    let item= document.createElement("li");
    item.innerHTML=`<p>${al.nombre}</p>`;
    lista.appendChild(item)

})