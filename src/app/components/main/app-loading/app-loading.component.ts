import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
    selector: 'app-loading',
    templateUrl: './app-loading.component.html',
    styleUrls: ['./app-loading.component.scss'],
    encapsulation: ViewEncapsulation.None 
})

export class AppLoadingComponent implements OnInit {  
    @Input() hasLoading: boolean; 
    constructor(){}
    ngOnInit() {
    }
} 