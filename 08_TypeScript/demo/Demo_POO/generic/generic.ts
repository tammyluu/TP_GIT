// Generic
function getLength <T>(array : T[]): number {
    return array.length;
}
const nombres = [1,2,3,4]
getLength(nombres)
const lettres = ["1","2","3",4]
getLength(lettres)

// generic en classe
class NomDeClass<T> {
    public monAttribute : T;
    constructor (monAttribute : T){
        this.monAttribute = monAttribute;
    }
}

let monObject: NomDeClass<string>;
monObject = new NomDeClass ("42")

let monObject2: NomDeClass<number>;
monObject2 = new NomDeClass (42);
