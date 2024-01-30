import "./Navegacion.css";
export default function Navegacion() {//le agregamos el export default al inicio de la definicion de la funcion para poder importarlo desde otro archivo
    return(
        <nav>
            <ul className="menu">
                <li>Item</li>
                <li>item</li>
            </ul>
        </nav>
    )
}

//creamos un componente funcional que permitimos que pueda ser utilizado en otros archivos