import { Component, OnInit, Injectable, ChangeDetectionStrategy, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IResponses } from 'src/app/core/modeles/forum/reponses.model';
import { ISubject } from 'src/app/core/modeles/forum/subject.model';
import { ForumService } from 'src/app/core/services/forum.service';


@Component({
    templateUrl: './app-forum-subject.component.html',
    styleUrls: ['../app-forum.component.scss', './app-forum-subject.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class ForumSubjectComponent implements OnInit {
    public subject: ISubject;
    public responses: IResponses[];
    public hasLoading = true;
    public editForm: FormGroup;
    public idSubject;
    

    constructor(private forumService: ForumService, private route: ActivatedRoute, private fb: FormBuilder){}  
    ngOnInit() {
        this.idSubject = this.route.snapshot.paramMap.get('idSubject');
        if(this.idSubject!= null){
            this.forumService.getSubject(Number(this.idSubject)).subscribe(subject => {
                this.subject = subject;
                this.responses = subject.responses;
                this.hasLoading = false;

                this.editForm = this.fb.group({
                    text: [null, [Validators.required, Validators.minLength(10)]],
                });
                console.log(this.subject.id);
            });
        }
    }

    edit(editForm){
        this.forumService.response(this.idSubject , editForm.value.text, this.subject.closed, this.subject.id).subscribe(result => {
            console.log(result);
        });
    }

    editChange(event){
        this.editForm.get('text').setValue(event);
    }


    scrollToElement($element): void {
        $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}