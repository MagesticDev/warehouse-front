import { IResponses } from "./reponses.model";

export class Subject implements ISubject {
    constructor(
        public announcement?: boolean,
        public author?: string,
        public author_text?: string,
        public closed?: number,
        public description?: string,
        public id_forum?: number,
        public topic_id?: number,
        public last_author?: string,
        public last_message?: string,
        public nbr_reads?: number,
        public nbr_responses?: number,
        public rule?: number,
        public time?: number,
        public time_new?: number,
        public title?: string,
        public type?: number,
        public url?: string,
        public isView?: boolean,
        public post_it?: boolean,
        public normal?: boolean,
        public avatar?: string,
        public responses?: IResponses[],
        public hasConnected?: boolean,
        public isAdmin?: boolean,
        public pagination?: string,
        public login?: string
    ) {}
}

export interface ISubject {
    announcement?: boolean;
    author?: string;
    author_text?: string;
    closed?: number;
    description?: string;
    id_forum?: number;
    topic_id?: number;
    last_author?: string;
    last_message?: string;
    nbr_reads?: number;
    nbr_responses?: number;
    rule?: number;
    time?: number;
    time_new?: number;
    title?: string;
    type?: number;
    url?: string;
    isView?: boolean;
    post_it?: boolean;
    normal?: boolean;
    avatar?: string;
    responses?: IResponses[];
    hasConnected?: boolean;
    isAdmin?: boolean;
    pagination?: string;
    login?: string;
}