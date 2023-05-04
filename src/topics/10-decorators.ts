//DEcoradores no es necesario saber hacer decoradores
// ya que casi siempre vamos a consuirlos no crearlos

function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "New Property";
        hello = "override";
    }
}



@classDecorator
export class SuperClass {

    public myProperty: string = "Abc123";

    print() {
        console.log("Hola Mundo");
    }

}

console.log(SuperClass);

const myClass = new SuperClass();
console.log( myClass );