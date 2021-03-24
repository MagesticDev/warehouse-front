import { ICategorie } from "./categorie.model";

export class Index implements IIndex {
    constructor(
        public isAdmin?: boolean,
        public caterogies?: ICategorie,
    ) {}
}

export interface IIndex {
     isAdmin?: boolean,
     categories?: ICategorie[]
}