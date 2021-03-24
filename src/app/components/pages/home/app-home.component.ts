import { Component, OnInit, Injectable, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';



@Component({
    templateUrl: './app-home.component.html',
    styleUrls: ['./app-home.component.scss']
})

export class HomeComponent implements OnInit {


    constructor(private elementRef: ElementRef){}
    ngOnInit() {

        
    } 
}