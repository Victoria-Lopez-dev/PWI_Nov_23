import{ useState }from 'react';//hook o metodo para crear estados

import Componente from './Componente2';
import Navegacion from './Navegacion';
import Formulario from './Formulario';

import './App.css';

function Repaso() {
  let [titulo,setTitulo]=useState('Titulo inicial')//useState() nos devuelve un array con el estado en la primera posicion(indice 0) y el setter en la segunda posicion(indeice 1);pasamos dentro de los parentesis del useState el valor del estado inicial 

  const cambiarNombre=()=>{
    console.log(titulo);
    setTitulo("titulo modificado..")//modificar el valor del estado "titulo" y renderizar el componente (actualizarlo)
  }
  
  return (
    <div>
      <Navegacion/>
      <h1 className='tituloA'>Componenete Repaso</h1>
      <h2>{titulo}</h2>
      <button onClick={()=>cambiarNombre()}>Click!</button>
      {/* <button onClick={cambiarNombre}>Click!</button>*/}
      <Componente titulo={titulo} dato="bla" funcion={cambiarNombre}/>
      <Formulario/>
    </div>
  );
}

export default Repaso;
//siempre el componente dentro del return devuelve una una etiqueta

//props -> properties ->"atributos"|valores que podemos pasar de un componente a otro
//del lado del componente que recibe esas props, las ve como parametros de la funcion(objeto)
//- state(estados) 
// hooks(funciones que manipulan los estados - inician con "use")

//eventos como atributos que ejecutan funciones (on+evento con la primer letra mayuscula)
