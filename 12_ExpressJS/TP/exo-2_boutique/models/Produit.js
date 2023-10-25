export class Produit{
    static count = 0 
    constructor (id, titre, prix){
        this.id = id,
        this.titre = titre,
        this.prix = prix,
        this.stock = ++Produit.count
       
    }
}