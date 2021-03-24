import { Component, OnInit, ElementRef } from '@angular/core';



@Component({
    templateUrl: './app-404.component.html',
    styleUrls: ['./app-404.component.scss']
})

export class NotFoundComponent implements OnInit {
    constructor(private elementRef: ElementRef){}
    ngOnInit() {} 
}