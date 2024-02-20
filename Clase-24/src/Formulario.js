import { useState } from "react";



export default function Formulario() {

    let[valorCheck,setValorCheck]=useState("pulsado");
    let[nombre,setNombre]=useState("Marta");
    let[clase1,setClase1]=useState("verde")

    const verInfo=(e)=>{
        e.preventDefault();
        console.dir(e.target)//vemos el nodo del formulario
    };
    const modificarEstado=(nodo)=>{
        console.dir(nodo)
        setNombre(nodo.value)//cambiemos el estado "nombre"
        if(nodo.value.length <3){
            setClase1("rojo")
        }else{
            setClase1("verde")
        }
    }

    return(
        <form onSubmit={(event)=>verInfo(event)}>
        <div className={clase1}>
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" value={nombre} onChange={(event)=>modificarEstado(event.target)}/>
        
        </div>

            <label htmlFor="apellido">Apellido</label>
            <input type="text" id="apellido"/>

            <label htmlFor="marcar">marcar</label>
            <input type="checkbox" value={valorCheck} id="marcar"/>

            <input type="submit" value="enviar"/>
        </form>
    )
}
//componente no controlado
// <form onSubmit={(event)=>verInfo(event)}>
// <label htmlFor="nombre">Nombre</label>
// <input type="text" id="nombre" defaultValue="HOLA"/>

// <label htmlFor="apellido">Apellido</label>
// <input type="text" id="apellido"/>

// <label htmlFor="marcar">marcar</label>
// <input type="checkbox" value={valorCheck} id="marcar"/>

// <input type="submit" value="enviar"/>
// </form>

//React que en vez del atributo for ->htmlFor 
