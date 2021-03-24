import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import jwt_decode from 'jwt-decode';
import { IUser } from 'src/app/core/modeles/user.modele';
import { Router } from '@angular/router';

@Component({
    templateUrl: './app-admin.component.html'
})

export class AdminComponent implements OnInit {
    public account: IUser;
    constructor(private authService: AuthService, private router: Router){
        if(this.authService.getToken() != null){
            this.account = jwt_decode(this.authService.getToken())['data'];
            if(!this.account.hasAdmin){
                this.router.navigate(['/404']);
            }
        } else {
            this.router.navigate(['/404']);
        }
    }

    ngOnInit() {}
}