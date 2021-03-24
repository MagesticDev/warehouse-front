import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { URL_API } from 'src/app/core/const/api.constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

export interface Response {
    type?: string;
    status?: string;
    message?: string;
}

@Component({
    templateUrl: './app-recovery.component.html',
    styleUrls: ['../app-account.component.scss', './app-recovery.component.scss'],
    encapsulation: ViewEncapsulation.None,
})

export class AccountRecoveryComponent implements OnInit {
    public captcha: string = URL_API + "/auths.php";
    public hasSendMail = false;
    public recoveryForm: FormGroup;
    public loading = false;
    public response: Response;
    public restorePassword = null;
    public hasLogged = false;
    constructor(private authService: AuthService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router){

        if(this.authService.getToken() != null){
            this.hasLogged = true;
            this.router.navigate(['/Account']);
        } else {
            this.hasLogged = false;
            this.restorePassword = this.route.snapshot.paramMap.get('restorePassword');
            (this.restorePassword) ?  this.hasSendMail = true :  this.hasSendMail = false;
            
            
            if(this.restorePassword === null) {
                this.recoveryForm = this.fb.group({
                    email:   ['', [Validators.required, Validators.email]],
                    captcha: ['', [Validators.required,  Validators.minLength(5)]],
                });
            } else {  
                this.recoveryForm = this.fb.group({
                    password: ['', [Validators.required, Validators.minLength(5)]],
                    passwordCheck:   ['', [Validators.required, Validators.minLength(5)]],
                    captcha: ['', [Validators.required,  Validators.minLength(5)]]
                });
            }
        }
    } 

    ngOnInit() {}
    public auths(){
        this.captcha = URL_API + '/auths.php?ord='+(Math.random()*500000000);
    }

    public recovery(recoveryForm){
        this.loading = true;
        if(!this.hasSendMail){
            this.authService.recovery(recoveryForm.value.email, recoveryForm.value.captcha).subscribe(val => {
                this.response = val;
                if(this.checkError(val)){
                    this.recoveryForm.reset({email: recoveryForm.value.email, captcha: ''});
                    this.auths();
                } else {
                    this.recoveryForm.reset({email: '', captcha: ''});
                    this.auths();
                }
                this.loading = false;
            });
        } else {
            this.authService.newPassword(recoveryForm.value.password, recoveryForm.value.passwordCheck, recoveryForm.value.captcha, this.restorePassword).subscribe(val => {
                this.response = val;

                switch(this.response.type){
                    case "captcha": 
                        this.recoveryForm.reset({password: recoveryForm.value.password, passwordCheck: recoveryForm.value.passwordCheck, captcha: ''});
                    break;
                    case "timeOut" : 
                    case "password" :
                    case "recoveryOk" :
                        this.recoveryForm.reset({password: '', passwordCheck: '', captcha: ''});
                    break;
                }

                this.auths();
                this.loading = false;
            });

        }
    }

    checkError(response){
        if(response.status == "error" || response.status == "warning"){
            return true;
        }
        return false;
    }

    get f(){
        return this.recoveryForm.controls;
    }
}