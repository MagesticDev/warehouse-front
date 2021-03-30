import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { ICategorie } from "src/app/core/modeles/forum/categorie.model";
import { ForumService } from "src/app/core/services/forum.service";

@Component({
    selector: 'app-modals-forum-add-categories',
    templateUrl: './app-modals-forum-add-categories.component.html',
    styleUrls: ['./app-modals-forum-add-categories.component.scss']
})

export class AppModalsForumAddcategoriesComponent implements OnInit {
    public categorieForm: FormGroup;
    @Input() countCategories: number;
    @Output() public resultCategorie = new EventEmitter<ICategorie>();
   
    constructor(private fb: FormBuilder, private forumService: ForumService){
        this.categorieForm = this.fb.group({
            items: this.fb.array([this.createItem()])
        })
    }

    ngOnInit() {
        this.categorieForm.get("items")['controls'][0].get('addPositionCategorie').setValue(this.countCategories);
    } 

    createItem() {
        this.countCategories = this.countCategories + 1;
        return this.fb.group({
            addNameCategorie: ['', [Validators.required, Validators.minLength(5)]],
            addRightCategorie: ['null'],
            addDescriptionCategorie: ['', [Validators.required, Validators.minLength(5)]],
            addPositionCategorie: [this.countCategories]
        });
    }

    addNext() {
        (this.categorieForm.controls['items'] as FormArray).push(this.createItem())
        
    }

    updateCategorie(event){
        this.forumService.addCategoriesForum(event.value.items).pipe(first()).subscribe(value => {
            this.resultCategorie.emit(value);
        });
    }

    remove(){
        this.categorieForm.value.items.splice(-1, 1);
    }

    removeItem(i: number) {
        const control = <FormArray>this.categorieForm.controls['items'];
        control.removeAt(i);
     }
}