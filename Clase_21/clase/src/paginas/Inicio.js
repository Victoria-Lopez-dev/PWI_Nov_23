
import './App.css';
import Navegacion from '../componentes/Nav'; //traigo un componente
import Footer from '../componentes/Footer';
import Boton from '../componentes/Boton';

function Inicio() {
  let variable="HOLA";

  const saludar=()=>{
    console.log("Bienvenido/a/e!")
  }
  //saludar()

  return (
    <div className="App">
      <Navegacion saludo={variable} tituloHoja="Inicio"/>{/* mandamos el string "HOLA" al componente <Navegacion> desde el componente <Inicio> */}
     <h1 id='titulo'>Componente App</h1>
     <p>{variable}</p>
     <Boton nombre="Boton1"/>
     <Boton nombre="Boton2"/>
     <Boton nombre="Boton3"/>
      <Footer/>
    </div>
  );
}

export default Inicio;

//porciones del sitio -> componentes 

//props -> propiedades que le paso a los componentes (como atributos )
//las props son un gran objeto con las propiedades y valores que pasamos

/*sintaxis:

export default function Componente(){
  //todo el codig JS: variables, funciones....

    return(
      codigo HTMl ( con los detalles que nos pide React)
    )
}


*/