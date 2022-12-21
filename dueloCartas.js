// Carta Maestra de la que heredan las demas cartas
class Card {
    constructor(nombre, costo){
        this.nombre = nombre;
        this.costo = costo;
    }
}

// Carta Unidad
class Unidad extends Card {
    constructor(nombre, costo, poder, resiliencia){
        super(nombre, costo);
        this.poder = poder;
        this.resiliencia = resiliencia

    }

    // atacar(target){
    //     if (target instanceof Unidad)
    // }

    mostar_Informacion(){
        console.log(`El ninja es ${this.nombre} y tiene ${this.poder} de poder y ${this.resiliencia} resiliencia`)
    }
}

class Efecto extends Card{
    constructor(nombre, costo, texto, stat, magnitud){
        super(nombre, costo);
        this.texto = texto;
        this.stat =  stat;
        this.magnitud = magnitud
    }

    playA( target ) {
        if( target instanceof Unidad && this.nombre == "Algoritmo Duro" ) {
            console.log(this.nombre, " que efecto estoy usando")
            target.resiliencia = target.resiliencia + this.magnitud;
        }
        else if(target instanceof Unidad && this.nombre == "Rechazo de Promesa"){
            
            target.resiliencia = target.resiliencia - this.magnitud;
        }

        else if(target instanceof Unidad && this.nombre == "Programacion Pareja"){
            
            target.poder = target.poder + this.magnitud;
        }
        else {
            throw new Error( "El objetivo debe venir de la Unidad" );
        }
    }

}
// EFECTOS
let algoritmo_duro = new Efecto("Algoritmo Duro", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", 3 )
let rechazo_de_promesa = new Efecto("Rechazo de Promesa", 1, "reducir la resistencia del objetivo en 2", "Resiliencia", 2)
let programacion_pareja = new Efecto("Programacion Pareja", 3, "aumentar el poder del objetivo en 2", "Poder", 2)

//TURNO 1
let ninja_cinturon_rojo = new Unidad("Ninja Cinturon Rojo", 3, 3, 4)
algoritmo_duro.playA(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostar_Informacion();

//TURNO 2
let ninja_cinturon_negro = new Unidad("Ninjas Cinturon Negro", 4, 5, 4)
rechazo_de_promesa.playA(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostar_Informacion();

//TURNO 3

programacion_pareja.playA(ninja_cinturon_rojo);
ninja_cinturon_rojo.mostar_Informacion();