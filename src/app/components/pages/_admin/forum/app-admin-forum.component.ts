
import { Component, OnInit } from '@angular/core';
import { ICategorie } from 'src/app/core/modeles/forum/categorie.model';
import { IForum } from 'src/app/core/modeles/forum/forum.model';
import { IIndex } from 'src/app/core/modeles/forum/index.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { ForumService } from 'src/app/core/services/forum.service';

@Component({
    templateUrl: './app-admin-forum.component.html',
    styleUrls: ['../app-admin.component.scss', './app-admin-forum.component.scss']
})

export class AdminForumComponent implements OnInit {
    public forumIndex: IIndex;
    public forumCategories: ICategorie[];
    public forums: IForum[];
    public hasLoading = true;
    public titleModal = "Gestion / Ajouter des catégories";
    
    constructor(private forumService: ForumService, private authService: AuthService){}
    
    ngOnInit() {
        this.hasLoading = true;
        this.forumService.indexForum().subscribe(forumIndex => {
            this.forumIndex = forumIndex;
            this.forumCategories = this.forumIndex.categories;
            this.hasLoading = false;
        });
    }

    openModalCategorie(){
        
    }

    drop(event){
        this.forumService.editCategorieForum(event);
    }

    newListCategorie(event){
        console.log(this.forumCategories, event.categories)
        this.forumCategories = event.categories;
    }
}