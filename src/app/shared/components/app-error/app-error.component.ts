import { Component, EventEmitter, Injectable, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { IError } from 'src/app/core/modeles/error.model';
import { MainService } from 'src/app/core/services/main.service';

@Component({
    selector: 'app-error',
    templateUrl: './app-error.component.html',
    styleUrls: ['./app-error.component.scss']
})

export class AppErrorComponent implements OnInit {
    public errors: IError;
    constructor(private mainService: MainService, private router: Router){
        router.events.pipe(
            filter(event => event instanceof NavigationEnd)  
        ).subscribe((event: NavigationEnd) => {
            this.ngOnInit();
        });
    }
    ngOnInit() {
        this.mainService.getError().subscribe(errors => {
            this.errors = errors;
        });
    }
}