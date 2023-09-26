

interface Client {
    firstname :string;
    lastname : string;
    numeroIdNat? : number; // propriété pas obligatoire avec "?"
    acheter ? : () => number;
}
// une interface peut-être égalemant héritéé ...
interface ClientRegulier extends Client {
    pointFid : number;
}
// Elles peuvent également être 
export {Client,ClientRegulier}