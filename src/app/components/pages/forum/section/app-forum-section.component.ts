import { OnInit, Component, ViewEncapsulation } from '@angular/core';
import { ForumService } from 'src/app/core/services/forum.service';
import { ActivatedRoute } from '@angular/router';
import { IAccountUser } from 'src/app/core/modeles/account.model';
import { IForum } from 'src/app/core/modeles/forum/forum.model';
import { ISubject } from 'src/app/core/modeles/forum/subject.model';

@Component({
    templateUrl: './app-forum-section.component.html',
    styleUrls: ['../app-forum.component.scss', './app-forum-section.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ForumSectionComponent implements OnInit {
    public subjects: ISubject[];
    public section: IForum;
    public hasLoading = true;
    constructor(private forumService: ForumService, private route: ActivatedRoute){}
    ngOnInit(){
        const id = this.route.snapshot.paramMap.get('id');
        if(id != null){
            this.forumService.getSection(Number(id)).subscribe(section => {
                this.section = section;
                this.subjects = section.subjects;
                this.hasLoading = false;
            })
        }
    }

}