import { ISubject } from "./subject.model";

export interface IForum {
    bg?: string;
    last_author?: string;
    last_message?: string;
    description?: string;
    id_cat?: number;
    id?: number;
    nbr_responses?: number;
    topics_nbr?: number;
    title?: string;
    avatar?: string;
    url?: string;
    subjects?: ISubject[];
    isAdmin?: boolean;
    right_write?: boolean;
    hasConnected?: boolean;
}


export class Forum implements IForum {
    constructor(
        public bg?: string,
        public last_author?: string,
        public last_message?: string,
        public description?: string,
        public id_cat?: number,
        public id?: number,
        public nbr_responses?: number,
        public topics_nbr?: number,
        public title?: string,
        public avatar?: string,
        public url?: string,
        public subjects?:  ISubject[],
        public isAdmin?: boolean,
        public right_write?: boolean,
        public hasConnected?: boolean,
    ){}
}