import {useState,useEffect} from 'react';

import Card from "../Card/Card";

import "./sectionCards.css"

export default function SectionCards(){
    //conseguir la informacion(array) -> API Rick y Morty (fetch) 
    //crear una tarjeta por cada personaje
    //iterar con el map para generar una tarjeta por cada personaje

    let [listaPersonajes,setListaPersonajes]=useState([]);//genero un estado que como inicio es un array vacio que luego lo modifico con la info que traigo de la API
    
    
    const traerPersonajes=async()=>{

        let info= await fetch("https://rickandmortyapi.com/api/character")//ejecutar la peticion a esa direccion
               .then((resp)=>{return resp.json()})//accionar si logra obtener la info
               .then((data)=>{ return data.results})
                   //siguiente accion que hacemos si todo salio bien.En este caso aprovechamos que sabemos que esta API en particular devuelve la lista de personajes dentro de la propiedad "results" 
               .catch((error)=>{console.log(error)})//accionar si no logra obtenerla
       
           //json() -> metodo que evalua lo que le pasemos como JSON y lo parsea , lo tranasforma a una array|objeto
          console.log(info)
        //listaPersonajes=info;//en la proxima clase mejoramos esta asignacion con el concepto de "state" o "estados"

        setListaPersonajes(info)//cambio el estado de listaPersonajes de vacio a la lista con todos los personajes que traemos de la API y va a re-renderizar el componente - actualizarlo
        
    };

    useEffect(()=>{

        traerPersonajes()

    },[]);
    //a penas se cargue por primera vez el componente "SectionCards",ejecute la funcion traerPersonajes
   

    useEffect(()=>{
        console.log("se cambio el estado listaPersonajes")
    },
    [listaPersonajes])//este useEffect ejecuta la funcion cada vez que note que el estado listaPersonajes se modifica

    return(
        <section className="fuenteBlanca">
         
            {
                listaPersonajes.map((personaje)=>{
                    // return  <Card key={personaje.id} infoPersonaje={personaje}/>
                    return <Card key={personaje.id} infoPersonaje={personaje}/>
                })
            }
            
        </section>
    )
};