export class PriceList {
}



export class PriceListUpdate{

    constructor( 
        public name: string, 
        public sku: string, 
        public id_product_type: string, 
        public price: string, 
        public description: string, 
    ) { }
}






export class Newpricelist{

    constructor( 
        public name: string,
        public id_currency: number,
        public description: string,
        public status: string, 
    ) { }
}


export class Newcataloglist{

    constructor( 
        public id_price_list: number, 
        public name: string, 
        public description: string,
        public status: string, 
    ) { }
}

export class Newproductlist{

    constructor( 
        public id_price_list: number, 
        public id_price_list_catalog: number,  
        public id_product: number,   
        public name: string, 
        public description: string,
        public status: string, 
    ) { }
}


