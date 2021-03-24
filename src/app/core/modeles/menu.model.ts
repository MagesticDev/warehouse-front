export interface IMenu {
    puce?: string;
    title?: string;
    link?: string;
    hasSubMenu?: boolean;
    subMenu?: []
}

export class Main implements IMenu {
    constructor(
        public puce?: string,
        public title?: string,
        public link?: string,
        public hasSubMenu?: boolean,
        public subMenu?: []
    ) {}
}