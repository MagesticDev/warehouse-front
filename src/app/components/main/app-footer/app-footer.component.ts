import { Component, Input, OnInit } from '@angular/core';
import { IMain } from 'src/app/core/modeles/main.model';



@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.scss']
})

export class AppFooterComponent implements OnInit {
    public year: number = new Date().getFullYear();
    @Input()
    public main: IMain;
    constructor(){
    }
    ngOnInit() { 
        
    }
}