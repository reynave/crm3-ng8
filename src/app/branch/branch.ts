export class Branch {
}

export class NewBranch {

    constructor(
        public id_company:number,
        public branchName: string,
        public status: string,
        public phone: string,
        public email: string,
        public code: string,
        public address_street: string,
        public address_city: string,
        public address_state: string,
        public address_code: string,
    ) { }

}