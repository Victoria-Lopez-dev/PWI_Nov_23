let listaProductos=["pantalon","remera"];
let listaRecaudacionDetallada=[3000,"pantalon",444,"media",555,"remera",2222,"remera",3333,444];

//objetos -> "describir" a una entidad , vincular distintas propiedades a un mismo objeto

/*
sintaxis:
key|propiedad|clave

{
    propiedad:valor,
    propiedad:valor,
    propiedad:valor
}
*/
const oferta=()=>{
    console.log("calculo cuanto sale en oferta...")
}

let pantalon={
    marca:"Pepito",
    precio:3333,
    talles:["X","XL","S","M","XXL"],
    descuento:true,
    oferta:oferta
}

console.log(pantalon)