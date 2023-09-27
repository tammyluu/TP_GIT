

//  classe classic
/*export class Pile <T> {
    private elements: number[];
    
    constructor (){
        this.elements = [];
        
    }
     public empiler (element :number): void{
         this.elements.push(element);
    }
     public depiler (): void{
         this.elements.pop();
    }
}   
*/
// generic en classe
export class Pile <T> {
    private elements: T[];
    
    constructor (){
        this.elements = [];
        
    }
     public empiler (element :T): void{
         this.elements.push(element);
    }
     public depiler (): void{
         this.elements.pop();
    }
    public afficherElement():void{
        console.log(this.elements);
    }
}   

const hangarNumber = new Pile <number>();
hangarNumber.empiler(42);
hangarNumber.empiler(32);
hangarNumber.empiler(23);
hangarNumber.empiler(55);
hangarNumber.afficherElement()

hangarNumber.depiler();
hangarNumber.afficherElement()

const hangarBoolean = new Pile<boolean>();
hangarBoolean.empiler(true)
hangarBoolean.afficherElement()

hangarBoolean.depiler()
hangarBoolean.afficherElement()

 

