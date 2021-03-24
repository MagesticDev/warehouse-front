import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ForumService } from 'src/app/core/services/forum.service';
import { IForum } from 'src/app/core/modeles/forum/forum.model';
import { ICategorie } from 'src/app/core/modeles/forum/categorie.model';
import { AuthService } from 'src/app/core/services/auth.service';
import jwt_decode from 'jwt-decode';
import { IIndex } from 'src/app/core/modeles/forum/index.model';


@Component({
    templateUrl: './app-forum-index.component.html',
    styleUrls: ['../app-forum.component.scss', './app-forum-index.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class ForumIndexComponent implements OnInit {
    public forumIndex: IIndex
    public forumCategories: ICategorie[];
    public forums: IForum[];
    public hasLoading = true;
    
    
    constructor(private forumService: ForumService, private authService: AuthService){}
    
    ngOnInit() {
        this.hasLoading = true;
        this.forumService.indexForum().subscribe(forumIndex => {
            this.forumIndex = forumIndex;
            this.forumCategories = this.forumIndex.categories;
            this.hasLoading = false;
        });

    }
}