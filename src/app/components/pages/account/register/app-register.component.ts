import { Component, forwardRef, Inject, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/internal/operators/first';
import { URL_API } from 'src/app/core/const/api.constants';
import { IRegister } from 'src/app/core/modeles/user.modele';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
    templateUrl: './app-register.component.html',
    styleUrls: ['../app-account.component.scss', './app-register.component.scss'],
})

export class AccountRegisterComponent  {
    
    public captcha: string = URL_API + "/auths.php";
    public registerForm: FormGroup;
    public pseudoErrors: IRegister[];
    public emailErrors: IRegister[];
    public emailIdenticalErrors: IRegister[];
    public passwordErrors: IRegister[];
    public passwordIdenticalErrors: IRegister[];
    public captchaErrors: IRegister[];
    public formErrors: IRegister[];
    public error: boolean = false;
    public success: IRegister[];
    public hasLogged: IRegister[];
    public loading = false;
    
    constructor(private fb: FormBuilder, private router: Router, private AuthService: AuthService){
        this.registerForm = this.fb.group({
           pseudo:   ['', [Validators.required, Validators.minLength(3)]],
           email:   ['', [Validators.required, Validators.email]],
           confirmEmail:   ['', [Validators.required, Validators.email]],
           password: ['', [Validators.required, Validators.minLength(5)]],
           confirmPassword: ['', [Validators.required, Validators.minLength(5)]],
           country: ['', [Validators.required]],
           question: ['', [Validators.required]],
           response: ['', [Validators.required,  Validators.minLength(3)]],
           captcha: ['', [Validators.required,  Validators.minLength(5)]],
           check: ['', [Validators.required]],
       });

       if(this.AuthService.getToken() != null){
            this.router.navigate(['/Account']);
       }
   }

    public auths(){
        this.captcha = URL_API + '/auths.php?ord='+(Math.random()*500000000);
    }
    
    register(registerForm){
        this.loading = true;
        this.AuthService.register(
            registerForm.value.pseudo, 
            registerForm.value.email,
            registerForm.value.confirmEmail,
            registerForm.value.password,
            registerForm.value.confirmPassword,
            registerForm.value.country,
            registerForm.value.question,
            registerForm.value.response,
            registerForm.value.captcha,
            registerForm.value.check
        ).pipe(first()).subscribe(data => {
            this.loading = false;
            this.pseudoErrors = data.filter(item => item.type === 'pseudo');
            this.emailErrors = data.filter(item => item.type === 'email');
            this.emailIdenticalErrors = data.filter(item => item.type === 'identicalEmail');
            this.passwordErrors = data.filter(item => item.type === 'passwordErrors');
            this.passwordIdenticalErrors = data.filter(item => item.type === 'identicalPassword');
            this.captchaErrors = data.filter(item => item.type === 'incorrectCaptcha');
            this.formErrors = data.filter(item => item.type === 'incorrectForm');
            this.success = data.filter(item => item.type === 'registerSuccess');
            this.hasLogged = data.filter(item => item.type === 'hasLogged');
            console.log(data);
            
        },
        error => {
            this.loading = false;
            this.error =  true;
        });
    }
}