import { Component, Injectable, Input, Output, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { URL_API } from "src/app/core/const/api.constants";

@Component({
    selector: 'app-wysiwyg',
    templateUrl: './app-wysiwyg.component.html',
    styleUrls: ['./app-wysiwyg.component.scss']
})
export class AppWysiwygComponent {
    public editor = ClassicEditor;
    public config = {
        placeholder: 'Ecrivez votre message...',
        toolbar: {
          items: [
            'bold',
            'italic',
            'underline',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'indent',
            'outdent',
            '|',
            'imageUpload',
            'youtube',
            'blockQuote',
            'insertTable',
            'undo',
            'redo',
          ]
        },
        colorButton_colors: 'CF5D4E,454545,FFF,DDD,CCEAEE,66AB16',
        image: {
          toolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
          ]
        },
        table: {
          contentToolbar: [
            'tableColumn',
            'tableRow',
            'mergeTableCells'
          ]
        },
        //extraPlugins: 'uploadimage',
        // This value must be kept in sync with the language defined in webpack.config.js.
        language: 'fr',
        ckfinder : { uploadUrl : URL_API + '/api/forum/upload'}
      }; 
      


    
    @Input() public text: string;
    @Output() public wysiwyg = new EventEmitter();
    constructor() {
        this.editor.contentsCss = [ './app-wysiwyg.component.scss' ];
    }

    wysiwygChange({ editor }: ChangeEvent){
        if(editor){
            const EditorData = editor.getData();
            this.wysiwyg.emit(EditorData);
        }
    }
}