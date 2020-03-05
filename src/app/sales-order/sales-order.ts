export class SalesOrder {
}


export class SalesOrderNew {
 
    constructor(
        public id_quote: string,
        public id_opportunity: string,
        public id_company: string,
        public id_contact: string,
        
        public name: string,
        public expirationDate: any,
        public status: string,
        public description:string,
        public discount : number,
        public tax: number,
        public shipping : number, 
        public id_user : number, 
        
        public email:string,
        public phone:string,
        public fax:string, 

        public bill_name:string,
        public bill_street1:string,
        public bill_street2:string,
        public bill_city:string,
        public bill_state:string,
        public bill_code:string,
        public bill_country:string,

        public ship_name:string,
        public ship_street1:string,
        public ship_street2:string,
        public ship_city:string,
        public ship_state:string,
        public ship_code:string,
        public ship_country:string, 
        
      ) {  }
}


export class EditSalesOrder {
  constructor( 
      public name: string,
      public expirationDate: any,
      public id_quote_status: number,
      public description:string,
      public discount : string,
      public tax: string,
      public shipping : number, 
      public id_user : string, 
      
      public email:string,
      public phone:string,
      public fax:string, 
       
      public bill_name:string,
      public bill_street1:string,
      public bill_street2:string,
      public bill_city:string,
      public bill_state:string,
      public bill_code:string,
      public bill_country:string,

      public ship_name:string,
      public ship_street1:string,
      public ship_street2:string,
      public ship_city:string,
      public ship_state:string,
      public ship_code:string,
      public ship_country:string,
      public id_contact:string,
      
    ) {  }
}

