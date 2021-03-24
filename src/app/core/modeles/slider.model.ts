export interface ISlider {
    url?: string;
    title?: string;
    description?:string;
}

export class Slider implements ISlider {
    constructor(
        public url?: string,
        public title?:string,
        public description?:string
    ) {}
}