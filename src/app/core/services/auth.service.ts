import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IRegister, User } from '../modeles/user.modele';
import { Observable, throwError } from 'rxjs';
import { Storage } from '@ionic/storage'; 
import { Router } from '@angular/router';
import { EmailValidator } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  redirectUrl: string;
  baseUrl: string = "/api/account";
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(private httpClient: HttpClient, public router: Router) { }
  
  public userlogin(login: string, password: string) {
    return this.httpClient.post<any>(this.baseUrl + '/login', { login, password })
      .pipe(map(User => {
        localStorage.setItem('access_token', User.jwt)
        this.getUserProfile(User.id, User.jwt).subscribe((res) => {
          this.currentUser = res;
          // this.router.navigate(['user-profile/' + res.msg._id]); 
        })
        return User;
      }));
  }

   // User profile
  getUserProfile(id: number, jwt: string): Observable<any> {
    let api = `${this.baseUrl}/user-profile/${id}/${jwt}`;
    return this.httpClient.get(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

  public register(pseudo, email, confirmEmail, password, confirmPassword, country, question, response, captcha, check) {
    return this.httpClient.post<IRegister[]>(this.baseUrl + '/register', { pseudo, email, confirmEmail, password, confirmPassword, country, question, response, captcha, check })
      .pipe(map(User => {
        return User;
      }));
  }


  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  deleteToken() : void {
    localStorage.removeItem('access_token');
    this.disconnect();
  }

  disconnect(){
    return this.httpClient.get<string>(`${this.baseUrl}/disconnect`).subscribe(val => {
      console.log(val);
    }); 
  }

  // Error 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

  public recovery(email: EmailValidator, captcha: string){
    return this.httpClient.post(this.baseUrl + '/recovery', {email, captcha}).pipe(map(User => {
        return User;
    }));
  }

  public newPassword(password: string, passwordCheck: string, captcha: string, restorePassword: string){
    return this.httpClient.post(this.baseUrl + '/recovery/restorePassword/' + restorePassword, {password, passwordCheck, captcha}).pipe(map(User => {
        return User;
    }));
  }
}