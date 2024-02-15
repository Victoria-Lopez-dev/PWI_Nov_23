import {useState} from 'react';
//destructing de todos los metodos que me traigo del paquete de react
//useState -> metodo propio del paquete de react que nos va a permitir crear estados

import Componente from './Componente2';

import './State.css';

function State() {
  //const[info]=useState(true)//puedo generar un estado y no traer a su setter.Este estado no lo puedo modificar

  //let data="titulo"
  ///para crear un estado
  let [data,setData]=useState("titulo inicial");//["titulo",()=>{}]
  //el useState() nos devuelve un array que  tiene dos items: estado+ setter.
  // El estado inicial en este caso es "titulo"
  //por medio del destructing, guardo en una variable el estado inicial(data) y en otra variable el setter:funcion que me permite actualizar el estado(setData)

  const cambioData=()=>{
   // data="otro valor";-> como modificabamos una variable antes, pero que aca no funciona para renderizar nuevamente el componente con el cambio de valor

   //uso el setter de el estado para actualizarlo y que refrezque|renderize nuevamente el/los componente/s que usan este estado
   //setter(nuevoValor)

    setData("otro valor");
    console.log(data)
    //console.log(info)
  }

  return (
    <div className='d-flex flex-column align-items-center mt-4 gap-3'>
      <h1>{data}</h1>
      <button className='btn btn-success' onClick={cambioData}>click</button>
      <Componente titulo={data}/>
      </div>
  );
}

export default State;

//atributos eventos -> on+evento=funcion()
//nombre del evento inicie con la primer letra en mayuscula