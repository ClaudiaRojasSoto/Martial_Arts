//Clase Padre y métodos getters y setters
class Personaje {
    constructor(nombre, img, poder, raza){
        let Nombre = nombre
        let Img = img
        let Poder = poder
        let Raza = raza

        this.getNombre = () => Nombre
        this.getImg = () => Img
        this.getRaza = () => Raza
        
        this.getPoder = () => Poder
        this.setPoder = (poder) => (Poder = poder)
        
    }
    
    get Nombre() {
        return this.getNombre()
    }
    get Img() {
        return this.getImg()
    }
    get Poder() {
        return this.getPoder()
    }
    get Raza() {
        return this.getRaza()
    }

   set Poder(poder) {
       return this.getPoder(poder)
   }

} 

export default Personaje