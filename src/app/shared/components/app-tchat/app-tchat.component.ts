import { Component, ElementRef, ViewChild, AfterViewChecked, DoCheck, IterableDiffers, HostListener, Input } from '@angular/core';
import { URL_API } from 'src/app/core/const/api.constants';
import { IAccountUser } from 'src/app/core/modeles/account.model';
import { ITchat } from 'src/app/core/modeles/tchat.modele';
import { AuthService } from 'src/app/core/services/auth.service';
import { ChatService } from 'src/app/core/services/tchat.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-tchat',
    templateUrl: './app-tchat.component.html',
    styleUrls: ['./app-tchat.component.scss'],
})

export class AppTchatComponent implements  DoCheck, AfterViewChecked {  
    
    public backMessage = [];
    public getTchatMessage: ITchat[] = [];
    public today: number;
    public addMessageValue: string = null;
    public getAvatar: string = undefined;

    private hasScrollIsEnd: boolean = true;
    private iterableDiffer;
    private numberOfMessagesChanged: boolean = false;

    public getTchat: boolean = false;
    public getFriends: boolean = false;
    public hasLogged = false;
    @Input() public LoggedInOk; 

    
    @ViewChild('scroll') private scroll: ElementRef;
    @ViewChild('inputMessage') inputMessage: ElementRef;

    @HostListener('scroll', ['$event']) 
    onScroll(event: any) {
        if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
            this.hasScrollIsEnd = true;
        }else{
            this.hasScrollIsEnd = false;
        }
    }

    public closeTchat(){
        this.getTchat = false;
        this.getFriends = false;  
    }
  
    public openModals(value: string) {
        switch(value){
            case 'tchat' :
                if(this.getTchat) return this.getTchat = false;
                this.getTchat = true;
                this.getFriends = false;  
            break; 
            case 'friends' :
                if(this.getFriends) return this.getFriends = false;
                this.getFriends = true;
                this.getTchat = false;
            break;
        }
        
        return false;
    }

    constructor(private chatService: ChatService, private iterableDiffers: IterableDiffers, public userService: UserService, public authService: AuthService){
        
        this.hasLogged = (authService.getToken() ? true : false);
        this.iterableDiffer = this.iterableDiffers.find([]).create(null);
        chatService.getMessageTchat().subscribe(messages => {
            this.getTchatMessage = messages;
        });
        chatService.messages.subscribe(msg => {
            this.backMessage.push({pseudo: msg.pseudo, message: msg.message, date: msg.date, avatar: msg.avatar});
            var audio = new Audio();
            audio.src = URL_API + "/includes/assets/songs/tchat.mp3";
            console.log(audio.src);
            audio.load();
            audio.play();
        });
    }

    ngDoCheck(): void {
        if (this.iterableDiffer.diff(this.backMessage)) {
            this.numberOfMessagesChanged = true;
        }
    }

    
    ngAfterViewChecked() : void { 
        if (this.numberOfMessagesChanged && this.hasScrollIsEnd) {
            this.scrollToBottom();
            this.numberOfMessagesChanged = false;
        }

        if(this.getTchatMessage && this.hasScrollIsEnd){
            this.scrollToBottom();
        }
    } 

    public send(input: any) {
        if(input.target.value){
            this.today = Date.now();
            this.userService.getAccount().subscribe((val: IAccountUser)  => {
                let message = {
                    pseudo: val.login,
                    message: input.target.value,
                    date: this.today,
                    avatar: val.avatar
                }
                this.chatService.messages.next(message);
                this.backMessage.push({pseudo: val.login, message: input.target.value, date: this.today, avatar: val.avatar});
                this.inputMessage.nativeElement.value = '';
                message.message = null;
            });
        }
    }

    private scrollToBottom(){
        try {
            this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
        } catch (e) {
            return;
        }
    }
}