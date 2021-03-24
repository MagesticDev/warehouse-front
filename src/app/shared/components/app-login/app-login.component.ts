import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { first } from 'rxjs/internal/operators/first';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './app-login.component.html',
    styleUrls: ['./app-login.component.scss'],
    encapsulation: ViewEncapsulation.None 
})

export class AppLoginComponent implements OnInit {
    public loginForm: FormGroup;
    public hasLoading = false;

    @ViewChild('closebutton') public closebutton;

    @Output()
    public isLogged = new EventEmitter<any>();

    public invalid = false;

    
    constructor(private fb: FormBuilder, private router: Router, private AuthService: AuthService){
         this.loginForm = this.fb.group({
            login:   ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(5)]]
        });
    }


    ngOnInit() {
        
    }

    public signIn(loginForm){
        this.hasLoading = true;
        this.AuthService.userlogin(loginForm.value.login, loginForm.value.password).pipe(first()).subscribe(data => {
            this.loginForm.reset({login: '', password: ''});
            this.closebutton.nativeElement.click();
            const redirect = this.AuthService.redirectUrl ? this.AuthService.redirectUrl : '/Account';
            this.isLogged.emit(data);
            this.router.navigate([redirect]);
            this.hasLoading = false;
        },
        error => {
            this.invalid = true;
            this.hasLoading = false;
        });
    }


    get f(){
        return this.loginForm.controls;
    }
} 