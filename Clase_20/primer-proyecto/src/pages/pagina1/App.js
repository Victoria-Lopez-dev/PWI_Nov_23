import './App.css';//trae el documento "App/css"
import Navegacion from "../../components/Navegacion/index.js";//me traigo el componente para poder usarlo

//Alternativa:
//import Navegacion from "./components/Navegacion"//va a traer el archivo que tenga como nombre index.js
import PieDePagina from "../../components/PieDePagina/PieDePagina.js"//de esta manera en caso que no se llame "index.js" el documento jsx

function App() {
  return (
    <div className="App">
      <Navegacion/>{/* me traigo el componente Navegacion y lo muestro dentro del <div> antes del <h1> */}
      <h1>Hola mundo!!</h1>
    
      <h2>Subtitulo</h2>
      <PieDePagina/>
      
   </div>
  );
}

export default App;
//class -> className
//target="_blank" -> abra ese enlace en una pestaña nueva 

// nombre de los componentes: con primer letra Mayuscula y en singular

//Los componentes solo deben reproducir/devolver una sola etiqueta 
/*

export default function App() {
  return (
    <div className="App">
      <h1>Hola mundo!!</h1>
    
      <h2>Subtitulo</h2>
   </div>
  );
}

*/
//para utilizar el componente en otro documento, solo lo tengo que importar y utilizarlo como una etiqueta de apertura y cierre 
//<App />
//para comentarios dentro del return o codigo JS (que vemos en la siguiente clase ) tenemos que englobar entre llaves lo que queremos poner en codigo JS