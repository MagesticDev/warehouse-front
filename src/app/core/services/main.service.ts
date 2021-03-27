import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IError } from "../modeles/error.model";
import { IMain } from "../modeles/main.model";

@Injectable({
    providedIn: 'root'
})

export class MainService {
    public resourceUrl = '/api';
    
    constructor(private httpClient: HttpClient) {}
    public getMain(): Observable<IMain> {
        return this.httpClient.get<IMain>(this.resourceUrl + '/main'); 
    }

    public getError(): Observable<IError>{
        return this.httpClient.get<IError>(this.resourceUrl + '/errors'); 
    }
}