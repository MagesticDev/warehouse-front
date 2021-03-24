import {
    HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor,
    HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";

import { catchError, tap } from "rxjs/operators";
import { throwError } from 'rxjs';


@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(tap(evt => {}),
            catchError(error => {
                if (error.status == 404) {
                    this.router.navigateByUrl('/404', {replaceUrl: true});
                }

                if (error.status == 403) {
                    this.router.navigateByUrl('/403', {replaceUrl: true});
                }
                
                return throwError(error.statusText);
            }));
    }
}
