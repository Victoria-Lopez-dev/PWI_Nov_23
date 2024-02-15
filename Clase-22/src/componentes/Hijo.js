import ItemLista from './ItemLista';

import "./hijo.css"

export default function Hijo({titulo,info,funcion}) {
  //codigo JS
  const lista=[
    {
      id:"1",
      data:"item HOLA"
    },
    {
      id:"2",
      data:"Item HOLA"
    },
    {
      id:"3",
      data:"item 3"
    },
    {
      id:"4",
      data:"item 4"
    },
   {
    id:"5",
    data: "item 5"
  },
   {
    id:"6",
    data: "item 6"
  }
  ];//quiero generar un componente ItemLista por cada item de mi array "lista"

  const mensaje=(dato)=>{
    console.log(dato)

    if(info === false){
      alert("info false")
    }
  };

  //codigo HTML
  return (
    <div className="hijo" >
        <h2>Componente Hijo</h2>
        <p>Informacion desde componente padre:</p>
        <h3>{titulo}</h3>
        <button onClick={()=>mensaje("Hola")}>Click!</button>
       { /*<button onClick={mensaje}>Click!</button>*/}
      <button onClick={funcion}>ejecutar funcion de padre..</button>
    
        <ul>
         {lista.map((item)=>{
          return  <ItemLista key={item.id} numero={item.data}/>
         })}
        </ul>
        
        <ol>
        {lista.map((itemLista)=>{
         return  <li key={itemLista.id}>{itemLista.data}</li>
        })}
        </ol>
      
      </div>
  );
}

//por medio del parametro del componente funcional obtengo un objeto con todas las props que pasamos 
//para implementar JS dentro del return de un componente funcional encierro el bloque JS entre llaves

//destructing -> desglozar items de una lista o propiedades de un objeto _> props.titulo {titulo}-> titulo

//eventos como atributos : onclick| onmouseover -> onClick|onChange|onMouseover

//en HTML
// <button onclick="funcio()">click</button>

//en JSX
//<button onClick={funcio}>click</button>
////<button onClick={()=>funcio()}>click</button>


//JS -> map -> array.map(()=>{return accion a  repetir por cada item})
//map-> repite una misma accion y nos devuelve (return) lo que le pidamos, por cada item de la lista (recorre la lista completa).
//foreach|map|filter|find - for forof ....

//atributo propio de React -> key ->especie de id que asignamos a cada componente que reproduce dentro del map.


