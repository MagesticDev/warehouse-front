import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ForumService } from "src/app/core/services/forum.service";

@Component({
    selector: 'app-modals',
    templateUrl: './app-modals.component.html',
    styleUrls: ['./app-modals.component.scss']
})

export class AppModalsComponent implements OnInit {
    @Input() public title;
    @Input() public content;
    @Output() public result = new EventEmitter<any[]>();
    @Input() editCategorie;
    constructor(){}
    ngOnInit() {
    } 

    public newEvent(event){
        this.result.emit(event);
    }
}