import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/core/services/forum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IForum } from 'src/app/core/modeles/forum/forum.model';

@Component({
    templateUrl: './app-forum-new.component.html',
    styleUrls: ['../../app-forum.component.scss', './app-forum-new.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ForumNewComponent implements OnInit {
    public content: string;
    public editForm: FormGroup;
    public hasLoading = false;
    private sectionId: number;
    public section: IForum;

    constructor(private location: Location, private route: ActivatedRoute, private forumService: ForumService, private fb: FormBuilder){
        this.sectionId = Number(this.route.snapshot.paramMap.get('id'));
        this.forumService.getSection(this.sectionId).subscribe(section => {
            this.section = section;
        });
        
        this.editForm = this.fb.group({
            text: [null, [Validators.required, Validators.minLength(10)]],
            title:  [null, [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
            description:  [null, [Validators.required, Validators.minLength(20), Validators.maxLength(250)]],
            isRighted: [null],
            isClosed: [null],
            type: ['normal']
        });
    }

    ngOnInit() {
    }

    edit(editForm){
        this.forumService.newSubject(this.sectionId , editForm.value.title, editForm.value.description, editForm.value.text, editForm.value.isRighted, editForm.value.isClosed, editForm.value.type).subscribe(result => {
            console.log(result);
        });
    }

    editChange(event){
        this.editForm.get('text').setValue(event);
    }

    goBack() {
        this.location.back();
    }

    get updateEdit(){
        return this.editForm.controls;
    }
}