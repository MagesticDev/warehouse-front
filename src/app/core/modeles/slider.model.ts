export interface ISlider {
    url?: string;
    title?: string;
    description?:string;
    btn_link?:string;
    btn_text?:string;
    upload_date?: Date;
    modif_date?: Date;
    pseudo?: string;
}

export class Slider implements ISlider {
    constructor(
        public id?: number,
        public url?: string,
        public title?:string,
        public description?:string,
        public btn_link?:string,
        public btn_text?:string,
        public upload_date?: Date,
        public modif_date?: Date,
        public pseudo?: string
    ) {}
}