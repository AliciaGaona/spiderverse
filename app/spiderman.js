class Spiderman{
     constructor(nombre,edad,actor,numeroPeliculas,estudioCine){
        this.nombre=nombre
        this.edad=edad
        this.actor=actor
        this.numeroPeliculas=numeroPeliculas
        this.estudioCine=estudioCine
    }
      getInfo(){
        return `Hey, I´m ${this.actor} from ${this.estudioCine} studio`
      }   
}

//exporto mi clase
module.exports = Spiderman