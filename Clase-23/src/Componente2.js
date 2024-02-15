import {useState} from 'react';//traigo el metodo para crear el estado y su setter

export default function Componente({titulo}) {

    let contador=0;
    const[lista,setLista]=useState(["papa"]);


    const sumarItem=()=>{

        //lista.push("nuevo Item")
        //al estado siempre lo modifico utilizando el setter
        //spread operator: ...lista (todo el contenido de "lista")
        setLista([...lista,"hola"])
        console.log(lista)
    };
    return(
        <div className='bg-info w-100  d-flex flex-column align-items-center'>
            <h2>{titulo}</h2>
            <button 
            className='btn btn-warning'
            onClick={sumarItem}
            >Agregar Item Lista
            </button>

            {lista.map((item)=>{
                contador++
                return <p key={contador}>{item}</p>
            })}        
        </div>

    )
}

// let numeros=[1,2,3,4];

// let masNumeros=[...numeros,"hola",5,6,7]
//como quedo masNumeros ? ->[1,2,3,4,"hola",5,6,7]

//OJO que sin el spread operator quedaria asi:
//let masNumeros=[numeros,"hola",5,6,7]
//como quedo masNumeros ? ->[[1,2,3,4,],"hola",5,6,7]


//en objetos

//let persona={nombre:"Juan",edad:60}
//let masInfo={...persona,altura:150}
//como se ve masInfo? -> {nombre:"Juan",edad:60,altura:150}