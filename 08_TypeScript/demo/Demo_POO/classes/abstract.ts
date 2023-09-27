 abstract class Base {
    //private int:number;
    constructor(private int : number){
        //this.int = int;
    }
    abstract toString(): string // juste une singature
    get getInt (){
        return this.int
    }

    set setInt (value : number){
        this.int = value
    }
    palrer(){
        console.log("toto");
    }
}
// let maBase = new Base(24):

class Basic extends Base {
    private firstname : string;
    constructor (firstname :string, int : number){
        super(int);
        this.firstname = firstname;
    }
    toString(): string {
        return "Hello World" + this.getInt.toString();
    }
}
let b: Basic = new Basic("toto", 42);
console.log(b.toString());