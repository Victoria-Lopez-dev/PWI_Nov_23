//POO -> Programacion Orientada a Objetos

//Ejemplo: 
//programa para una veterinaria 
//permita ingresar a los animales 
//agregar informacion sobre los pacientes

//Veterinaria : 2 recepcionistas : "Marta","Julio"
 let pacientes=[{}]

function agregarP(nombre,edad,raza) {

    let nuevoPaciente={
        nombre:nombre,
        edad:edad,
        raza:raza
    };
    pacientes.push(nuevoPaciente)
}

//quien tiene la capacidad de ejecutar esta funcion ???
//caracteristicas y comportamientos 

//recepcion 
// let recepcion={
//     nombre:"Marta",
//     apellido:"Perez",
//     agergarPaciente:function agregarP(nombre,edad,raza) {

//         let nuevoPaciente={
//             nombre:nombre,
//             edad:edad,
//             raza:raza
//         };
//         pacientes.push(nuevoPaciente)
//     }
// }

//POO -> clases (moldes de los actores )
//instancias de las clases 

//caracteristicas -> atributos
//comportamientos -> metodos

class Recepcion {

    constructor(nombreR,edadR,emailR){//funcion que se ejecuta apenas se cree la instancia de la clase(actor)
        this.nombre=nombreR,
        this.edad=edadR,
        this.email=emailR 
    }
  
    asignarTurno(){
        console.log(this.nombre+" saco un turno")
    }  
    agregarPaciente(nombreAnimal,edadAnimal,razaAnimal) {
        let nombre=nombreAnimal ;
        let edad= edadAnimal;
        let raza= razaAnimal;
        let nuevoPaciente={
            nombre:nombre,
            edad:edad,
            raza:raza
        };
        pacientes.push(nuevoPaciente)
        console.log(pacientes)
    }

}

//instancia de la clase Recepcion -> objeto|actor

// new clase

let martaRep=new Recepcion("Marta",22,"marta@recepcion.com");
let julioRep=new Recepcion("Julio Perez",60,"julio@recepcion.com");

// martaRep.nombre="Marta";
// martaRep.edad=22;
// martaRep.email="marta@recepcion.com";

console.log(martaRep)
martaRep.agregarPaciente("Pepito",2,"mestizo");
martaRep.asignarTurno()
console.log(julioRep)
julioRep.asignarTurno()
//--------------

//1ro creo una clase donde defino sus atributos y metodos 
//2do creo la instancia de la clase (el objeto|el actor con la capacidad de resolver el problema)

//3ro ejecuto esos metodos y atributos del objeto.