import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Component, OnInit, Output, ViewEncapsulation, EventEmitter, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { IAccountUser } from 'src/app/core/modeles/account.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

export interface Image {
    url?: string;
    status?: string;
    dump?: string;
}

@Component({
    selector: 'app-avatar',
    templateUrl: './app-avatar.component.html',
    styleUrls: ['./app-avatar.component.scss'],
    encapsulation: ViewEncapsulation.None, 
})
export class AppAvatarComponent implements OnInit { 
    public loaded = false;
    public hasLoading = true;
    public editor = ClassicEditor;
    public account: IAccountUser;
    public signature: string;
    public errorAvatar = false;
    public functionAvatar = false;
    public avatarDisabledSubmit = true;
    public fileEvent = null;
    public oldImg;
    public selectedFile;
    public backImg: Image;

    constructor(private userService: UserService, private elem: ElementRef){
        this.userService.getAccount().subscribe(account => {
            this.account = account;
            this.oldImg = account.avatar;
            this.signature = account.signature;
            this.loaded = true;
            this.hasLoading = false;
        });
    }

    avatarForm = new FormGroup({
        file: new FormControl('', [Validators.required]),
        fileSource: new FormControl('', [Validators.required])
    });

    get f(){
        return this.avatarForm.controls;
    }

    onAvatarSubmit() {
        if(this.selectedFile != null){
            this.avatarForm.patchValue({
                fileSource: this.selectedFile
            });
            this.hasLoading = true;
            this.userService.updateAvatar(this.avatarForm.get('fileSource').value).subscribe(img => {
                this.backImg = img;
                let elements = document.querySelectorAll('.account .avatar');
                elements.forEach(item => {
                    item.setAttribute('src', this.backImg.url);
                });
                console.log(elements);
                this.hasLoading = false;
                this.avatarDisabledSubmit = true;
                this.fileEvent = null;
            });
        }
    }

    readFile(fileEvent: any) {
        this.backImg = null;
        this.fileEvent = fileEvent;
    }

    getImage(img) {
        if(img === null){
            this.avatarDisabledSubmit = true;
            this.account.avatar = this.oldImg;
            this.selectedFile = null;
        } else {
            this.avatarDisabledSubmit = false;
            this.account.avatar = img;
            this.selectedFile = this.fileEvent.target.files[0];
        }
    }
      
    ngOnInit() {}
}