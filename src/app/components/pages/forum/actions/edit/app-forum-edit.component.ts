import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/core/services/forum.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './app-forum-edit.component.html',
    styleUrls: ['../../app-forum.component.scss', './app-forum-edit.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ForumEditComponent implements OnInit {
    public content: string;
    public editForm: FormGroup;
    public hasLoading = false;
    private idTopic: number;
    private idResponse: number;
    constructor(private location: Location, private route: ActivatedRoute, private forumService: ForumService, private fb: FormBuilder){
        this.idTopic = Number(this.route.snapshot.paramMap.get('idSubject'));
        this.idResponse = Number(this.route.snapshot.paramMap.get('idResponse'));
        if(this.idTopic != null && this.idResponse != null){
            this.forumService.edit(this.idTopic, this.idResponse).subscribe(val => {
                this.content = val.content;
                this.editForm = this.fb.group({
                    text: [this.content, [Validators.required, Validators.minLength(5)]]
                });
            });

        }
    }
    ngOnInit() {
    }

    edit(editForm){
        this.hasLoading = true;
        this.forumService.editChange(this.idTopic, this.idResponse, editForm.value.text).subscribe(data => {
            this.goBack();
            this.hasLoading = false;
        },
        error => {
            this.hasLoading = false;
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