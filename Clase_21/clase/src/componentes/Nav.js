import "./Nav.css";

export default function Navegacion({saludo,tituloHoja}) {
    return(
        <header>
        <h3>{saludo}</h3>
           <nav>
             <h2>Estamos en la hoja {tituloHoja}</h2>
                <ul className="menu">
                    <li>
                    <a href="./hojaSecundaria.html">ir a hoja secundaria</a> 
                    </li>
                    <li>
                        <a href="#destino">ir a otra zona</a>
                    </li>
                </ul>
            </nav>
         </header>

        )
}

//export default Navegacion;
//convencion -> nombre en singular y con la primer letra mayuscula
//devuelve una unica etiqueta 

//exportar para poder usar este componenete en otro lado

//las props del componente, las recibo como parametro 

//todo JS que quiero usar dentro del return() tengo que colocarlo entre llaves {}.De esta manera diferencia ente codigo JS y codigo HTML