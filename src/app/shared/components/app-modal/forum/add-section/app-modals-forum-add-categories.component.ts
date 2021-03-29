import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ForumService } from "src/app/core/services/forum.service";

@Component({
    selector: 'app-modals-forum-add-categories',
    templateUrl: './app-modals-forum-add-categories.component.html',
    styleUrls: ['./app-modals-forum-add-categories.component.scss']
})

export class AppModalsForumAddcategoriesComponent implements OnInit {
    constructor(){}
    ngOnInit() {
    } 
    add(){}
}