import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ISlider } from 'src/app/core/modeles/slider.model';
import { SliderService } from 'src/app/core/services/slider.service';


@Component({
    selector: 'app-slider',
    templateUrl: './app-slider.component.html',
    styleUrls: ['./app-slider.component.scss'],
    encapsulation: ViewEncapsulation.None 
})

export class AppSliderComponent implements OnInit {
    public getSlider: ISlider[] = [];
    constructor(private sliderService: SliderService){}

    ngOnInit() {
        this.sliderService.getSlider().subscribe(value => {
            this.getSlider = value;
        })
    }
} 