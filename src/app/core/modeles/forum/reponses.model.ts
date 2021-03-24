

export interface IResponses {
    author?: string;
    author_modif?: string;
    author_text?: string;
    avatar?: string;
    closed?: number
    content?: string;
    date_modif?: string;
    description?: string; 
    first?: number;
    id?: number;
    id_forum?: number;
    ip?: string;
    isAdmin?: boolean;
    last_author?: string;
    nbr_message?: number;
    online?: boolean;
    rule?: number;
    signature?: string;
    time?: string;
    title?: string;
    topic_id?: number;
    type?: number;
    editedBy?: string;
    url?: string;
}


export class responses implements IResponses {
    constructor(
        public author?: string,
        public author_modif?: string,
        public author_text?: string,
        public avatar?: string,
        public closed?: number,
        public content?: string,
        public date_modif?: string,
        public description?: string,
        public first?: number,
        public id?: number,
        public id_forum?: number,
        public ip?: string,
        public isAdmin?: boolean,
        public last_author?: string,
        public nbr_message?: number,
        public online?: boolean,
        public rule?: number,
        public signature?: string,
        public time?: string,
        public title?: string,
        public topic_id?: number,
        public type?: number,
        public editedBy?: string,
        public url?: string
    ){}
}