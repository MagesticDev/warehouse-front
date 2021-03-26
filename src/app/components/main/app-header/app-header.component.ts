import { Component, Input, OnInit, OnDestroy, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/modeles/user.modele';
import { AuthService } from 'src/app/core/services/auth.service';



@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class AppHeaderComponent implements OnInit {
    public show: boolean;
    
    @Output()
    public isLogged = new EventEmitter<boolean>();

    @Input()
    public isLoggedIn: boolean;

    @Input() accountDetail: IUser;
    @Input() hasAdmin: boolean;

    constructor(private AuthService: AuthService, private router: Router) {
        if (AuthService.isLoggedIn) {
            this.isLogged.emit(true);
            this.isLoggedIn = true;
        }
    }

    ngOnInit() {
    }

    logout() {
        this.AuthService.deleteToken();
        this.isLogged.emit(false);
        this.isLoggedIn = false;
        this.router.navigate(['/Home']);
    }

    toggle() {
        let element = document.getElementById('sidebar');
        this.show = !this.show;
        (this.show) ? element.className = 'active' : element.removeAttribute("class");
    }

} 