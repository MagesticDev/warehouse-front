import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit, Output, ViewEncapsulation, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IAccountUser } from 'src/app/core/modeles/account.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

export interface Update {
    type?: string;
    status?: string;
    enum?: string;
}


@Component({
    templateUrl: './app-account-index.component.html',
    styleUrls: ['../app-account.component.scss', './app-account-index.component.scss']
})
export class AccountIndexComponent implements OnInit {
    public loaded = false;
    public hasLoading = true;
    public editor = ClassicEditor;
    public account: IAccountUser;
    public signature: string;
    public passwordForm: FormGroup;
    public update: Update;

    public emailForm: FormGroup;
    public signatureForm: FormGroup;

    constructor(private userService: UserService, private fb: FormBuilder){
        this.userService.getAccount().subscribe(account => {
            this.account = account;
            this.signature = account.signature;
            this.loaded = true;
            this.hasLoading = false;
        });

        this.passwordForm = this.fb.group({
            updatePass: ['', [Validators.required, Validators.minLength(5)]]
        });

        this.emailForm = this.fb.group({
            updateEmail: ['', [Validators.required, Validators.email]]
        });

        this.signatureForm = this.fb.group({
            updateSignature: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    get password(){
        return this.passwordForm.controls;
    }

    public updatePassword(passwordForm){
        this.hasLoading = true;
        this.userService.updatePassword(passwordForm.value.updatePass).subscribe(data => {
            this.update = data;
            this.hasLoading = false;
            this.passwordForm.reset({updatePass: ''});
        },
        error => {
            this.hasLoading = false;
        });
    }

    get email(){
        return this.emailForm.controls;
    }

    public updateEmail(emailForm){
        this.hasLoading = true;
        this.userService.updateEmail(emailForm.value.updateEmail).subscribe(data => {
            this.update = data;
            this.hasLoading = false;
            this.emailForm.reset({updateEmail: ''});
        },
        error => {
            this.hasLoading = false;
        });
    }

    get getSignature(){
        return this.signatureForm.controls;
    }

    public updateSignature(signatureForm){
        this.hasLoading = true;
        this.userService.updateSignature(signatureForm.value.updateSignature).subscribe(data => {
            this.update = data;
            this.hasLoading = false;
            this.signatureForm.reset({updateSignature: ''});
        },
        error => {
            this.hasLoading = false;
        });
    }

    public signatureChange(event){
        //console.log(EditorData);
        this.signatureForm.get('updateSignature').setValue(event);
    }

    ngOnInit() {}
}