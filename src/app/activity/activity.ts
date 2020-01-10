export class Activity {
}


export class GetSelected {
    error: 0;
    result: {
        activity_priority: [
            {
                id: string;
                name: string;
            }
        ]
        id: string;
        data: {
            id_activity_priority: string;
            activity: [
                {
                    activity_type: {
                        id: string;
                        name: string;
                    },
                    id: string;
                    comment: string;
                    subject: string;
                    due_date: string;
                    priority: {
                        id: string;
                        color: string;
                        name: string;
                    },
                    name: string;
                    user: {
                        id: string;
                        name: string;
                    }
                    false: boolean;
                }
            ],
            history: [
                {
                    id: string;
                    subject: string;
                    comment: string;
                    due_date: string;
                    name: string;
                }
            ]
        }
        name: string;

        opportunity: [{
            id: string;
            name: string;
        }]
        request: string;
        user: [
            {
                id: string;
                name: string;
            }
        ]

    }
}

export class WidgetActivty {
    constructor(
        public id_activity_type: number,
        public subject: string,
        public id_user: string,
        public date: any,
        public request: string,
        public id: string,
        public id_priority: string,
        public id_opportunity: string,
        public comment: string,
        public closed: boolean,
        
        public location: string,
        public start_date: any,
        public to_date: any,
        public id_contact:string,

        
    ) {

    }
}


export class widgetList {
    error: 0;
    result: {
        activity: [
            {
                activity_type: {
                    id: string;
                    name: string;
                },
                id: string;
                comment: string;
                subject: string;
                due_date: string;
                priority: {
                    id: string;
                    color: string;
                    name: string;
                },
                name: string;
                user: {
                    id: string;
                    name: string;
                }
                false: boolean;
            }
        ],
        history: [
            {
                activity_type: {
                    id: string;
                    name: string;
                },
                id: string;
                comment: string;
                subject: string;
                due_date: string;
                close_date: string; 
                priority: {
                    id: string;
                    color: string;
                    name: string;
                },
                name: string;
                user: {
                    id: string;
                    name: string;
                }
                false: boolean;
            }
        ]
    }


}