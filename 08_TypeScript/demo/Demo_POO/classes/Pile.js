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
export class Pile {
    constructor() {
        this.elements = [];
    }
    empiler(element) {
        this.elements.push(element);
    }
    depiler() {
        this.elements.pop();
    }
    afficherElement() {
        console.log(this.elements);
    }
}
const hangarNumber = new Pile();
hangarNumber.empiler(42);
hangarNumber.empiler(32);
hangarNumber.empiler(23);
hangarNumber.empiler(55);
hangarNumber.afficherElement();
hangarNumber.depiler();
hangarNumber.afficherElement();
const hangarBoolean = new Pile();
hangarBoolean.empiler(true);
hangarBoolean.afficherElement();
hangarBoolean.depiler();
hangarBoolean.afficherElement();
