
class Product {
    static count = 0;
    constructor(id, title, description, price) {
        this.id = ++Product.count;
        this.title = title;
        this.description = description
        this.price = price;
    } 
    get id() {
        return this.id
    }
    get title() {
        return this.title
    }
    get description() {
        return this.description
    }
    get price() {
        return this.price
    }

}
export default Product;