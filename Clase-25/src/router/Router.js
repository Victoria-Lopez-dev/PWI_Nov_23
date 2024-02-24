import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import App from "../App";
import Hijo from "../Hijo";
import Hoja2 from "../Hoja2";


export default function Ruteo(){

    return(
        <Router>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/hoja2' element={<Hoja2/>}/>
                <Route path='/blabla' element={<Hijo/>}/>
            </Routes>
        </Router>

    )
}
//alternativa
// <BrowserRouter>
    // <Routes>
    // <Route path='/' element={<App/>}/>
    // <Route path='/hoja2' element={<Hoja2/>}/>
    // </Routes>
            
// </BrowserRouter>

// creada la estructura de que acorde acada pasaje (path) que componente mostrar
//Desde el componente que queremos linkear(lo que haciamos con HTML con el <a>) - utilizamos la herramienta propia del paquete llamada <Link> que nos permite poner en el browser el pasaje que querramos
