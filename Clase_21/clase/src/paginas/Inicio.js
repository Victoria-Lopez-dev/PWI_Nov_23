
import './App.css';
import Navegacion from '../componentes/Nav'; //traigo un componente
import Footer from '../componentes/Footer';


function Inicio() {
  return (
    <div className="App">
      <Navegacion saludo="HOLA" tituloHoja="Inicio"/>{/* mandamos el string "HOLA" al componente <Navegacion> desde el componente <Inicio> */}
     <h1 id='titulo'>Componente App</h1>
     
     <Navegacion saludo="Chau" tituloHoja="pepito"/>
      <Footer/>
    </div>
  );
}

export default Inicio;

//porciones del sitio -> componentes 

//props -> propiedades que le paso a los componentes 
//las props son un gran objeto con las propiedades y valores que pasamos