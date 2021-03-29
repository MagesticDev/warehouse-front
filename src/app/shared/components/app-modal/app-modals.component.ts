import { Component, Input, OnInit } from "@angular/core";
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
    constructor(private forumService: ForumService){}
    ngOnInit() {
    } 

    public newOrderList(event){
        this.forumService.editCategorieForum(event);
    }
}