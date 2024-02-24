import { Link } from 'react-router-dom';

import { useEffect ,useState} from 'react';
import Hijo from './Hijo';

import './App.css';

function App() {

  let [dato,setDato]=useState("valor..");

  const saludar=()=>{
    alert("HOLAAAAAA")
  }
//definimos una funcion en el padre que se la pasamos como prop al hijo para que la pueda usar

  useEffect(()=>{
    console.log("funcion ejecutada cada vez que dato cambia...")
  },[dato]);
//este metodo de react me permite ejecutar una funcion cuando un estado cambia

useEffect(()=>{
  console.log("funcion ejecutada cada vez que se carga el componente App...")
},[]);
//al tener corchetes vacios, se ejecuta cada vez que se reproduce App, ejecuta 1 sola vez al reproducirse|renderizarse 
return (
    <div >
      <h1>Pagina 1 </h1>
      <button onClick={()=>alert("CLICK!!")}>Click</button>
        <Link to="/hoja2">ir a Hoja2</Link>
     <Hijo pepe={saludar} setDato={setDato}/>
      </div>
  );
}

export default App;
