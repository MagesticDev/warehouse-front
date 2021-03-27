export interface IError {
    type?: string;
    date?: Date;
    file?: string;
    line?: number;
    ip?: string
}

export class Error implements IError {
    constructor(
        public type?: string,
        public date?: Date,
        public file?: string,
        public line?: number,
        public ip?: string
    ) {}
}