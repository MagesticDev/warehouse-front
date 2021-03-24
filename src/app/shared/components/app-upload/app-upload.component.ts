import { Component, Injectable, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

@Component({
    selector: 'app-upload',
    templateUrl: './app-upload.component.html'
})
export class AppUploadComponent {
    public message = {};
    
    public _fileEvent: any;
    public error: boolean = false;
    
    getFileEvent() {
        return this._fileEvent;
    }

    @Input() set fileEvent(value: any) {
        this._fileEvent = value;
        this.getUpload();
    }

    @Output()
    public image = new EventEmitter();
    
    constructor() {
    }

    public getUpload(){
        const file = this._fileEvent.target.files[0];
        const ext = file.name.substring(file.name.lastIndexOf('.') + 1);
        if(ext){
            if(ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpeg' || ext.toLowerCase() == 'png' || ext.toLowerCase() == 'gif' || ext.toLowerCase() == 'jpg' || ext.toLowerCase() == 'x-png'){
                if(this._fileEvent.target.files && this._fileEvent.target.files.length > 0) {
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => {
                        let img = new Image();
                        img.onload = () => {
                            if(img.width > 400 || img.height > 400) {
                                this.message = {"type": "error", "message": "L'image est beaucoup trop grande"};
                                this.image.emit(null);
                            }
                        }

                        if(!this.error){
                            img.src = reader.result.toString();
                            this.message = {"type": "success", "message": "Votre avatar est prêt à être envoyé"};
                            this.image.emit(img.src);
                        }
                    }
                } else {
                    this.image.emit(null);
                    this.message = {"type": "error", "message": "Le fichier n'existe pas ou plus"};
                }
            } else {
                this.image.emit(null);
                this.message = {"type": "error", "message": "Le fichier comporte une extension invalide"};
            }
        } else {
            this.image.emit(null);
            this.message = {"type": "error", "message": "Le fichier ne comporte pas d'extension"};
        }
    }
}