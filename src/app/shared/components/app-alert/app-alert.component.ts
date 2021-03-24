import { Component, EventEmitter, Injectable, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './app-alert.component.html',
    styleUrls: ['./app-alert.component.scss']
})

export class AppAlertComponent implements OnInit {
    @Input() type: string = null;
    @Input() message: string = null;
    @Input() onClose: boolean = false;
    @Input() onCloseButton: boolean = true;
    ngOnInit() {
    }
}