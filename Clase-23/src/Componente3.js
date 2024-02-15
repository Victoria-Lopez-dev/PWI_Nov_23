import {useState,useEffect} from 'react';
//useEffect -> hook que me permite ejecutar una funcion en algun momento preciso, como puede ser cuando apenas de reproduce el componente, cuando un estado o variable se modifica,es decir en distintos momentos del ciclo de vida del componente.

export default function Componente3(){
    let [valor,setValor]=useState("HOLA")

    const cambiarValor=()=>{
        setValor("chay")
    }

    useEffect(()=>{
        setValor("Nuevo titulo ,aplicando el useEffect");
        //console.log("se ejecuto apenas se cargo el componente Componente3")
    },[])
    //useEffect tiene dos parametros: una funcion (callback) y unos corchetes que nos indica en que momento ejecutar la funcion callbak

    //si colocamos los corchetes vacios, lo va a ejecutar cuando se cargue el componente por primera vez 
    useEffect(()=>{
        console.log("se ejecuta esta funcion cada vez que se modifique el estado data")
      },[valor])
      //en este caso, cada vez que vea , que el valor de "valor" se modifica ,reproduce la funcion que tiene en el primer parametro
    return(
        <div>
            <button className='btn btn-danger'onClick={cambiarValor}>cambiar valor...</button>
            <h3>{valor}</h3>

        </div>
    )
}
//este componente renderiza (reproduce|muestra) un div con un <h3> que tiene la palabra HOLA de manera inicial.