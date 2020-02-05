export class Product {
}


export class InsertProduct{
    constructor(
        public name:string,
        public sku:string,
        public id_product_type : string,
        public qty:string
    ){
    }
}