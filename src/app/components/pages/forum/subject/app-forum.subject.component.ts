import { Component, OnInit, Injectable, ChangeDetectionStrategy, ViewChild, ViewEncapsulation } from '@angular/core';
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
    

    constructor(private forumService: ForumService, private route: ActivatedRoute){}  
    ngOnInit() {
        const idSubject = this.route.snapshot.paramMap.get('idSubject');
        if(idSubject != null){
            this.forumService.getSubject(Number(idSubject)).subscribe(subject => {
                this.subject = subject;
                this.responses = subject.responses;
                this.hasLoading = false;
            });
        }
    }

    editor(event){
        console.log(event);
    }

    scrollToElement($element): void {
        $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}