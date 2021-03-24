import { Component, Input, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { MainService } from 'src/app/core/services/main.service';
import { IMain } from 'src/app/core/modeles/main.model';


@Component({
    selector: 'app-aside',
    templateUrl: './app-aside.component.html',
    styleUrls: ['./app-aside.component.scss'],
    encapsulation: ViewEncapsulation.None 
})

export class AppAsideComponent implements OnInit {
    @Input()
    public main: IMain;
    constructor() {}

    ngOnInit() {}
}