
import './App.css';

export default function Hijo({pepe,setDato}) {


return (
    <div >
      <h1>HIJO</h1>
      <button onClick={()=>setDato("CAMBIOO!")}>Click</button>
    </div>
  );
}


