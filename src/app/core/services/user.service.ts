import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccountUser } from '../modeles/account.model';
import { map } from 'rxjs/operators';
import { EmailValidator } from '@angular/forms';



@Injectable({ providedIn: 'root' })
export class UserService {
    public resourceUrl = '/api/account';
    
    constructor(private httpClient: HttpClient) {}
    public getAccount(): Observable<IAccountUser> {
        return this.httpClient.get<any>(this.resourceUrl + '/myaccount'); 
    }

    public updateAvatar(file) {
        const formData = new FormData();
        formData.append('avatar', file);
        return this.httpClient.post(this.resourceUrl + '/myaccount', formData);
    }

    public updatePassword(passwordUpdate) {
        return this.httpClient.post(this.resourceUrl + '/myaccount', {passwordUpdate}).pipe(map(User => {
            return User;
        }));
    }

    public updateEmail(emailUpdate) {
        return this.httpClient.post(this.resourceUrl + '/myaccount', {emailUpdate}).pipe(map(User => {
            return User;
        }));
    }

    public updateSignature(signatureUpdate) {
        return this.httpClient.post(this.resourceUrl + '/myaccount', {signatureUpdate}).pipe(map(User => {
            return User;
        }));
    }
}
   