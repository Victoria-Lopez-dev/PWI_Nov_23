import { Fragment } from "react";//componente de react

// export default function Componente(props) {
 export default function Componente({dato}) {

    //console.log(props)
    return (
        <Fragment>
            <h2>Subtitulo</h2>
            <ul>
                {/* <li>{props.dato}</li>*/}
                <li>{dato}</li>
                <li>item</li>
            </ul>        
        </Fragment>);
  
}  
//manera mas utilizada 
// return (
//     <>
//         <h2>Subtitulo</h2>
//         <ul>
//             <li>item</li>
//             <li>item</li>
//         </ul>        
//     </>);



// <Fragment> |  <> </> -> simbolo que nos permite indicar un fragmento que engloba a varias etiquetas pero que al compilarlo no los tiene en cuenta.


