
export interface IUser {
    id?: number;
    login?: string;
    email?: string;
    ip?: string;
    lastConnection?: string;
    avatar?: string;
    hasAdmin?: boolean;
}

export class User implements IUser {
    constructor(
        public id?: number,
        public login?: string,
        public email?: string,
        public ip?: string,
        public lastConnection?: string,
        public avatar?: string,
        public hasAdmin?: boolean
    ) {
        this.id = id;
        this.login = login;
        this.email = email;
        this.ip = ip;
        this.lastConnection = lastConnection;
        this.avatar = avatar;
        this.hasAdmin = hasAdmin;
    }
}

export interface IRegister {
    status?: string;
    type?: string;
    message?: string;
}

export class Register implements IRegister {
    constructor(
        public status?: string,
        public type?: string,
        public message?: string
    ){
        this.status = status;
        this.type = type;
        this.message = message;
    }
}



