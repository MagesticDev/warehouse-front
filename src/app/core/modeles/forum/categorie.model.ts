import { IForum } from "./forum.model";
export class Categorie implements ICategorie {
    constructor(
        public description?: string,
        public forums?: IForum[],
        public id?: number,
        public admin?: boolean,
        public position?: number,
        public title?: string
    ) {}
}

export interface ICategorie {
     description?: string;
     forums?: IForum[];
     id?: number;
     admin?: boolean;
     position?: number;
     title?: string;
}