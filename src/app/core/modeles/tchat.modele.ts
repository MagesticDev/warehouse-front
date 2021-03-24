
export interface ITchat {
    pseudo?: string;
    message?: string;
    date?: string;
    avatar?: string;
}

export class Tchat implements ITchat {
    constructor(
        public pseudo?: string,
        public message?: string,
        public date?: string,
        public avatar?: string
    ) {}
}