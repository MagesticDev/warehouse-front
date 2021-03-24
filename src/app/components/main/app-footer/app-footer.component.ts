import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { IMain } from 'src/app/core/modeles/main.model';
import { MainService } from 'src/app/core/services/main.service';


@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.scss']
})

export class AppFooterComponent implements OnInit {
    public year: number = new Date().getFullYear();
    @Input()
    public main: IMain;
    ngOnInit() { 
        
    }
}