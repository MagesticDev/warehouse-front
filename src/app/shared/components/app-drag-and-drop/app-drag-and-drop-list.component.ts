import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-drag-and-drop-list',
    templateUrl: './app-drag-and-drop-list.component.html',
    styleUrls: ['./app-drag-and-drop-list.component.scss']
})
export class AppDragAndDropListComponent implements OnInit {
    @Input() public items;
    @Output() public result = new EventEmitter<any[]>();
    @Output() public countItems = new EventEmitter<Number>();
    constructor(){}
    ngOnInit() {
        this.totalCounts();
    }

    drop(event: CdkDragDrop<any[]>, lists) {
        if (event.previousContainer === event.container) {
            moveItemInArray(this.items, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(
              event.previousContainer.data,
              event.container.data,
              event.previousIndex,
              event.currentIndex
            );
        }
        
        this.result.emit(lists);
    }

    totalCounts() {
        let total = 0;
        this.items.forEach((d) => {
          total += 1;
        });
        this.countItems.emit(total);
    }
    
}