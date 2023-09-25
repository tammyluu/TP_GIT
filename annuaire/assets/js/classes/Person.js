export class Person {
    constructor(firstname, lastname, birthday, email, tel, numeroIdNat) {
        this._id = ++Person._count;
        this._firstname = firstname;
        this._lastname = lastname;
        this._birthday = birthday;
        this._email = email;
        this._tel = tel;
    }
    get firstname() {
        return this._firstname;
    }
    set firstname(value) {
        if (value !== "") {
            this._firstname = value;
        }
    }
    get lastname() {
        return this._lastname;
    }
    set lastname(value) {
        if (value !== "") {
            this._lastname = value;
        }
    }
    get birthday() {
        return this._birthday;
    }
    set birthday(value) {
        if (value !== new Date()) {
            this._birthday = value;
        }
    }
    get email() {
        return this._email;
    }
    set email(value) {
        if (value !== "") {
            this._email = value;
        }
    }
    get tel() {
        return this._tel;
    }
    set tel(value) {
        if (value !== "") {
            this._tel = value;
        }
    }
    static get count() {
        return Person._count;
    }
    toString() {
        return this.firstname + this.lastname + this.birthday + this.birthday + this.email + this.tel;
    }
}
Person._count = 0;
