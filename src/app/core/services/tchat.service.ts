import { Injectable } from "@angular/core";
import { Observable, Subject,  } from "rxjs";
import { WebsocketService } from "./websocket.service";
import { map } from "rxjs/operators";
import { ITchat } from "../modeles/tchat.modele";
import { HttpClient } from "@angular/common/http";

const CHAT_URL = "ws://127.0.0.1:8080";

export interface Message {
  pseudo: string;
  message: string;
  date: number;
  avatar: string;
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  public messages: Subject<Message>;
  public resourceUrl = '/api/tchat';

  constructor(wsService: WebsocketService, private http: HttpClient) {
    this.messages = <Subject<Message>>wsService.connect(CHAT_URL).pipe(map(
      (response: MessageEvent): Message => {
        let data = JSON.parse(response.data);
        return {
          pseudo: data.pseudo,
          message: data.message,
          date: data.date,
          avatar: data.avatar
        };
      }
    ));
  }

  public getMessageTchat():  Observable<ITchat[]> {
      return this.http.get<ITchat[]>(`${this.resourceUrl}/index`); 
  }
}