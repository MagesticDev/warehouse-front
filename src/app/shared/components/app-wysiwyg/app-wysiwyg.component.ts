import { Component, Injectable, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
    selector: 'app-wysiwyg',
    templateUrl: './app-wysiwyg.component.html'
})
export class AppWysiwygComponent {
    public editor = ClassicEditor;
    public config = {
        placeholder: 'Ecrivez votre message...',
        language: 'fr',
        colorButton_colors: 'CF5D4E,454545,FFF,DDD,CCEAEE,66AB16',
        toolbar: [
            'heading', '|', 'bold', 'italic', 'fontColor', '|', 'bulletedList', 'numberedList', 'insertTable', '|', 'undo', 'redo'
        ],
        contentsCss: ['./app-wysiwyg.component.css'] 
    }

    
    @Input() public text: string;
    @Output() public wysiwyg = new EventEmitter();
    constructor() {
        this.editor.contentsCss = [ './app-wysiwyg.component.scss' ];
    }

    wysiwygChange({ editor }: ChangeEvent){
        const EditorData = editor.getData();
        this.wysiwyg.emit(EditorData);
    }
}