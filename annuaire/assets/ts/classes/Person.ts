export class Person {
  
    private static _count: number = 0 //un compteur à prepre classe
    private _id: number;
    private _firstname: string;
    private _lastname: string;
    private _age: number;
    private _birthday: Date;
    private _email: string;
    private _tel: string;
    readonly numeroIdNat: number;
    constructor(firstname: string, lastname: string, birthday: Date, email: string, tel : string, numeroIdNat: number){
      this._id = ++Person._count 
      this._firstname = firstname
      this._lastname = lastname
      this._birthday = birthday
      this._email = email
      this._tel = tel

    }
    get firstname() {
        return this._firstname
      }
    
      set firstname(value: string) {
        if (value !== "") {
          this._firstname = value
        }
      }
    get lastname() {
        return this._lastname
      }
    
      set lastname(value: string) {
        if (value !== "") {
          this._lastname = value
        }
      }
    get birthday() {
        return this._birthday
      }
    
    set birthday(value: Date) {
        
          this._birthday = value
        
      }
    get email() {
        return this._email
      }
    
    set email(value: string) {
        if (value !== "") {
          this._email = value
        }
      }
    get tel() {
        return this._tel
      }
    
    set tel(value: string) {
        if (value !== "") {
          this._tel = value
        }
      }
    static get count() {
        return Person._count
      }

    toString (){
        return this.firstname +" "+ this.lastname +"  "+ this.birthday +"  "+ " "+ this.email+ "  "+ this.tel 
        }

    get age():number{
       return this._age = new Date().getFullYear()- this._birthday.getFullYear() ;
    }  

    }


