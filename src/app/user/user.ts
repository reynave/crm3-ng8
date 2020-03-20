export class User {
}


export class NewUser {
    constructor(
        public id_parent : string,
        public first_name:string,
        public last_name:string, 
        public email:string,
        public password:string, 
    ){}

}


export class EditUser {
    constructor(
        public id_parent:string,
        public first_name:string,
        public last_name:string,
       
        public id_user_access:number,
        public id_user_group:number,

        public code:string,
        public max_discount:number,
        
        public email:string,
        public status:boolean, 
        public pass:string, 
        public target_amount_year:string, 
        
    ){}

}


export class NewTargetAmount{
    constructor(
        public year:string,
        public amount :string,

        public leads :string,
        public opportunities :string,
        public quotes :string,
        
    ){}
}
