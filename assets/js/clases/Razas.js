import Personaje from "./Personaje.js"

//Subclases
class Saiyajin extends Personaje{
    constructor (nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Transformacion(){
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 1.8))
    }
}

class Humano extends Personaje{
    constructor (nombre, img, poder, raza){
        super(nombre, img, poder, raza)
    }

    Coraje(){
        let poder = this.getPoder()
        this.setPoder(parseInt(poder * 1.2))
    }
}

export { Saiyajin, Humano }