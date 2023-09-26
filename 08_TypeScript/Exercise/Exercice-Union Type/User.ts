
interface User {
    nom :string;
    age : number;
    occupation? : string
}

interface Admin extends User {
    role : string;
}

export {User,Admin}