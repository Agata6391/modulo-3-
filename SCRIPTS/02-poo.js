class Persona {
    constructor (id,nombre,edad){
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
    }//metodos se declaran en la clase
    cantar(){
        return `${this.nombre} esta cantando`
    
    }
    presentarse() {
        return `hola, soy ${this.nombre}, tengo ${this.edad} edad`
    }
    
};

class Empleado extends Persona { //clase extendida se genera de esta manera

    constructor (id,nombre,edad,salario){
        super (id,nombre,edad);
        this.salario = salario;
    }// necesitamos sobre escribir un metodo llamamos al metodo creado 
    presentarse(){
        return super.presentarse ()+ ` y gano $ ${this.salario} `;
    }
    presentarse2(){
        return super.presentarse()
    }


}

const Persona1 = new Persona(123,'Daniel',33);
const persona2 = new Persona(124,'Jasmiz',23);
const empleado1 = new Empleado(12,'karla',34,667)
const empleado2 = new Empleado(13,'Carlos',23,400)
document.getElementById('output').innerHTML = Persona1.cantar()+"<br>"+persona2.cantar()+ '<br>' + empleado1.presentarse()+'<br>'+ empleado2.presentarse() ;

