
export default class Contact {
    static count = 0
    constructor (id,lastname, firstname, mail, phonenumber ){
        this.id = ++Contact.count
        this.firstname =firstname
        this.lastname = lastname
        this.mail = mail
        this.phonenumber = phonenumber
    }
    get id () {
        return this.id
    }
    get firstname () {
        return this.firstname
    }
    get lastname () {
        return this.lastname
    }
    get mail() {
        return this.mail
    }
    get phonenumber () {
        return this.phonenumber
    }
    toString (){
        return this.lastname + "" + this.firstname+ ""+ this.mail +"" +this.phonenumber
    }
    
}