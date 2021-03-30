import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ForumService } from "src/app/core/services/forum.service";
import { ICategorie } from "src/app/core/modeles/forum/categorie.model";

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
    @Output() public newListCategorie = new EventEmitter<ICategorie>();
    public count: number;
    constructor(){}
    ngOnInit() {} 

    public newEvent(event){
        this.result.emit(event);
    }

    public countItems(count){
        this.count = count + 1;
    }

    public resultCategorie(event){
        this.newListCategorie.emit(event);
        this.content = event.categories;
    }
}