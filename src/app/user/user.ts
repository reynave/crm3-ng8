export class User {
}


export class NewUser {
    constructor(
        public first_name:string,
        public last_name:string,
       
        public id_user_access:number,
        public id_user_group:number,
        public code:string,
        public max_discount:number,
        public email:string,
        public status:boolean, 
    ){}

}


export class EditUser {
    constructor(
        public first_name:string,
        public last_name:string,
       
        public id_user_access:number,
        public id_user_group:number,

        public code:string,
        public max_discount:number,
        
        public email:string,
        public status:boolean, 
    ){}

}

