export interface IAccountUser {
    address?: string;
    avatar?: string;
    birth?: string;
    city?: string;
    country?: string;
    email?: string;
    golds?: number;
    hasAdmin?: boolean;
    hasOnline?: boolean;
    id?: number;
    lastLoggedIn?: string;
    lastName?: string;
    login?: string;
    name?: string;
    newsletter?: boolean;
    rang?: number;
    registerDate?: string;
    signature?: string;
    zipCode?: number;
}

export class AccountUser implements IAccountUser {
    constructor(
        public address?: string,
        public avatar?: string,
        public birth?: string,
        public city?: string,
        public country?: string,
        public email?: string,
        public golds?: number,
        public hasAdmin?: boolean,
        public hasOnline?: boolean,
        public id?: number,
        public lastLoggedIn?: string,
        public lastName?: string,
        public login?: string,
        public name?: string,
        public newsletter?: boolean,
        public rang?: number,
        public registerDate?: string,
        public signature?: string,
        public zipCode?: number,
    ){}
}