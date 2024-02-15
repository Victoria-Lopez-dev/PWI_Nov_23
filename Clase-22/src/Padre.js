import Hijo from './componentes/Hijo';

import './Padre.css';

function Padre() {

  const funcion=()=>{
    alert("HOLAAAA")
  }

  return (
    <div className='padre' >  
      <h1>Componente Padre</h1>
      <Hijo titulo="hola soy un titulo" info={true} funcion={funcion}/>
      <Hijo titulo="OTRO TITULOOO" info={false}/>
    </div>
  );
}

export default Padre;

//componentes funcionales
//darle un estilo unico , agregando su CSS particular
//dentro del return solo puedo tener una etiqueta (HTML)
//export default -> le damos la capacidad de ser importado en otros documentos
//por fuera del return() podemos hacer codigo JS (funciones, eventos,etc...)

//podemos hacer que algunos componentes sean las paginas que adentro tienen componentes


//para incorporar un componente en otro:
//importar el componente a incorporar
//utilizarlo dentro del return como una etiqueta

//props -> propiedades que puedo asignarle a componentes e incluso pasar informacion de un componente a otro.

