import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorie } from '../modeles/forum/categorie.model';
import { IForum } from '../modeles/forum/forum.model';
import { ISubject } from '../modeles/forum/subject.model';
import { IIndex } from '../modeles/forum/index.model';
import { IResponses } from '../modeles/forum/reponses.model';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ForumService {
    public resourceUrl = '/api/forum';
    
    constructor(private http: HttpClient) {}
    public indexForum(): Observable<IIndex> {
        return this.http.get<IIndex>(`${this.resourceUrl}/index`); 
    }

    public editCategorieForum(orderCategorie: ICategorie) {
        return this.http.put<ICategorie>(`${this.resourceUrl}/index`, orderCategorie).subscribe();
    }

    public addCategoriesForum(addCategorie: any){
        return this.http.post(`${this.resourceUrl}/index`, {addCategorie}).pipe(map(add => {
            return add;
        })); 
    }

    public getSection(id: number): Observable<IForum> {
        return this.http.get<IForum>(`${this.resourceUrl}/section/${id}`); 
    }

    public getSubject(id: number): Observable<ISubject> {
        return this.http.get<ISubject>(`${this.resourceUrl}/subject/${id}`); 
    }

    public edit(idTopic: number, idResponse: number): Observable<IResponses> {
        return this.http.get<IResponses>(`${this.resourceUrl}/edit/${idTopic}/${idResponse}`); 
    }

    public newSubject(id: number, title: string, description: string, text: string, isRighted, isClosed, type){
        return this.http.post<any>(`${this.resourceUrl}/new`, {id, title, description, text, isRighted, isClosed, type}).pipe(map(newSubject => {
            return newSubject;
        }));
    }

    public editChange(idTopic: number, idResponse: number, text: string) {
        return this.http.post(`${this.resourceUrl}/edit/${idTopic}/${idResponse}`, {text}).pipe(map(edited => {
            return edited;
        })); 
    }

    public response(idSubject: number , text: string, closed: number, id_forum: number){
        return this.http.post<any>(`${this.resourceUrl}/response`, {idSubject, text, closed, id_forum}).pipe(map(edited => {
            return edited;
        }));
    }
}