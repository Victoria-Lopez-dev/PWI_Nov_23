const lista_previa=document.querySelector(".compra-previa");
//Funcion para mostrar


//funciones para estilos del sitio
const cerrar=()=>{
    
    lista_previa.style.display='none'
}

const mostrar=()=>{
    lista_previa.style.display='flex'
}

//menu desplegable con JS
const desplegarMenu=()=>{
    let menu=document.querySelector("ul");
    menu.classList.toggle("mostrar")
}

